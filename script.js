const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('sean-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('sean-theme', theme);
  themeToggle.setAttribute('aria-pressed', theme === 'light');
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
}

setTheme(initialTheme);
themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

document.documentElement.classList.add('motion-ready');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal');

if (reducedMotion || !window.motionTools) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const { inView, animate, stagger } = window.motionTools;
  inView('.reveal', (element) => {
    element.classList.add('is-visible');
    animate(element, { opacity: [0, 1], y: [18, 0] }, { duration: 0.65, delay: stagger(0.04), ease: [0.22, 1, 0.36, 1] });
  }, { amount: 0.15 });
  animate('.orbit-outer', { rotate: [0, 360] }, { duration: 35, repeat: Infinity, easing: 'linear' });
  animate('.orbit-inner', { rotate: [0, -360] }, { duration: 25, repeat: Infinity, easing: 'linear' });
}
