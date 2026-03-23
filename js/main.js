/* =============================================
   MANDONDO CONSULTING — Main JavaScript
   ============================================= */

/* ---- SCROLL FADE-IN ANIMATIONS ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ---- WHATSAPP BUTTON ---- */
function openWhatsApp() {
  const PHONE = '27000000000'; // TODO: Replace with real number (no + or spaces)
  const MSG = encodeURIComponent("Hi Mandondo Consulting, I'd like to enquire about your services.");
  window.open(`https://wa.me/${PHONE}?text=${MSG}`, '_blank');
}

/* ---- ENQUIRY FORM (basic validation & submission placeholder) ---- */
const sendBtn = document.querySelector('.btn-send');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.querySelector('input[data-field="name"]')?.value.trim();
    const phone   = document.querySelector('input[data-field="phone"]')?.value.trim();
    const service = document.querySelector('select[data-field="service"]')?.value;
    const message = document.querySelector('textarea[data-field="message"]')?.value.trim();

    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // TODO: Replace with a real form backend (e.g. Formspree, EmailJS, Netlify Forms)
    const waText = encodeURIComponent(
      `Hi Mandondo Consulting!\n\nName: ${name}\nPhone: ${phone}\nService: ${service || 'Not specified'}\nMessage: ${message || 'No message'}`
    );
    window.open(`https://wa.me/27000000000?text=${waText}`, '_blank');
  });
}

/* ---- ACTIVE NAV LINK HIGHLIGHT ON SCROLL ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--maroon)'
      : '';
  });
}, { passive: true });
