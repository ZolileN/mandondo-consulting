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

/* ---- TESTIMONIALS CAROUSEL ---- */
let currentTestimonial = 0;
const testimonialsGrid = document.getElementById('testimonialsGrid');
const indicatorsContainer = document.getElementById('testimonialIndicators');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;

// Get cards per slide based on screen size
function getCardsPerSlide() {
  return window.innerWidth >= 768 ? 2 : 1;
}

function getTotalSlides() {
  return Math.ceil(totalTestimonials / getCardsPerSlide());
}

// Create indicators
function createIndicators() {
  const totalSlides = getTotalSlides();
  indicatorsContainer.innerHTML = ''; // Clear existing indicators
  
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.className = 'testimonial-indicator';
    if (i === 0) indicator.classList.add('active');
    indicator.onclick = () => goToTestimonial(i);
    indicatorsContainer.appendChild(indicator);
  }
}

// Update carousel position
function updateCarousel() {
  const cardsPerSlide = getCardsPerSlide();
  const containerWidth = testimonialsGrid.parentElement.offsetWidth;
  const gap = 32; // Gap between cards
  const slideWidth = (containerWidth + gap) * cardsPerSlide / cardsPerSlide;
  const offset = -currentTestimonial * slideWidth;
  testimonialsGrid.style.transform = `translateX(${offset}px)`;
  
  // Update indicators
  document.querySelectorAll('.testimonial-indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentTestimonial);
  });
}

// Go to specific testimonial
function goToTestimonial(index) {
  currentTestimonial = index;
  updateCarousel();
}

// Auto-play carousel
let autoPlayInterval;
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    const totalSlides = getTotalSlides();
    currentTestimonial = (currentTestimonial + 1) % totalSlides;
    updateCarousel();
  }, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Handle window resize
function handleResize() {
  createIndicators(); // Recreate indicators for new slide count
  currentTestimonial = 0; // Reset to first slide
  updateCarousel();
}

// Initialize carousel
function initTestimonialCarousel() {
  if (testimonialsGrid && indicatorsContainer) {
    createIndicators();
    updateCarousel();
    startAutoPlay();
    
    // Pause on hover
    testimonialsGrid.addEventListener('mouseenter', stopAutoPlay);
    testimonialsGrid.addEventListener('mouseleave', startAutoPlay);
    
    // Handle resize
    window.addEventListener('resize', handleResize);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTestimonialCarousel);

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
