// Smooth scroll ke produk saat klik tombol CTA
document.querySelector('.cta-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector('#products');
  target.scrollIntoView({ behavior: 'smooth' });
});

// Efek muncul saat scroll
const productCards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // supaya hanya animasi 1x
    }
  });
}, {
  threshold: 0.2
});

productCards.forEach(card => {
  observer.observe(card);
});

// Toggle menu nav
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
