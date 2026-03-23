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
  const PHONE = '27711193178'; // Real WhatsApp number
  const MSG = encodeURIComponent("Hi Mandondo Consulting, I'd like to enquire about your services.");
  window.open(`https://wa.me/${PHONE}?text=${MSG}`, '_blank');
}

/* ---- ENQUIRY FORM (Web3Form submission) ---- */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    formMessage.style.display = 'none';
    
    try {
      const formData = new FormData(contactForm);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        formMessage.textContent = 'Thank you! Your enquiry has been sent successfully. We\'ll contact you soon.';
        formMessage.style.color = '#28a745';
        formMessage.style.display = 'block';
        contactForm.reset();
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      formMessage.textContent = 'Sorry, there was an error sending your enquiry. Please try again or contact us directly.';
      formMessage.style.color = '#dc3545';
      formMessage.style.display = 'block';
      console.error('Form submission error:', error);
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

/* ---- SCROLL TO TOP BUTTON ---- */
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}, { passive: true });

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
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
