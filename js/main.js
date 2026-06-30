document.getElementById('year').textContent = new Date().getFullYear();

/* Navbar scroll state */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('is-scrolled', window.scrollY > 12);
});

/* Mobile nav */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('is-open'));
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

/* Theme toggle */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setThemeIcon(theme) {
  themeToggle.classList.toggle('is-dark', theme === 'dark');
}

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
setThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  setThemeIcon(next);
});

/* Scroll reveal */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

function observeReveal(el) {
  revealObserver.observe(el);
}

function markReveal(el, delayStep = 0) {
  el.classList.add('reveal');
  if (delayStep) el.style.transitionDelay = `${delayStep}ms`;
  observeReveal(el);
}

function markRevealGroup(selector) {
  document.querySelectorAll(selector).forEach((group) => {
    [...group.children].forEach((child, i) => markReveal(child, i * 90));
  });
}

document.querySelectorAll('[data-reveal]').forEach((el) => markReveal(el));
markRevealGroup('[data-reveal-group]');

/* Project data by category */
const PROJECTS = {
  'real-estate': ['qcrlmEiem_Q', 'XcJHeI5fT-w', '6CSlnPyAR_k', 'DA6ykY2ZwKM', 'nMIaYNXTHAQ'],
  'real-estate-ia': ['P3ly4nCrIb0', 'GktHY3X9t4s'],
  'anuncios-ae': ['Voot69oQ3Gk', 'JZ9do7ynk88'],
  'finanzas': ['VSThtMQ-joI', 'Pb3twLKU0kY', 'VEAUJOjpg_Y'],
  'comercios': ['NLx4d2J53EA', '2k0sj2r4Xm4', 'Ujyc4VGUrFI', 'RX6vamUPTgY'],
  'anuncios-ia': ['DHo7diTtus0', 'ThS6k2KuRRg', '3ikAmnQg03o', 'W34gB2cms-g'],
};

const carouselTrack = document.getElementById('carouselTrack');
const tabs = document.querySelectorAll('.tab');

function renderCategory(category) {
  carouselTrack.innerHTML = '';
  PROJECTS[category].forEach((id, index) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-video', id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Reproducir video, proyecto ${category} ${index + 1}`);
    card.innerHTML = `
      <img loading="lazy" src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Proyecto ${category} ${index + 1}">
      <span class="video-card__play"><svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
    `;
    card.addEventListener('click', () => openVideo(id, card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVideo(id, card);
      }
    });
    carouselTrack.appendChild(card);
    markReveal(card, index * 70);
  });
  carouselTrack.scrollTo({ left: 0 });
  const carouselEl = carouselTrack.closest('[data-carousel]');
  if (carouselEl && carouselEl._updateArrows) carouselEl._updateArrows();
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    renderCategory(tab.getAttribute('data-category'));
  });
});

renderCategory('real-estate');

/* Carousel arrows */
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.carousel__track');
  const prev = carousel.querySelector('.carousel__arrow--prev');
  const next = carousel.querySelector('.carousel__arrow--next');

  function maxScroll() {
    return Math.max(0, track.scrollWidth - track.clientWidth);
  }

  function scrollClamped(delta) {
    const target = Math.max(0, Math.min(maxScroll(), track.scrollLeft + delta));
    track.scrollTo({ left: target, behavior: 'smooth' });
  }

  function updateArrows() {
    const max = maxScroll();
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= max - 4;
  }

  prev.addEventListener('click', () => scrollClamped(-432));
  next.addEventListener('click', () => scrollClamped(432));
  track.addEventListener('scroll', updateArrows);
  new ResizeObserver(updateArrows).observe(track);
  updateArrows();

  carousel._updateArrows = updateArrows;
});

/* Video modal */
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const modalCloseBtn = videoModal.querySelector('.video-modal__close');
let lastFocusedEl = null;

function openVideo(id, triggerEl) {
  lastFocusedEl = triggerEl || document.activeElement;
  videoFrame.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  videoModal.classList.add('is-open');
  modalCloseBtn.focus();
}

function closeModal() {
  videoModal.classList.remove('is-open');
  videoFrame.src = '';
  if (lastFocusedEl) lastFocusedEl.focus();
}

videoModal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (!videoModal.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') {
    const focusable = videoModal.querySelectorAll('button, iframe, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

/* Stats counter */
const statNumbers = document.querySelectorAll('.stat__number');
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  statNumbers.forEach((el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 900;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * progress);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

const statsSection = document.querySelector('.stats');
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) animateStats(); });
  }, { threshold: 0.4 });
  observer.observe(statsSection);
}

/* FAQ accordion */
document.querySelectorAll('.accordion__item').forEach((item, index) => {
  const trigger = item.querySelector('.accordion__trigger');
  const panel = item.querySelector('.accordion__panel');
  const panelId = `faq-panel-${index}`;

  panel.id = panelId;
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', panelId);

  trigger.addEventListener('click', () => {
    const wasOpen = item.classList.contains('is-open');
    item.parentElement.querySelectorAll('.accordion__item').forEach((i) => {
      i.classList.remove('is-open');
      i.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

/* Contact form (Formspree) */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (contactForm.action.includes('REPLACE_WITH_YOUR_FORM_ID')) {
    formStatus.textContent = 'Falta conectar el formulario a Formspree (action de prueba).';
    formStatus.classList.add('is-error');
    return;
  }

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  formStatus.textContent = '';
  formStatus.classList.remove('is-error');

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      contactForm.reset();
      formStatus.textContent = 'Gracias por tu mensaje. Te voy a responder a la brevedad.';
    } else {
      formStatus.textContent = 'No se pudo enviar el mensaje. Intentá de nuevo o escribime por WhatsApp.';
      formStatus.classList.add('is-error');
    }
  } catch (err) {
    formStatus.textContent = 'No se pudo enviar el mensaje. Intentá de nuevo o escribime por WhatsApp.';
    formStatus.classList.add('is-error');
  } finally {
    submitBtn.disabled = false;
  }
});
