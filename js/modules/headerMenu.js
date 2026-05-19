import $ from '../../node_modules/jquery/dist-module/jquery.module.js';

export function headerMenu() {
  const $menu = $('.js-header-menu');
  const $trigger = $('.js-header-menu-trigger');

  $trigger.on('click', function () {
    $menu.fadeToggle(250);
    $(this).toggleClass('is-active');
  });
}
