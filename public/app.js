const mobileMenu = document.querySelector('.mobile-nav');

mobileMenu.addEventListener('click', (event) => {
  if (event.target.closest('a')) mobileMenu.open = false;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});

document.addEventListener('pointerdown', (event) => {
  if (mobileMenu.open && !mobileMenu.contains(event.target)) {
    mobileMenu.open = false;
  }
});

const desktop = window.matchMedia('(min-width: 761px)');
desktop.addEventListener('change', () => {
  if (desktop.matches) mobileMenu.open = false;
});
