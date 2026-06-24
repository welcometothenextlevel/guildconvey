/* Guild Conveyancing — main.js v2 */
'use strict';

/* ── Navbar ── */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav?.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Active link ── */
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

/* ── Tab switcher ── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    btn.closest('section, .tab-section')?.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

/* ── Quote calculator ── */
(function () {
  const fees = {
    buying:         { VIC: [990, 1290],  SA: [870, 1090],  QLD: [990, 1290]  },
    selling:        { VIC: [870, 1090],  SA: [790, 990],   QLD: [870, 1090]  },
    transferring:   { VIC: [650, 850],   SA: [590, 790],   QLD: [650, 850]   },
    contractreview: { VIC: [350, 450],   SA: [350, 450],   QLD: [350, 450]   }
  };
  let type = 'buying', state = 'VIC';

  const resultBox   = document.querySelector('.quote-result');
  const resultPrice = document.querySelector('.result-price');
  const slider      = document.getElementById('propSlider');
  const sliderDisp  = document.getElementById('sliderDisplay');

  const fmt = n => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(n);

  function render() {
    const range = fees[type]?.[state];
    if (!range || !resultBox) return;
    resultBox.classList.add('show');
    if (resultPrice) resultPrice.textContent = `${fmt(range[0])} – ${fmt(range[1])}`;
  }

  document.querySelectorAll('.pill[data-type]').forEach(p => {
    p.addEventListener('click', () => {
      document.querySelectorAll('.pill[data-type]').forEach(x => x.classList.remove('active'));
      p.classList.add('active'); type = p.dataset.type; render();
    });
  });
  document.querySelectorAll('.pill[data-state]').forEach(p => {
    p.addEventListener('click', () => {
      document.querySelectorAll('.pill[data-state]').forEach(x => x.classList.remove('active'));
      p.classList.add('active'); state = p.dataset.state; render();
    });
  });

  if (slider && sliderDisp) {
    const update = () => {
      const v = +slider.value;
      sliderDisp.textContent = v >= 5000000 ? 'Over $5,000,000' : fmt(v);
    };
    slider.addEventListener('input', update);
    update();
  }

  // Set defaults
  document.querySelector('.pill[data-type="buying"]')?.classList.add('active');
  document.querySelector('.pill[data-state="VIC"]')?.classList.add('active');
  render();
})();

/* ── Hero state rotator ── */
(function () {
  const el = document.getElementById('heroState');
  if (!el) return;
  const states = ['Victoria', 'South Australia', 'Queensland'];
  let i = 0;
  el.style.cssText = 'transition:opacity 300ms,transform 300ms;display:inline-block';
  setInterval(() => {
    el.style.opacity = '0'; el.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      i = (i + 1) % states.length;
      el.textContent = states[i];
      el.style.opacity = '1'; el.style.transform = 'translateY(0)';
    }, 320);
  }, 3200);
})();

/* ── Hero image parallax ── */
const heroBg = document.querySelector('.hero-bg-img');
if (heroBg) {
  heroBg.classList.add('loaded');
  window.addEventListener('scroll', () => {
    heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.12}px)`;
  }, { passive: true });
}

/* ── Scroll-reveal (AOS) ── */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.aos').forEach(el => io.observe(el));
}

/* ── Form submission ── */
document.querySelectorAll('form[data-form]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn.textContent;
    btn.textContent = 'Sending…'; btn.disabled = true;
    try {
      const res = await fetch('https://formspree.io/f/XXXXXX', {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
      });
      btn.textContent = res.ok ? '✓ Message Sent!' : '⚠ Error — try again';
      if (res.ok) form.reset();
      else btn.disabled = false;
    } catch { btn.textContent = '⚠ Error — try again'; btn.disabled = false; }
    if (btn.textContent.startsWith('✓')) setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 4000);
  });
});
