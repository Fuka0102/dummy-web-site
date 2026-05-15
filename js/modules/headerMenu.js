export function headerMenu() {
    const targetMenu = document.querySelector('.js-header-menu');
    const trigger = document.querySelector('.js-header-menu-trigger');

    trigger.addEventListener("click", function (e) {
        targetMenu.classList.toggle('is-active');
        e.currentTarget.classList.toggle('is-active');
    });
}