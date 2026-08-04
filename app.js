/* ==========================================================================
   AI PROMPT LIBRARY - MAIN APPLICATION ENGINE (V2.0 RELEASE NOTES & REFINEMENTS)
   ========================================================================== */

(function () {
  'use strict';

  // --- STATE ---
  let allPrompts = [];
  let currentCategory = 'all';
  let searchQuery = '';
  let bookmarks = new Set(JSON.parse(localStorage.getItem('ai_prompt_bookmarks') || '[]'));
  let currentTheme = localStorage.getItem('ai_prompt_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Apply initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);

  // --- OFFICIAL AI LOGO SVGS ---
  const AI_LOGOS = {
    chatgpt: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: #10a37f; flex-shrink: 0;"><path d="M22.28 9.82a6 6 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.06 6.06 0 0 0-10.27 2.17 6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 6 6 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 6.06 6.06 0 0 0 10.27-2.17 6 6 0 0 0 4-2.9 6.05 6.05 0 0 0-.73-7.27zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/></svg>`,
    claude: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: #da7756; flex-shrink: 0;"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2L12 16.6l-6.3 4.6 2.3-7.2-6-4.6h7.6z"/></svg>`,
    gemini: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: #3b82f6; flex-shrink: 0;"><path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"/></svg>`,
    perplexity: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #06b6d4; flex-shrink: 0;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    copilot: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: #ec4899; flex-shrink: 0;"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z"/></svg>`
  };

  // --- DOM ELEMENTS ---
  const promptsGrid = document.getElementById('promptsGrid');
  const searchInput = document.getElementById('searchInput');
  const catContainer = document.getElementById('catContainer');
  const resultsStats = document.getElementById('resultsStats');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const releaseNotesBtn = document.getElementById('releaseNotesBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalContainer = document.getElementById('modalContainer');
  const toastContainer = document.getElementById('toastContainer');

  const exportBtn = document.getElementById('exportBtn');
  const exportMenu = document.getElementById('exportMenu');
  const exportMarkdownBtn = document.getElementById('exportMarkdownBtn');
  const exportJsonBtn = document.getElementById('exportJsonBtn');

  // Category Configuration
  const categories = [
    { id: 'all', name: 'All Prompts' },
    { id: 'favorites', name: 'Saved ⭐' },
    { id: 'drafting', name: 'Drafting & Content' },
    { id: 'review', name: 'Review & QA' },
    { id: 'video', name: 'Video & Audio' },
    { id: 'format', name: 'Format & Convert' },
    { id: 'structure', name: 'Structure & Style' },
    { id: 'strategy', name: 'Strategy & Planning' },
    { id: 'apidocs', name: 'Sample Product Docs' }
  ];

  // --- INITIALIZATION ---
  async function init() {
    setupEventListeners();
    renderCategories();
    await loadPromptsData();
    renderPrompts();
  }

  // --- DATA LOADING ---
  async function loadPromptsData() {
    if (window.PROMPTS_DATA && Array.isArray(window.PROMPTS_DATA) && window.PROMPTS_DATA.length > 0) {
      allPrompts = window.PROMPTS_DATA;
      return;
    }
    try {
      const response = await fetch('data/prompts.json');
      if (!response.ok) throw new Error('Network response failed');
      allPrompts = await response.json();
    } catch (err) {
      console.warn('Fetch data/prompts.json failed:', err);
    }
  }

  // --- RENDER CATEGORY PILLS ---
  function renderCategories() {
    catContainer.innerHTML = '';
    categories.forEach(cat => {
      const pill = document.createElement('button');
      pill.className = `cat-pill ${cat.id === currentCategory ? 'active' : ''}`;
      pill.dataset.cat = cat.id;

      const count = getCategoryCount(cat.id);
      pill.innerHTML = `
        <span>${cat.name}</span>
        <span class="pill-count">${count}</span>
      `;

      pill.addEventListener('click', () => {
        currentCategory = cat.id;
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderPrompts();
      });

      catContainer.appendChild(pill);
    });
  }

  function getCategoryCount(catId) {
    if (!allPrompts.length) return 0;
    if (catId === 'all') return allPrompts.length;
    if (catId === 'favorites') return bookmarks.size;
    return allPrompts.filter(p => p.categoryId === catId).length;
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('ai_prompt_theme', currentTheme);
    });

    if (releaseNotesBtn) {
      releaseNotesBtn.addEventListener('click', openReleaseNotesModal);
    }

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPrompts();
    });

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    if (exportBtn && exportMenu) {
      exportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        exportMenu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        exportMenu.classList.remove('show');
        document.querySelectorAll('.launch-menu').forEach(m => m.classList.remove('show'));
      });

      exportMarkdownBtn.addEventListener('click', exportFilteredAsMarkdown);
      exportJsonBtn.addEventListener('click', exportFilteredAsJson);
    }
  }

  // --- FILTER PROMPTS ---
  function filterPrompts() {
    return allPrompts.filter(item => {
      if (currentCategory === 'favorites') {
        if (!bookmarks.has(item.id)) return false;
      } else if (currentCategory !== 'all' && item.categoryId !== currentCategory) {
        return false;
      }

      if (searchQuery) {
        const textToSearch = [
          item.title,
          item.useCase,
          item.copyPrompt,
          item.categoryName,
          ...(item.tags || [])
        ].join(' ').toLowerCase();
        
        if (!textToSearch.includes(searchQuery)) return false;
      }

      return true;
    });
  }

  // --- RENDER PROMPTS GRID ---
  function renderPrompts() {
    const filtered = filterPrompts();
    promptsGrid.innerHTML = '';

    renderCategories();
    resultsStats.textContent = `Showing ${filtered.length} of ${allPrompts.length} prompts`;

    if (filtered.length === 0) {
      promptsGrid.innerHTML = `
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No matching prompts found</h3>
          <p>Try searching for different keywords or clearing filters.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(prompt => {
      const card = createPromptCard(prompt);
      promptsGrid.appendChild(card);
    });
  }

  function extractPlaceholders(text) {
    const regex = /\[([A-Za-z0-9_\/\s,\-\.\?]+?)\]/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.add(match[1]);
    }
    return Array.from(matches);
  }

  // --- LAUNCH AI TOOL ---
  function launchAiTool(toolName, promptText) {
    const encoded = encodeURIComponent(promptText);
    copyToClipboard(promptText);

    if (toolName === 'chatgpt') {
      window.open(`https://chatgpt.com/?q=${encoded}`, '_blank');
      showToast('Copied prompt & opening ChatGPT...');
    } else if (toolName === 'claude') {
      window.open(`https://claude.ai/new`, '_blank');
      showToast('Copied prompt! Opening Claude...');
    } else if (toolName === 'gemini') {
      window.open(`https://gemini.google.com/app`, '_blank');
      showToast('Copied prompt! Opening Gemini...');
    } else if (toolName === 'perplexity') {
      window.open(`https://www.perplexity.ai/?q=${encoded}`, '_blank');
      showToast('Copied prompt & opening Perplexity...');
    } else if (toolName === 'copilot') {
      window.open(`https://copilot.microsoft.com/`, '_blank');
      showToast('Copied prompt! Opening Copilot...');
    }
  }

  // --- CREATE PROMPT CARD ELEMENT ---
  function createPromptCard(prompt) {
    const isBookmarked = bookmarks.has(prompt.id);
    const card = document.createElement('div');
    card.className = 'prompt-card';

    card.innerHTML = `
      <div class="card-header">
        <div class="card-title-group">
          <div>
            <h3 class="card-title">${escapeHtml(prompt.title)}</h3>
            <p class="card-usecase">${escapeHtml(prompt.useCase)}</p>
          </div>
        </div>
        <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" title="Save Prompt" aria-label="Bookmark">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      </div>

      <div class="card-tags">
        <span class="tag-badge" style="background: rgba(148, 163, 184, 0.12); color: var(--text-light);">${escapeHtml(prompt.categoryName)}</span>
      </div>

      <div class="code-container">
        <div class="code-content">${prompt.promptText}</div>
      </div>

      <div class="card-actions">
        <button class="btn-copy">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy
        </button>
        
        <!-- Multi-AI Launch Dropdown with Official Logos -->
        <div class="launch-dropdown">
          <button class="btn-ai-launch btn-launch-toggle">
            Launch AI ▾
          </button>
          <div class="launch-menu">
            <button class="launch-item" data-tool="chatgpt">${AI_LOGOS.chatgpt} ChatGPT</button>
            <button class="launch-item" data-tool="claude">${AI_LOGOS.claude} Claude</button>
            <button class="launch-item" data-tool="gemini">${AI_LOGOS.gemini} Google Gemini</button>
            <button class="launch-item" data-tool="perplexity">${AI_LOGOS.perplexity} Perplexity AI</button>
            <button class="launch-item" data-tool="copilot">${AI_LOGOS.copilot} MS Copilot</button>
          </div>
        </div>

        <button class="btn-expand">Customize &amp; View</button>
      </div>

      ${prompt.proTip ? `
        <div class="card-protip">
          <span class="protip-title">Tip:</span>
          <span>${escapeHtml(prompt.proTip)}</span>
        </div>
      ` : ''}
    `;

    const bookmarkBtn = card.querySelector('.btn-bookmark');
    bookmarkBtn.addEventListener('click', () => {
      if (bookmarks.has(prompt.id)) {
        bookmarks.delete(prompt.id);
        showToast('Prompt removed from favorites');
      } else {
        bookmarks.add(prompt.id);
        showToast('Prompt saved to favorites ⭐');
      }
      localStorage.setItem('ai_prompt_bookmarks', JSON.stringify([...bookmarks]));
      renderPrompts();
    });

    const copyBtn = card.querySelector('.btn-copy');
    copyBtn.addEventListener('click', () => {
      copyToClipboard(prompt.copyPrompt);
    });

    const launchToggle = card.querySelector('.btn-launch-toggle');
    const launchMenu = card.querySelector('.launch-menu');
    
    launchToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.launch-menu').forEach(m => {
        if (m !== launchMenu) m.classList.remove('show');
      });
      launchMenu.classList.toggle('show');
    });

    launchMenu.querySelectorAll('.launch-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const tool = item.dataset.tool;
        launchMenu.classList.remove('show');
        launchAiTool(tool, prompt.copyPrompt);
      });
    });

    const expandBtn = card.querySelector('.btn-expand');
    expandBtn.addEventListener('click', () => {
      openModal(prompt);
    });

    return card;
  }

  // --- MODAL DIALOG WITH LIVE VARIABLE CUSTOMIZER & MULTI-AI LAUNCHER ---
  function openModal(prompt) {
    const placeholders = extractPlaceholders(prompt.copyPrompt);
    let activeCustomValues = {};

    function getCustomizedText() {
      let result = prompt.copyPrompt;
      placeholders.forEach(ph => {
        const val = activeCustomValues[ph];
        if (val && val.trim() !== '') {
          result = result.replaceAll(`[${ph}]`, val.trim());
        }
      });
      return result;
    }

    let formFieldsHtml = '';
    if (placeholders.length > 0) {
      formFieldsHtml = `
        <div class="customizer-box">
          <div class="customizer-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Customize Variables (${placeholders.length})
          </div>
          <div class="customizer-grid">
            ${placeholders.map((ph, idx) => `
              <div class="field-group">
                <label class="field-label" for="ph_input_${idx}">[${escapeHtml(ph)}]</label>
                <input type="text" id="ph_input_${idx}" class="field-input" data-ph="${escapeHtml(ph)}" placeholder="Fill value..." />
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    modalContainer.innerHTML = `
      <div class="modal-header">
        <div class="card-title-group">
          <div>
            <h3 class="card-title" style="font-size: 1.25rem;">${escapeHtml(prompt.title)}</h3>
            <p class="card-usecase">${escapeHtml(prompt.useCase)}</p>
          </div>
        </div>
        <button class="btn-icon" id="closeModalBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <div class="card-tags" style="margin-bottom: 1.2rem;">
          <span class="tag-badge" style="background: rgba(148, 163, 184, 0.12); color: var(--text-light);">${escapeHtml(prompt.categoryName)}</span>
        </div>

        ${formFieldsHtml}

        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-light); margin: 1rem 0 0.4rem; text-transform: uppercase;">Live Prompt Preview:</div>
        <div class="code-container" style="margin-bottom: 1.5rem;">
          <div class="code-content modal-code" id="modalCodePreview">${prompt.promptText}</div>
        </div>

        <div class="card-actions" style="flex-wrap: wrap; gap: 0.75rem;">
          <button class="btn-copy" id="modalCopyBtn" style="flex: 1; justify-content: center; min-width: 200px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy Customized Prompt
          </button>
          
          <div class="launch-dropdown">
            <button class="btn-ai-launch" id="modalLaunchToggle" style="padding: 0.6rem 1.1rem; font-size: 0.88rem;">
              Launch in AI ▾
            </button>
            <div class="launch-menu" id="modalLaunchMenu">
              <button class="launch-item" data-tool="chatgpt">${AI_LOGOS.chatgpt} ChatGPT</button>
              <button class="launch-item" data-tool="claude">${AI_LOGOS.claude} Claude</button>
              <button class="launch-item" data-tool="gemini">${AI_LOGOS.gemini} Google Gemini</button>
              <button class="launch-item" data-tool="perplexity">${AI_LOGOS.perplexity} Perplexity AI</button>
              <button class="launch-item" data-tool="copilot">${AI_LOGOS.copilot} MS Copilot</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const modalCodePreview = document.getElementById('modalCodePreview');
    const modalLaunchToggle = document.getElementById('modalLaunchToggle');
    const modalLaunchMenu = document.getElementById('modalLaunchMenu');

    function updatePreview() {
      const updatedText = getCustomizedText();
      modalCodePreview.textContent = updatedText;
    }

    placeholders.forEach((ph, idx) => {
      const inputEl = document.getElementById(`ph_input_${idx}`);
      if (inputEl) {
        inputEl.addEventListener('input', (e) => {
          activeCustomValues[ph] = e.target.value;
          updatePreview();
        });
      }
    });

    updatePreview();

    modalLaunchToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      modalLaunchMenu.classList.toggle('show');
    });

    modalLaunchMenu.querySelectorAll('.launch-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const tool = item.dataset.tool;
        modalLaunchMenu.classList.remove('show');
        launchAiTool(tool, getCustomizedText());
      });
    });

    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    document.getElementById('modalCopyBtn').addEventListener('click', () => {
      copyToClipboard(getCustomizedText());
    });

    modalBackdrop.classList.add('active');
  }

  // --- RELEASE NOTES MODAL ---
  function openReleaseNotesModal() {
    modalContainer.innerHTML = `
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span style="font-size: 1.4rem;">🚀</span>
          <div>
            <h3 class="card-title" style="font-size: 1.2rem;">Prompt Library v2.0 Release Notes</h3>
            <p class="card-usecase">Summary of recent updates &amp; enhancements</p>
          </div>
        </div>
        <button class="btn-icon" id="closeModalBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="modal-body" style="line-height: 1.7; font-size: 0.92rem;">
        <p style="margin-bottom: 1rem; color: var(--text-muted);">
          Welcome to the updated <strong>Awesome Prompt Library for Writers &amp; Tech Writers</strong>! Here is a summary of the latest enhancements made to optimize your workflow.
        </p>

        <h4 style="font-size: 0.95rem; font-weight: 700; color: #6366f1; margin: 1.2rem 0 0.5rem;">✨ Highlights &amp; Improvements:</h4>
        <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-main);">
          <li><strong>Data-Driven Architecture:</strong> Refactored static HTML into structured JSON (<code>data/prompts.json</code>), making it easy to add, update, and manage prompts.</li>
          <li><strong>Modern Responsive Design:</strong> Glassmorphism header, Dark/Light mode toggle, sleek typography, and instant category pills.</li>
          <li><strong>Interactive Variable Customizer:</strong> Automatically detects <code>[PLACEHOLDER]</code> variables and provides a live form preview so you can customize prompts before copying.</li>
          <li><strong>Multi-AI Launcher:</strong> Launch prompts directly into <strong>ChatGPT</strong>, <strong>Claude</strong>, <strong>Google Gemini</strong>, <strong>Perplexity AI</strong>, or <strong>MS Copilot</strong> with official vector logos.</li>
          <li><strong>Export Features:</strong> Download prompts as Markdown (<code>.md</code>) or JSON for Notion, Confluence, or GitHub wikis.</li>
          <li><strong>Streamlined Prompt View:</strong> Simplified cards by replacing "Pro Tip:" with "Tip:" and removing unnecessary level filters for a cleaner experience.</li>
        </ul>

        <div class="card-protip" style="margin-top: 1.5rem; background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: 12px; padding: 0.85rem 1rem;">
          <span class="protip-title">🤖 Note:</span>
          <span>These release notes were created using one of the Release Notes prompts in this library launched directly via <strong>Claude</strong>!</span>
        </div>
      </div>
    `;

    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    modalBackdrop.classList.add('active');
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
  }

  // --- EXPORT FUNCTIONALITY (MARKDOWN & JSON) ---
  function exportFilteredAsMarkdown() {
    const filtered = filterPrompts();
    if (!filtered.length) {
      showToast('No prompts available to export');
      return;
    }

    let md = `# AI Prompt Library Export\n\nGenerated on: ${new Date().toLocaleDateString()}\nTotal Prompts: ${filtered.length}\n\n---\n\n`;

    filtered.forEach(p => {
      md += `## ${p.title}\n`;
      md += `**Category:** ${p.categoryName}\n\n`;
      md += `> ${p.useCase}\n\n`;
      md += `\`\`\`text\n${p.copyPrompt}\n\`\`\`\n\n`;
      if (p.proTip) {
        md += `*Tip:* ${p.proTip}\n\n`;
      }
      md += `---\n\n`;
    });

    downloadFile(md, `prompt-library-export-${Date.now()}.md`, 'text/markdown');
    showToast(`Exported ${filtered.length} prompts to Markdown! 📄`);
  }

  function exportFilteredAsJson() {
    const filtered = filterPrompts();
    if (!filtered.length) {
      showToast('No prompts available to export');
      return;
    }

    const jsonStr = JSON.stringify(filtered, null, 2);
    downloadFile(jsonStr, `prompt-library-export-${Date.now()}.json`, 'application/json');
    showToast(`Exported ${filtered.length} prompts to JSON! 📦`);
  }

  function downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // --- COPY TO CLIPBOARD & TOAST ---
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Prompt copied to clipboard!');
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Prompt copied to clipboard!');
    });
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // --- UTILS ---
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }

  document.addEventListener('DOMContentLoaded', init);

})();
