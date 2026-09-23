const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobileMenu');

menuToggle?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.textContent = '☰';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
  observer.observe(el);
});

const bookingForm = document.querySelector('#bookingForm');
const formNote = document.querySelector('#formNote');
bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Request captured for this demo. Connect the form to WhatsApp, email, or a booking system for live enquiries.';
  formNote.style.color = '#6e4825';
  bookingForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
