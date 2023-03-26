(function ($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.ATInternet = {
      attach: function (context, settings) {
        $(document).ready(function () {
          if (drupalSettings.AtInternetStatus) {
            $('body', context).once('ATInternet').each(function () {
              switch (drupalSettings.piano_analytics.route_name) {
                case 'view.frontpage.comprendre_avec_la_df':
                case 'view.homes.actualites':
                case 'view.homes.bibliotheque_multimedia':
                case 'view.homes.discours':
                case 'view.elasticsearch_view.discours_elasticsearch_view':
                case 'view.elasticsearch_publications_view.elasticsearch_publications_view':
                case 'view.discours_elasticviews.discours_elasticsearch_view':
                case 'view.homes.panorama_lois':
                case 'view.homes.rapports':
                case 'view.homes.ressources':
                case 'view.homes.publications':
                case 'view.homes.accueil_publications':
                case 'view.homes.en_bref':
                case 'view.homes.questions_reponses':
                case 'view.homes.discours_actualite':
                case 'view.homes.eclairage':
                case 'view.homes.parole_expert':
                case 'view.homes.dossier':
                case 'view.encyclopedie.home_encyclopedie':
                case 'system.404':
                case 'ldf_base.contact_form':
                case 'ldf_base.ldf_base_confirm_unsubscribe':
                case 'ldf_base.ldf_base_error_unsubscribe':
                case 'ldf_base.ldf_base_confirm':
                case 'ldf_base.ldf_base_error':
                case 'ldf_base.home_discours':
                  pa.sendEvent('page.display', {
                    page: drupalSettings.piano_analytics.name,
                    page_chapter1: (typeof drupalSettings.piano_analytics.chapter1 && drupalSettings.piano_analytics.chapter1) ? drupalSettings.piano_analytics.chapter1 : '',
                    page_chapter2: (typeof drupalSettings.piano_analytics.chapter2 && drupalSettings.piano_analytics.chapter2) ? drupalSettings.piano_analytics.chapter2 : '',
                    page_chapter3: (typeof drupalSettings.piano_analytics.chapter3 && drupalSettings.piano_analytics.chapter3) ? drupalSettings.piano_analytics.chapter3 : '',
                    langue : 'FR',
                    id_drupal : (drupalSettings.piano_analytics.node_id ? drupalSettings.piano_analytics.node_id : ''),
                    site_level2: drupalSettings.piano_analytics.level,
                  });
                  break;
                case 'view.elasticsearch_view.page_1':
                  pa.sendEvent('page.display', {
                    page: drupalSettings.piano_analytics.name,
                    page_chapter1: drupalSettings.piano_analytics.chapter1,
                    page_chapter2: (typeof drupalSettings.piano_analytics.chapter2 && drupalSettings.piano_analytics.chapter2) ? drupalSettings.piano_analytics.chapter2 : '',
                    page_chapter3: (typeof drupalSettings.piano_analytics.chapter3 && drupalSettings.piano_analytics.chapter3) ? drupalSettings.piano_analytics.chapter3 : '',
                    langue : 'FR',
                    id_drupal : (drupalSettings.piano_analytics.node_id ? drupalSettings.piano_analytics.node_id : ''),
                    site_level2: drupalSettings.piano_analytics.level,
                  });
                  break;
                case 'view.elasticsearch_view.consultations':
                  pa.sendEvent('page.display', {
                    page: drupalSettings.piano_analytics.name,
                    page_chapter1: drupalSettings.piano_analytics.chapter1,
                    page_chapter2: (typeof drupalSettings.piano_analytics.chapter2 && drupalSettings.piano_analytics.chapter2) ? drupalSettings.piano_analytics.chapter2 : '',
                    page_chapter3: (typeof drupalSettings.piano_analytics.chapter3 && drupalSettings.piano_analytics.chapter3) ? drupalSettings.piano_analytics.chapter3 : '',
                    langue : 'FR',
                    id_drupal : (drupalSettings.piano_analytics.node_id ? drupalSettings.piano_analytics.node_id : ''),
                    site_level2: drupalSettings.piano_analytics.level,
                  });
                  break;
                case 'entity.taxonomy_term.canonical':
                case 'entity.node.canonical':
                  pa.sendEvent('page.display', {
                    page: drupalSettings.piano_analytics.name.replaceAll('-', '_'),
                    page_chapter1: (typeof drupalSettings.piano_analytics.chapter1 && drupalSettings.piano_analytics.chapter1) ? drupalSettings.piano_analytics.chapter1.replaceAll('-', '_') : '',
                    page_chapter2: (typeof drupalSettings.piano_analytics.chapter2 && drupalSettings.piano_analytics.chapter2) ? drupalSettings.piano_analytics.chapter2.replaceAll('-', '_') : '',
                    page_chapter3: (typeof drupalSettings.piano_analytics.chapter3 && drupalSettings.piano_analytics.chapter3) ? drupalSettings.piano_analytics.chapter3.replaceAll('-', '_') : '',
                    langue : 'FR',
                    id_drupal : (drupalSettings.piano_analytics.node_id ? drupalSettings.piano_analytics.node_id : ''),
                    site_level2: drupalSettings.piano_analytics.level,
                  });
                  break;
              }

              // search form
              $('#header-search form').on('submit', function (){
                pa.setProperties({
                  page: drupalSettings.piano_analytics.name,
                  page_chapter1: (typeof drupalSettings.piano_analytics.chapter1 && drupalSettings.piano_analytics.chapter1) ? drupalSettings.piano_analytics.chapter1 : '',
                  page_chapter2: (typeof drupalSettings.piano_analytics.chapter2 && drupalSettings.piano_analytics.chapter2) ? drupalSettings.piano_analytics.chapter2 : '',
                  page_chapter3: (typeof drupalSettings.piano_analytics.chapter3 && drupalSettings.piano_analytics.chapter3) ? drupalSettings.piano_analytics.chapter3 : '',
                  langue : 'FR',
                  id_drupal : (drupalSettings.piano_analytics.node_id ? drupalSettings.piano_analytics.node_id : ''),
                  site_level2: drupalSettings.piano_analytics.level,
                },{
                  'persistent':true});

                pa.sendEvent('click.navigation', {
                  click: 'Rechercher',
                  click_chapter1 : drupalSettings.piano_analytics.click_menu_chapter1,
                });

                return true;
              });

              $(document.body).on('click', "a[data-xiti-name], button[data-xiti-name], button[data-xiti-menu-parent]", function () {
                pa.setProperties({
                  page: drupalSettings.piano_analytics.name,
                  page_chapter1: (typeof drupalSettings.piano_analytics.chapter1 && drupalSettings.piano_analytics.chapter1) ? drupalSettings.piano_analytics.chapter1 : '',
                  page_chapter2: (typeof drupalSettings.piano_analytics.chapter2 && drupalSettings.piano_analytics.chapter2) ? drupalSettings.piano_analytics.chapter2 : '',
                  page_chapter3: (typeof drupalSettings.piano_analytics.chapter3 && drupalSettings.piano_analytics.chapter3) ? drupalSettings.piano_analytics.chapter3 : '',
                  langue : 'FR',
                  id_drupal : (drupalSettings.piano_analytics.node_id ? drupalSettings.piano_analytics.node_id : ''),
                  site_level2: drupalSettings.piano_analytics.level,
                },{
                'persistent':true});

                // Cas null
                if ($(this).attr('data-xiti-name') === null || $(this).attr('data-xiti-name') === "") {
                  return true;
                }

                // Marianne Logo
                if($(this).hasClass('site-logo')){

                  const click_name = $(this).attr('data-xiti-name');

                  return pa.sendEvent('click.navigation', {
                    click: click_name,
                    click_chapter1 : drupalSettings.piano_analytics.click_menu_chapter1,
                    click_chapter2 : click_name
                  });
                }

                // Bouton voir les offres d'abonnement
                if($(this).attr('data-xiti-type') === 'navigation' && $(this).attr('href') === "#vp-abonnement" ) {
                  return pa.sendEvent('click.navigation', {
                    click: $(this).attr('data-xiti-name'),
                    click_chapter1 : drupalSettings.piano_analytics.click_offer_chapter1,
                    click_chapter2 : drupalSettings.piano_analytics.click_offer_chapter2,
                    click_chapter3 : drupalSettings.piano_analytics.click_offer_chapter3,
                  });
                }

                // Menu de navigation
                if($(this).parents('#header-navigation').length && $(this).attr('data-xiti-type') === 'navigation') {

                  const click_name = normalizeXitiClickName($(this).attr('data-xiti-name'));
                  let click_chapter3 = $(this).attr('data-xiti-menu-parent');

                  if(typeof click_chapter3 === "undefined" || click_chapter3 === false){
                    click_chapter3 = click_name;
                  }
                  click_chapter3 = normalizeXitiClickChapter3(click_chapter3);

                  return pa.sendEvent('click.navigation', {
                    click: click_name,
                    click_chapter1 : drupalSettings.piano_analytics.click_menu_chapter1,
                    click_chapter2 : drupalSettings.piano_analytics.click_menu_chapter2,
                    click_chapter3 : click_chapter3,
                  });
                }

                // Implements click on revue pages
                if ($(this).attr('data-xiti-type') === 'action' ) {
                  if($(this).attr('data-xiti-format') === 'papier'){
                    return pa.sendEvent('click.action', {
                      click: 'Format_papier',
                      click_chapter1 : drupalSettings.piano_analytics.click_chapter1,
                      click_chapter2 : drupalSettings.piano_analytics.click_chapter2,
                      click_chapter3 : drupalSettings.piano_analytics.click_chapter3,
                    });
                  }
                  else if ($(this).attr('data-xiti-format') === 'pdf'){
                    return pa.sendEvent('click.action', {
                      click: 'Format_pdf',
                      click_chapter1 : drupalSettings.piano_analytics.click_chapter1,
                      click_chapter2 : drupalSettings.piano_analytics.click_chapter2,
                      click_chapter3 : drupalSettings.piano_analytics.click_chapter3,
                    });
                  }
                  else if ($(this).attr('data-xiti-format') === 'epub'){
                    return pa.sendEvent('click.action', {
                      click: 'Format_epub',
                      click_chapter1 : drupalSettings.piano_analytics.click_chapter1,
                      click_chapter2 : drupalSettings.piano_analytics.click_chapter2,
                      click_chapter3 : drupalSettings.piano_analytics.click_chapter3,
                    });
                  }
                }
                // End Implements click revues pages
                if (($(this).attr('data-menu-name') !== null || $(this).attr('data-menu-name') !== "" ) && $(this).attr('data-menu-name') === 'footer'){
                  return pa.sendEvent('click.action', {
                    click: drupalSettings.piano_analytics.click_name.replaceAll('-', '_'),
                    click_chapter1 : drupalSettings.piano_analytics.click_chapter1,
                    click_chapter2 : drupalSettings.piano_analytics.click_chapter2,
                    click_chapter3 : drupalSettings.piano_analytics.click_chapter3,
                  });
                } else if(($(this).attr('data-xiti-type') === 'download')){
                  return pa.sendEvent('click.download', {
                    click: drupalSettings.piano_analytics.click_name.replaceAll('-', '_'),
                    click_chapter1 : drupalSettings.piano_analytics.click_chapter1,
                    click_chapter2 : drupalSettings.piano_analytics.click_chapter2,
                    click_chapter3 :$(this).attr('data-file-chapter'),
                  });
                } else if($(this).attr('data-xiti-type') === 'navigation') {
                  return pa.sendEvent('click.navigation', {
                    click: drupalSettings.piano_analytics.click_name.replaceAll('-', '_'),
                    click_chapter1 : drupalSettings.piano_analytics.click_chapter1,
                    click_chapter2 : drupalSettings.piano_analytics.click_chapter2,
                    click_chapter3 : $(this).attr('data-file-chapter'),
                  });
                } else if($(this).attr('data-xiti-type') === 'exit') {
                  return pa.sendEvent('click.exit', {
                    click: $(this).attr('data-xiti-name'),
                    click_chapter1 : drupalSettings.piano_analytics.click_offer_chapter1,
                    click_chapter2 : drupalSettings.piano_analytics.click_offer_chapter2,
                    click_chapter3 : drupalSettings.piano_analytics.click_offer_chapter3,
                  });
                } else {
                  return pa.sendEvent('click.action', {
                    click: drupalSettings.piano_analytics.click_name.replaceAll('-', '_'),
                    click_chapter1 : drupalSettings.piano_analytics.click_chapter1,
                    click_chapter2 : drupalSettings.piano_analytics.click_chapter2,
                    click_chapter3 : drupalSettings.piano_analytics.click_chapter3,
                  });
                }


              });
            });
        }
      });
      }
    };

    Drupal.behaviors.ABTastyCookies = {
      attach: function (context, settings) {
        $(document, context).once('ReadCookiesConf').ready(function () {
          var cookieContent = readCookie("VP_RGPD_OREJIME");
          var cookieContentObject = JSON.parse(cookieContent);
          // Cookie is null
          if(cookieContentObject == null) {
            pa.privacy.setMode('exempt');
          } else if (cookieContentObject.tracking_1 == true || cookieContentObject.tracking_3 == true || cookieContentObject.tracking_4 == true){
            pa.privacy.setMode('exempt');
          } else if(cookieContentObject.tracking_1 == false && cookieContentObject.tracking_3 == false && cookieContentObject.tracking_4 == false){
            // Set to optout if refused
            pa.privacy.setMode('optout');
          } else if(cookieContentObject.tracking_3 == false) {
            // Delete window.ABTasty;
            setCookie('ABTastySession',null, -1);
            setCookie('ABTasty',null, -1);
            pa.privacy.setMode('exempt');
          }
        });
      }
    };
  })(jQuery, Drupal, drupalSettings);

  /*
  * Read cookie content
  * cname : cookie name
  *
  * */
  function readCookie(cname) {
    var nameEQ = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') { c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  /*
  * Change cookie content and expiration time
  * cname : cookie name,
  * cvalue : cookie content,
  * exdays : days to cookie expiration
  *
  * */
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function normalizeXitiClickName(string){

    const replacements = {
      "Dossiers": "Dossier",
      "Les_Fiches": "Toutes_les_fiches"
    };

    const normalizedString = string
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replaceAll(' ', '_')
      .replaceAll('-', '_')
      .replaceAll('\'', '');

    if(normalizedString in replacements){

      return replacements[normalizedString];
    }

    return normalizedString;

  }


  function normalizeXitiClickChapter3(string){

    const replacements = {
      "Actualites": "Actualite",
      "Toutes_les_fiches": "Les Fiches"
    };

    const normalizedString = string
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replaceAll('\'', '');

    if(normalizedString in replacements){

      return replacements[normalizedString];
    }

    return normalizedString;
  }



