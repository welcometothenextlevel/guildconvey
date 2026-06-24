/* ============================================================
   GUILD CONVEYANCING — SHARED JS
   ============================================================ */

/* ── Navbar scroll ── */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar?.classList.add('scrolled');
  else navbar?.classList.remove('scrolled');
}, { passive: true });

/* ── Mobile menu ── */
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
  document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Active nav link ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Tab switcher (locations page) ── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

/* ── Quote calculator ── */
(function() {
  const fees = {
    buying:         { VIC: [990, 1290],  SA: [870, 1090],  QLD: [990, 1290] },
    selling:        { VIC: [870, 1090],  SA: [790, 990],   QLD: [870, 1090] },
    transferring:   { VIC: [650, 850],   SA: [590, 790],   QLD: [650, 850]  },
    contractreview: { VIC: [350, 450],   SA: [350, 450],   QLD: [350, 450]  }
  };

  let selectedType = 'buying';
  let selectedState = 'VIC';

  const slider = document.getElementById('propValue');
  const sliderDisplay = document.getElementById('propValueDisplay');
  const resultBox = document.querySelector('.quote-result');
  const resultPrice = document.querySelector('.quote-result-price');

  function formatCurrency(n) {
    return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(n);
  }

  function updateResult() {
    if (!resultBox) return;
    const range = fees[selectedType]?.[selectedState];
    if (!range) return;
    resultBox.classList.add('visible');
    if (resultPrice) resultPrice.textContent = `${formatCurrency(range[0])} – ${formatCurrency(range[1])}`;
  }

  // Type pills
  document.querySelectorAll('.quote-pill[data-type]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.quote-pill[data-type]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedType = pill.dataset.type;
      updateResult();
    });
  });

  // State pills
  document.querySelectorAll('.quote-pill[data-state]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.quote-pill[data-state]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedState = pill.dataset.state;
      updateResult();
    });
  });

  // Slider
  if (slider && sliderDisplay) {
    function updateSlider() {
      const val = parseInt(slider.value);
      sliderDisplay.textContent = val >= 5000000 ? 'Over $5,000,000' : formatCurrency(val);
    }
    slider.addEventListener('input', updateSlider);
    updateSlider();
  }

  // Set defaults active
  const defaultType = document.querySelector('.quote-pill[data-type="buying"]');
  const defaultState = document.querySelector('.quote-pill[data-state="VIC"]');
  defaultType?.classList.add('active');
  defaultState?.classList.add('active');
  updateResult();
})();

/* ── Contact form ── */
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type=submit]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  try {
    const res = await fetch('https://formspree.io/f/XXXXXX', {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      btn.textContent = '✓ Message Sent!';
      contactForm.reset();
    } else throw new Error();
  } catch {
    btn.textContent = 'Error — Please try again';
    btn.disabled = false;
  }
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.service-card, .why-card, .review-card, .process-step, .state-card, .blog-card');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 400ms ease ${i * 60}ms, transform 400ms ease ${i * 60}ms`;
    obs.observe(el);
  });
}

/* ── Hero headline rotator ── */
(function() {
  const el = document.getElementById('heroState');
  if (!el) return;
  const states = ['Victoria', 'South Australia', 'Queensland'];
  let i = 0;
  setInterval(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-8px)';
    setTimeout(() => {
      i = (i + 1) % states.length;
      el.textContent = states[i];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300);
  }, 3000);
  el.style.transition = 'opacity 300ms, transform 300ms';
})();
