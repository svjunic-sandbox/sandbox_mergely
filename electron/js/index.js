'use strict';

let $view;

const $device = document.querySelector('.menu-device');
const $page = document.querySelector('.menu-page');

$page.addEventListener('change', function(e) {
  //postMesssage($page.options[$page.selectedIndex].value);
  window.changeSource({
    query: $page.options[$page.selectedIndex].value
  });
});

window.addEventListener('load', function() {
  $view = document.querySelector('#view').contentWindow;
  $select.options[0].selected = true;
  //postMesssage($select.options[0].value);
  window.changeSource({
    query: $select.options[0].value
  });
});

let $mergely;

$(function() {
  $mergely = $('#mergely');
  $mergely.mergely('options', {
    line_numbers: true
  });
  setTimeout(function() {
    $('#mergely-splash').trigger('click');
  }, 1000);
});

window.changeSource = function(data) {
  if (!data.query) return;

  console.log(data.query);

  $.get(`./resources/${data.query}/dev.html`).then(function(str) {
    $mergely.mergely('lhs', str);
  });

  $.get(`./resources/${data.query}/production.html`).then(function(str) {
    $mergely.mergely('rhs', str);
  });
};
