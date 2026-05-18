export function worksCarousel() {
  const list = document.querySelector('.js-works-list');
  const prev = document.querySelector('.js-works-prev');
  const next = document.querySelector('.js-works-next');

  if (!list || !prev || !next) return;

  const getScrollAmount = () => {
    const item = list.querySelector('.js-works-item');
    if (!item) return 0;
    const gap = parseFloat(getComputedStyle(list).gap) || 0;
    return item.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScroll = list.scrollWidth - list.clientWidth;
    prev.disabled = list.scrollLeft <= 1;
    next.disabled = list.scrollLeft >= maxScroll - 1;
  };

  prev.addEventListener('click', () => {
    list.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    list.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  list.addEventListener('scroll', updateButtons, { passive: true });

  new ResizeObserver(updateButtons).observe(list);

  updateButtons();
}
