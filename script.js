// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form submit: just show success (no backend)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-success').classList.remove('hidden');
  this.reset();
  setTimeout(() => {
    document.getElementById('form-success').classList.add('hidden');
  }, 3500);
});

// Insert current year in footer
document.querySelector('footer').innerHTML =
  "© " + new Date().getFullYear() + " [Your Name]. All rights reserved.";
