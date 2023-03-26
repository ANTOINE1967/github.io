/* Source and licensing information for the line(s) below can be found at http://www.vie-publique.fr/themes/custom/vp_dsfr/js/orejime_footer.js. */
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.orejime_footer_config = {
    attach: function (context, settings) {
      $(document).ready(function () {
        var cookies_menu = "Gestion des cookies";
        $("footer li.fr-footer__bottom-item a.fr-footer__bottom-link", context).once('orejimeFooterMenuConfigBehavior').each(function () {
          $(this).filter(function () {
            if ($.trim($(this).text().toLowerCase()) === cookies_menu.toLowerCase()){
              $(this).attr("href", "#");
              $(this).attr("role", "button");
              $(this).addClass("orejime-Notice-learnMoreButton");
              $(this).on("click", function (e) {
                e.preventDefault();
                orejime.show();
              });
            }
          });
        });
        //Accept all cookies when user clicked on accept button.
        $(".orejime-Notice-saveButton", context).each(function () {
          $(this).on("click", function (e) {
            e.preventDefault();
            var apps = orejime.internals.manager.defaultConsents;
            $.each(apps, function (index) {
              var app = orejime.internals.manager.getApp(index);
              orejime.internals.manager.updateConsent(app, true);
            });
            orejime.internals.manager.saveAndApplyConsents();
          });
        });

        //Refuser all cookies when user clicked on refuse button.
        $(".orejime-Notice-declineButton, .orejime-Notice-actionItem--decline", context).each(function () {
          $(this).on("click", function (e) {
            e.preventDefault();
            var apps = orejime.internals.manager.defaultConsents;
            $.each(apps, function (index) {
              var app = orejime.internals.manager.getApp(index);
              if (app.name !== 'tracking_1' && !app.required){
                orejime.internals.manager.updateConsent(app, false);
              }
              if (app.name === "tracking_1" && app.default == 1){
                orejime.internals.manager.updateConsent(app, true);
              }
            });
            orejime.internals.manager.saveAndApplyConsents();
          });
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);

/* Source and licensing information for the above line(s) can be found at http://www.vie-publique.fr/themes/custom/vp_dsfr/js/orejime_footer.js. */;
