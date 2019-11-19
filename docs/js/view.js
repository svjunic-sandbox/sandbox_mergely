'use strict';

(function(window, document, $) {
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

  function handleMessage({ data }) {
    if (!data.query) return;

    console.log(data.query);

    $.get(`./resources/${data.query}/dev.html`).then(function(str) {
      $mergely.mergely('lhs', str);
    });

    $.get(`./resources/${data.query}/production.html`).then(function(str) {
      $mergely.mergely('rhs', str);
    });

    // 静的のときの残骸
    //$('#mergely').mergely({
    //  lhs: function(setValue) {
    //    console.log(`./resources/${data.query}/dev.html`);
    //    $.get(`./resources/${data.query}/dev.html`).then(function(str) {
    //      setValue(str);
    //    });
    //  },
    //  rhs: function(setValue) {
    //    $.get(`./resources/${data.query}/production.html`).then(function(str) {
    //      setValue(str);
    //    });
    //  }
    //});
    //$('#mergely').mergely('update');
  }

  window.addEventListener('message', handleMessage, false);
})(window, document, jQuery);
