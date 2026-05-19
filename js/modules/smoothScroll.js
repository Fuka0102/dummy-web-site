export function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      // 固定ヘッダーの高さ + top offset 分を引いてスクロール位置を調整
      const header = document.querySelector('.js-header');
      const headerOffset = header ? header.offsetHeight + 16 : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });

      // スマホメニューが開いていたら閉じる
      const menu = document.querySelector('.js-header-menu');
      if (menu && menu.style.display !== 'none') menu.style.display = 'none';
      document.querySelector('.js-header-menu-trigger')?.classList.remove('is-active');
    });
  });
}
