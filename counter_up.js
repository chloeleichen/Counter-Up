/**
 * @file
 * We are mapping values from variables back to ScrollIt array.
 */

Drupal.behaviors.counterUp = {
    attach: function (context, settings) {
        (function ($) {
            var settings = Drupal.settings.counter_up;

            $.each(settings, function(timeVal, delayVal){
               

            });


        })(jQuery);

    }
};

jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });