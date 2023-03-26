(function ($) {
  $(document).ready(function () {
    
    // filters in result search
    if($("[data-control-filters]").length) {
      $("[data-control-filters]").on('click', function (e) {
        $(this).attr('aria-expanded', !$(this).hasClass('is-actived'));
        $("[data-scope-filters]").stop().slideToggle(300);
        $(this).toggleClass('is-actived');
      });
    }

  });
})(jQuery);
