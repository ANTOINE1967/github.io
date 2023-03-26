(function ($) {
  $(document).ready(function () {
    
    // dsfr accordeon opening by default
    $(".vp-collapse-open").each(function(){
      dsfr(this).collapse.disclose();
    });

  });
})(jQuery);
