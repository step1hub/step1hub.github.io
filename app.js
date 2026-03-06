/* ============================================================
   STEP 1 STUDY HUB — Shared App Logic (app.js)
   ============================================================ */

// ── Nav Active State ──────────────────────────────────────
// Runs after DOMContentLoaded so nav.js has already injected the nav links
function setNavActive() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Exam Date ─────────────────────────────────────────────
function getExamDate() { return localStorage.getItem('step1-exam-date'); }
function setExamDate(d) { localStorage.setItem('step1-exam-date', d); }

function getDaysRemaining() {
  const s = getExamDate();
  if (!s) return null;
  const exam = new Date(s + 'T12:00:00');
  const now = new Date(); now.setHours(0,0,0,0);
  return Math.max(0, Math.round((exam - now) / (1000*60*60*24)));
}

function renderCountdown() {
  const daysEl = document.getElementById('cd-days');
  const dateEl = document.getElementById('cd-date');
  if (!daysEl) return;
  const days = getDaysRemaining();
  const s = getExamDate();
  if (days === null) {
    daysEl.textContent = '—'; if (dateEl) dateEl.textContent = 'Not set'; return;
  }
  daysEl.textContent = days;
  if (dateEl) {
    const exam = new Date(s + 'T12:00:00');
    dateEl.textContent = exam.toLocaleDateString('en-US', {month:'long',day:'numeric',year:'numeric'});
  }
  daysEl.style.color = days <= 30 ? 'var(--sakura2)' : days <= 60 ? 'var(--gold)' : 'var(--fuji)';
  updateNavPill();
}

function updateNavPill() {
  const pill = document.getElementById('nav-exam-pill');
  if (!pill) return;
  const days = getDaysRemaining();
  if (days === null) { pill.textContent = 'Set Exam Date ✦'; return; }
  pill.textContent = `⏱ ${days}d remaining`;
}

// ── Modal helpers ─────────────────────────────────────────
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function openDateModal() {
  const s = getExamDate();
  const inp = document.getElementById('date-input');
  if (s && inp) inp.value = s;
  openModal('date-modal');
}
function closeDateModal() { closeModal('date-modal'); }

async function saveDateModal() {
  const v = document.getElementById('date-input')?.value;
  if (v) {
    setExamDate(v);
    renderCountdown();
    await CloudSync.saveExamDate(v);
  }
  closeDateModal();
}

// close overlay on bg click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// ── Firebase Cloud Sync ───────────────────────────────────
// Syncs exam date and study data to Firestore when user is signed in.
// Falls back to localStorage when signed out.

const CloudSync = {
  async saveExamDate(dateStr) {
    if (!window.db || !window.currentUser) return;
    try {
      await db.collection('users').doc(currentUser.uid).set({ examDate: dateStr }, { merge: true });
    } catch(e) { console.warn('Cloud save exam date failed:', e); }
  },

  async loadExamDate() {
    if (!window.db || !window.currentUser) return null;
    try {
      const doc = await db.collection('users').doc(currentUser.uid).get();
      return doc.exists ? (doc.data().examDate || null) : null;
    } catch(e) { console.warn('Cloud load exam date failed:', e); return null; }
  },

  async saveCollection(key, data) {
    if (!window.db || !window.currentUser) return;
    try {
      await db.collection('users').doc(currentUser.uid)
        .collection('data').doc(key).set({ payload: JSON.stringify(data) });
    } catch(e) { console.warn(`Cloud save ${key} failed:`, e); }
  },

  async loadCollection(key) {
    if (!window.db || !window.currentUser) return null;
    try {
      const doc = await db.collection('users').doc(currentUser.uid)
        .collection('data').doc(key).get();
      return doc.exists ? JSON.parse(doc.data().payload) : null;
    } catch(e) { console.warn(`Cloud load ${key} failed:`, e); return null; }
  }
};

// Listen for auth changes dispatched by auth.js
window.addEventListener('appAuthStateChanged', async (e) => {
  const user = e.detail.user;
  if (user) {
    // User just signed in — pull exam date from cloud
    const cloudDate = await CloudSync.loadExamDate();
    if (cloudDate) {
      localStorage.setItem('step1-exam-date', cloudDate);
      renderCountdown();
    }
  } else {
    // Signed out — clear sensitive data from localStorage
    localStorage.removeItem('step1-exam-date');
    renderCountdown();
  }
  // Update auth button label everywhere
  const authBtn = document.getElementById('auth-btn');
  if (authBtn) authBtn.textContent = user ? `Sign Out (${user.displayName || user.email})` : 'Sign In with Google';
});
const Store = {
  get(k, def = null) {
    try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : def; }
    catch { return def; }
  },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

// ── Quotes ────────────────────────────────────────────────
const QUOTES = [
  {q:"Medicine is a science of uncertainty and an <strong>art of probability</strong>.", a:"— William Osler"},
  {q:"The good physician treats the disease; the <strong>great physician</strong> treats the patient.", a:"— William Osler"},
  {q:"Wherever the art of medicine is loved, there is also a love of <strong>humanity</strong>.", a:"— Hippocrates"},
  {q:"In nothing do men more nearly approach the gods than in <strong>giving health to men</strong>.", a:"— Cicero"},
  {q:"The secret of the care of the patient is in <strong>caring for the patient</strong>.", a:"— Francis Peabody"},
  {q:"After climbing a great hill, one only finds that there are <strong>many more hills</strong> to climb.", a:"— Nelson Mandela"},
  {q:"Fall down seven times, <strong>stand up eight</strong>.", a:"— Japanese Proverb (七転び八起き)"},
  {q:"The cherry blossom is beloved because it is <strong>here and then gone</strong> — a reminder to live fully now.", a:"— Japanese Tradition"},
  {q:"<strong>Ganbatte</strong> — do your best with everything you have.", a:"— Japanese Proverb"},
  {q:"You are not behind. You are on your <strong>own timeline</strong>, and that's enough.", a:"— Reminder for today"},
];

function renderQuote() {
  const el = document.getElementById('daily-quote');
  const at = document.getElementById('quote-attr');
  if (!el) return;
  const d = new Date(); const i = d.getDate() % QUOTES.length;
  el.innerHTML = '\u201c' + QUOTES[i].q + '\u201d';
  if (at) at.textContent = QUOTES[i].a;
}

// ── Footer date ───────────────────────────────────────────
function renderFooterDate() {
  const el = document.getElementById('footer-date');
  if (el) el.textContent = new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setNavActive();
  renderCountdown();
  renderQuote();
  renderFooterDate();
  updateNavPill();
});
