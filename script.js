const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});
