export function faqAccordion() {
  const items = document.querySelectorAll('.js-faq-item');

  items.forEach(item => {
    const q = item.querySelector('.js-faq-item-q');
    if (!q) return;

    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // 他を全て閉じる
      items.forEach(i => i.classList.remove('is-open'));

      // クリックしたアイテムが閉じていたら開く
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });
}
