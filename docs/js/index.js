'use strict';

let view;

const $select = document.querySelector('#select');
$select.addEventListener('change', function(e) {
  postMesssage($select.options[$select.selectedIndex].value);
});

window.addEventListener('load', function() {
  view = document.querySelector('#view').contentWindow;
  $select.options[0].selected = true;
  postMesssage($select.options[0].value);
});

function postMesssage(value) {
  view.postMessage({
    query: value
  });
}
