
(function ($) {
  $(document).ready(function () {
    
    // Chapter "tout déplier/tout replier"
    $("[data-control-seeall]").on("click", function(e){
      e.stopPropagation();
      var scope = $(this).attr('data-control-seeall');
      if($(this).hasClass('see-all')) {
        $("[data-toggle-scope-seeall="+scope+"] .vp-btn-collapse[aria-expanded=false]").trigger("click");
        $(this).removeClass('see-all').addClass('hide-all');
        $(this).html($(this).attr('data-label-fold'))
      } else {
        $("[data-toggle-scope-seeall="+scope+"] .vp-btn-collapse[aria-expanded=true]").trigger("click");
        $(this).removeClass('hide-all').addClass('see-all');
        $(this).html($(this).attr('data-label-unfold'))
      }
    });

    // Text Version  "Voir/Masquer le texte du média"
    $("[data-control-versiontxt]").on("click", function(e){
      if($(this).attr('aria-expanded')=='false') {
        $(this).removeClass('not-active');
        $(this).find(".vp-text-version-label").html($(this).attr('data-label-unfold'))
      } else {
        $(this).addClass('not-active');
        $(this).find(".vp-text-version-label").html($(this).attr('data-label-fold'))
      }
    });

    // RGAA collapse
    $(".collapse").on("shown.bs.collapse", function (event) {
      $(this).attr("aria-hidden", false);
    })
    $(".collapse").on("hidden.bs.collapse", function (event) {
      $(this).attr("aria-hidden", true);
    })

  });
})(jQuery);
