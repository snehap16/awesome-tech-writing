/**
 * The Vinyl King - Application Logic & Turntable Controller
 */

let currentSongIndex = 0;
let activeMood = "Romantic";
let isPlaying = false;

let ytPlayer = null;
let isYtReady = false;

// YOUTUBE IFRAME API READY HANDLER
window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player("yt-player-target", {
    height: "100%",
    width: "100%",
    videoId: SONGS_VAULT[0].ytId,
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1
    },
    events: {
      onReady: () => { isYtReady = true; },
      onStateChange: onPlayerStateChange
    }
  });
};

function onPlayerStateChange(event) {
  const vinyl = document.getElementById("turntable-vinyl");
  const tonearm = document.getElementById("tonearm-rod");
  const led = document.getElementById("status-led-bulb");
  const ledText = document.getElementById("status-led-label");
  const btn = document.getElementById("master-play-btn");

  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    vinyl.classList.add("spinning");
    tonearm.classList.add("playing");
    led.classList.add("active");
    ledText.textContent = "PLAYING VINYL";
    btn.textContent = "⏸";
  } else {
    isPlaying = false;
    vinyl.classList.remove("spinning");
    tonearm.classList.remove("playing");
    led.classList.remove("active");
    ledText.textContent = "TURNTABLE PAUSED";
    btn.textContent = "▶";

    if (event.data === YT.PlayerState.ENDED) {
      shuffleVinylMood();
    }
  }
}

function toggleTurntablePlay() {
  if (!isYtReady || !ytPlayer) return;
  if (isPlaying) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

function loadTrack(index, autoPlay = true) {
  if (index < 0 || index >= SONGS_VAULT.length) index = 0;
  currentSongIndex = index;
  const s = SONGS_VAULT[index];

  document.getElementById("player-track-name").textContent = s.title;
  document.getElementById("player-movie-name").textContent = "🎬 " + s.movie + " (" + s.year + ")";
  document.getElementById("player-artists-name").textContent = "Composed by " + s.music + " • Performed by " + s.singers;
  document.getElementById("vinyl-art-movie").textContent = s.movie.toUpperCase();

  if (isYtReady && ytPlayer && ytPlayer.loadVideoById) {
    if (autoPlay) {
      ytPlayer.loadVideoById({ videoId: s.ytId, startSeconds: 0 });
      ytPlayer.playVideo();
    } else {
      ytPlayer.cueVideoById({ videoId: s.ytId, startSeconds: 0 });
    }
  }

  highlightActiveCard(s.id);
  showToast("Dropping needle on: " + s.title);
}

function playNextRecord() {
  loadTrack((currentSongIndex + 1) % SONGS_VAULT.length, true);
}

function playPreviousRecord() {
  loadTrack((currentSongIndex - 1 + SONGS_VAULT.length) % SONGS_VAULT.length, true);
}

function setVinylMood(mood, chipEl) {
  activeMood = mood;
  document.querySelectorAll(".mood-chip").forEach(c => c.classList.remove("active"));
  if (chipEl) chipEl.classList.add("active");

  let pool = (mood === "Anything") ? SONGS_VAULT : SONGS_VAULT.filter(s => s.mood.toLowerCase() === mood.toLowerCase());
  if (pool.length === 0) pool = SONGS_VAULT;

  let choices = pool.filter(s => s.id !== SONGS_VAULT[currentSongIndex].id);
  if (choices.length === 0) choices = pool;

  const randomPick = choices[Math.floor(Math.random() * choices.length)];
  const idx = SONGS_VAULT.findIndex(s => s.id === randomPick.id);
  loadTrack(idx, true);
}

function shuffleVinylMood() {
  setVinylMood(activeMood, null);
}

// RENDER DISCOGRAPHY SHELF
function renderShelf(list) {
  const container = document.getElementById("songs-shelf-grid");
  document.getElementById("vault-count-text").textContent = list.length + " Verified Anthems starring Emraan Hashmi";

  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3.5rem; color: var(--text-muted);">No records found matching your search</div>`;
    return;
  }

  container.innerHTML = list.map((s, idx) => {
    const isCurrent = (SONGS_VAULT[currentSongIndex].id === s.id);
    const dotClass = "dot-" + s.mood.toLowerCase();
    return `
      <div class="vinyl-track-card ${isCurrent ? "active-record" : ""}" id="card-${s.id}" onclick="onSelectTrack('${s.id}')">
        <div class="card-track-number">${idx + 1}</div>
        <div class="card-info-block">
          <div class="card-title-text">${s.title}</div>
          <div class="card-movie-text">${s.movie} (${s.year}) • ${s.singers}</div>
        </div>
        <div class="card-mood-indicator ${dotClass}" title="${s.mood}"></div>
      </div>
    `;
  }).join("");
}

function onSelectTrack(id) {
  const idx = SONGS_VAULT.findIndex(s => s.id === id);
  if (idx !== -1) {
    loadTrack(idx, true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function highlightActiveCard(id) {
  document.querySelectorAll(".vinyl-track-card").forEach(c => c.classList.remove("active-record"));
  const target = document.getElementById("card-" + id);
  if (target) target.classList.add("active-record");
}

function onSearchFilter() {
  const q = document.getElementById("search-vinyl-input").value.toLowerCase().trim();
  const filtered = SONGS_VAULT.filter(s => 
    s.title.toLowerCase().includes(q) ||
    s.movie.toLowerCase().includes(q) ||
    s.singers.toLowerCase().includes(q) ||
    s.music.toLowerCase().includes(q)
  );
  renderShelf(filtered);
}

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast-msg");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  renderShelf(SONGS_VAULT);
});
