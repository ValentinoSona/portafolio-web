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
    card.innerHTML = `
      <img loading="lazy" src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Proyecto ${category} ${index + 1}">
      <span class="video-card__play"><svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
    `;
    card.addEventListener('click', () => openVideo(id));
    carouselTrack.appendChild(card);
    markReveal(card, index * 70);
  });
  carouselTrack.scrollTo({ left: 0 });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    renderCategory(tab.getAttribute('data-category'));
  });
});

renderCategory('real-estate');

/* Carousel arrows */
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.carousel__track');
  const prev = carousel.querySelector('.carousel__arrow--prev');
  const next = carousel.querySelector('.carousel__arrow--next');

  prev.addEventListener('click', () => track.scrollBy({ left: -432, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: 432, behavior: 'smooth' }));
});

/* Video modal */
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');

function openVideo(id) {
  videoFrame.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  videoModal.classList.add('is-open');
}

function closeModal() {
  videoModal.classList.remove('is-open');
  videoFrame.src = '';
}

videoModal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

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
document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion__item');
    const wasOpen = item.classList.contains('is-open');
    item.parentElement.querySelectorAll('.accordion__item').forEach((i) => i.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
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
