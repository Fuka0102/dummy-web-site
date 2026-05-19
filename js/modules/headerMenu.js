export function headerMenu() {
  const menu = document.querySelector('.js-header-menu');
  const trigger = document.querySelector('.js-header-menu-trigger');

  trigger.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    this.classList.toggle('is-active');
  });
}
