/* ============================================================
   RASEL MONDAL — Academic Portfolio · main.js
   ============================================================ */

/* ── NAV SCROLL STATE ─────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

/* ── HERO CANVAS  (neural-net-like graph) ─────────────────── */
const canvas = document.getElementById('heroCanvas');
const ctx    = canvas.getContext('2d');

let W, H, nodes = [], animId;

const N_NODES   = 60;
const MAX_DIST  = 140;
const GOLD      = '#c3a364';
const GOLD_DIM  = 'rgba(195,163,100,';

function resize() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}

function initNodes() {
  nodes = Array.from({ length: N_NODES }, () => ({
    x:  Math.random() * W,
    y:  Math.random() * H,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r:  Math.random() * 2 + 1.2,
  }));
}

function drawFrame() {
  ctx.clearRect(0, 0, W, H);

  // update
  nodes.forEach(n => {
    n.x += n.vx;  n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
  });

  // edges
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < MAX_DIST) {
        const alpha = (1 - d / MAX_DIST) * 0.35;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = GOLD_DIM + alpha + ')';
        ctx.lineWidth   = 0.7;
        ctx.stroke();
      }
    }
  }

  // nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = GOLD_DIM + '0.7)';
    ctx.fill();
  });

  animId = requestAnimationFrame(drawFrame);
}

window.addEventListener('resize', () => {
  cancelAnimationFrame(animId);
  resize();
  initNodes();
  drawFrame();
}, { passive: true });

resize();
initNodes();
drawFrame();

/* ── PUBLICATION FILTER ───────────────────────────────────── */
const pubBtns  = document.querySelectorAll('.pub-btn');
const pubItems = document.querySelectorAll('.pub-item');

pubBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    pubBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    pubItems.forEach(item => {
      const show = filter === 'all' || item.dataset.cat === filter;
      item.style.opacity    = show ? '1' : '0';
      item.style.maxHeight  = show ? '400px' : '0';
      item.style.overflow   = 'hidden';
      item.style.padding    = show ? '' : '0';
      item.style.border     = show ? '' : 'none';
      item.style.transition = 'opacity 0.3s ease, max-height 0.4s ease, padding 0.3s ease';
    });
  });
});

/* ── SCROLL-REVEAL ─────────────────────────────────────────── */
const revealTargets = [
  '#about .about-grid',
  '#about .about-stats .stat-card',
  '#research .research-card',
  '#publications .pub-item',
  '#education .tl-item',
  '#education .ach-item',
  '#skills .skill-group',
  '#contact .contact-card',
];

function addRevealClass() {
  revealTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.07) + 's';
    });
  });
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

addRevealClass();
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── ACTIVE NAV HIGHLIGHT ON SCROLL ──────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--gold)'
      : '';
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
