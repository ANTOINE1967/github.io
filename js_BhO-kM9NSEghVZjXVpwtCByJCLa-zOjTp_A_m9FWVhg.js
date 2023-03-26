/* Source and licensing information for the line(s) below can be found at http://www.vie-publique.fr/themes/custom/vp_dsfr/js/vp-tri.js. */
(function ($, Drupal) {
  Drupal.behaviors.tri = {
    attach: function(context, settings) {
      $("[name='sort_by']", context).once('tri').change(function() {
        this.form.submit();
      });
    },
  };
})(jQuery, Drupal)

/* Source and licensing information for the above line(s) can be found at http://www.vie-publique.fr/themes/custom/vp_dsfr/js/vp-tri.js. */;
