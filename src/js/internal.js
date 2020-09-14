(function() {

  function documentReady() {

    @@include('partials/reviews-slider.js');
    @@include('partials/header-menu.js');
    @@include('partials/header-burger.js');
    @@include('partials/dropdown.js');
    @@include('partials/highlight.js');
    @@include('partials/select.js');
    @@include('partials/accordion.js');
    @@include('partials/validate.js');
  };

  document.addEventListener("DOMContentLoaded", documentReady);

})();