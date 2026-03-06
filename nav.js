/* nav.js — injects shared navigation, Firebase SDK, and auth.js */

// Inject Firebase SDK scripts into <head> dynamically
(function injectFirebase() {
  const scripts = [
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js',
  ];
  scripts.forEach(src => {
    const s = document.createElement('script');
    s.src = src; s.defer = true;
    document.head.appendChild(s);
  });

  // auth.js must load after Firebase SDKs — use load event on last script
  const authScript = document.createElement('script');
  authScript.src = 'auth.js';
  // load after the compat scripts have a chance to run
  window.addEventListener('load', () => {
    // auth.js is already in the queue via defer; this is a safety fallback
  });
  document.head.appendChild(authScript);
})();

(function() {
  const nav = `
  <nav class="nav">
    <div class="nav-inner">
      <span class="nav-brand">🌸 Step 1</span>
      <div class="nav-links">
        <a class="nav-link" href="index.html">Home</a>
        <a class="nav-link" href="drugfacts.html">Drug Facts</a>
        <a class="nav-link" href="microfacts.html">Micro Facts</a>
        <a class="nav-link" href="sketchy-pharm.html">Sketchy Pharm</a>
        <a class="nav-link" href="sketchy-micro.html">Sketchy Micro</a>
        <a class="nav-link" href="pixorize.html">Pixorize</a>
        <a class="nav-link" href="dashboard.html">Dashboard</a>
      </div>
      <div class="nav-right">
        <button class="nav-exam-pill" id="nav-exam-pill" onclick="openDateModal()">Set Exam Date ✦</button>
        <button id="auth-btn" onclick="handleAuthClick()" style="
          padding:6px 14px; border-radius:99px; border:1px solid var(--border);
          background:var(--surface); font-size:12px; font-weight:600; color:var(--ink2);
          cursor:pointer; transition:all .15s; white-space:nowrap;
        ">Sign In with Google</button>
      </div>
    </div>
  </nav>`;

  const dateModal = `
  <div class="modal-overlay" id="date-modal">
    <div class="modal">
      <div class="modal-title">Set Your Exam Date</div>
      <div class="modal-sub">Your countdown and daily question goals will update automatically. Sign in to sync across devices.</div>
      <label>Exam Date</label>
      <input type="date" id="date-input"/>
      <div class="modal-btns">
        <button class="btn-cancel" onclick="closeDateModal()">Cancel</button>
        <button class="btn-save" onclick="saveDateModal()">Save ✦</button>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', nav + dateModal);
})();

function handleAuthClick() {
  if (!window.auth) return;
  if (window.currentUser) {
    window.auth.signOut().catch(console.error);
  } else {
    const provider = new firebase.auth.GoogleAuthProvider();
    window.auth.signInWithPopup(provider).catch(err => {
      console.error('Sign in failed:', err);
      alert('Sign in failed: ' + err.message);
    });
  }
}
