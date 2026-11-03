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

const copyButton = document.querySelector('[data-copy-phone]');
const feedback = document.querySelector('#contact-feedback');
const manualPhone = document.querySelector('#phone-manual');
copyButton.hidden = false;

copyButton.addEventListener('click', async () => {
  copyButton.disabled = true;
  feedback.textContent = '';

  try {
    await navigator.clipboard.writeText(copyButton.dataset.copyPhone);
    manualPhone.closest('label').hidden = true;
    feedback.textContent = '전화번호를 복사했습니다.';
  } catch {
    manualPhone.closest('label').hidden = false;
    manualPhone.focus();
    manualPhone.select();
    feedback.textContent = '자동 복사가 지원되지 않습니다. 선택된 번호를 직접 복사해 주세요.';
  } finally {
    copyButton.disabled = false;
  }
});
