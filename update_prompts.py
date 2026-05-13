import re

with open('ai-prompt-library.html', 'r') as f:
    content = f.read()

# Update header stats
content = re.sub(r'<strong>38</strong> Prompts', r'<strong>42</strong> Prompts', content)

# Update nav counts
content = re.sub(r'data-cat="drafting">Drafting & Content Creation <span class="nav-count">6</span>', r'data-cat="drafting">Drafting & Content Creation <span class="nav-count">8</span>', content)
content = re.sub(r'data-cat="format">Format & Convert <span class="nav-count">4</span>', r'data-cat="format">Format & Convert <span class="nav-count">5</span>', content)
content = re.sub(r'data-cat="apidocs">Sample Product Documentation <span class="nav-count">15</span>', r'data-cat="apidocs">Sample Product Documentation <span class="nav-count">16</span>', content)

# Update intro bar
intro_old = r'This library gives you 38 ready-to-use AI prompts built specifically for technical writers. Each prompt follows prompt engineering best practices — just copy it, fill in the bracketed placeholders with your own details, and paste it into any AI platform to get a strong, structured output in seconds.'
intro_new = r'This library gives you 42 ready-to-use AI prompts built specifically for technical writers. Each prompt follows prompt engineering best practices — just copy it, fill in the bracketed placeholders with your own details, and paste it into any AI platform to get a strong, structured output in seconds.<br><br><strong>Pro Tip:</strong> For complex tasks, ask the AI to "think step-by-step" before answering. Whenever possible, paste a good example of your past work along with the prompt (Few-Shot Prompting).'
content = content.replace(intro_old, intro_new)

# Update Result Count
content = re.sub(r'Showing <strong>38</strong> of 38 prompts', r'Showing <strong>42</strong> of 42 prompts', content)

# Update Category Badges
content = re.sub(r'<h2 class="cat-title">Drafting & Content Creation</h2>\s*<span class="cat-badge">6 prompts</span>', r'<h2 class="cat-title">Drafting & Content Creation</h2>\n      <span class="cat-badge">8 prompts</span>', content)
content = re.sub(r'<h2 class="cat-title">Format & Convert</h2>\s*<span class="cat-badge">4 prompts</span>', r'<h2 class="cat-title">Format & Convert</h2>\n      <span class="cat-badge">5 prompts</span>', content)
content = re.sub(r'<h2 class="cat-title">Sample Product Documentation Prompts</h2>\s*<span class="cat-badge">15 prompts</span>', r'<h2 class="cat-title">Sample Product Documentation Prompts</h2>\n      <span class="cat-badge">16 prompts</span>', content)

# We also need to add the new prompt cards and update the XML tags.

with open('ai-prompt-library_updated.html', 'w') as f:
    f.write(content)
