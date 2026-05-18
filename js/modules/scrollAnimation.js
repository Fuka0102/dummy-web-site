export function scrollAnimation() {
  const elements = document.querySelectorAll('.js-fade-in');
  if (!elements.length) return;

  // .js-stagger の直下にある .js-fade-in に時差 delay を付与
  document.querySelectorAll('.js-stagger').forEach(group => {
    group.querySelectorAll(':scope > .js-fade-in').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`;
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}
