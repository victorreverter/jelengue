// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Idioma (selector)
    const esBtn = document.getElementById('es-btn');
    const enBtn = document.getElementById('en-btn');
    let lang = 'es';
  
    function switchLang(newLang) {
      lang = newLang;
      document.documentElement.lang = lang;
      // Cambia textos
      document.querySelectorAll('[data-es], [data-en]').forEach(el => {
        if (el.dataset[lang]) el.innerHTML = el.dataset[lang];
      });
      // Marca botón activo
      esBtn.classList.toggle('active', lang === 'es');
      enBtn.classList.toggle('active', lang === 'en');
    }
  
    esBtn.onclick = () => switchLang('es');
    enBtn.onclick = () => switchLang('en');
  
    // Animaciones de aparición con scroll
    const reveals = document.querySelectorAll('.reveal, .gallery-thumb');
    function revealOnScroll() {
      const trigger = window.innerHeight * 0.88;
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger) {
          el.classList.add('reveal-visible');
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // inicial
  
    // Scroll suave para nav
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  