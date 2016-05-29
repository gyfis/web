/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    $('span#name').click(function() {
        $.getJSON('gradients.json', function(gradients) {
            var curr_c = $('header').attr('background-color');

            var x = Math.floor(Math.random() * gradients.length);
            while (gradients[x]['colors'][0] == curr_c) {
                x = Math.floor(Math.random() * gradients.length);
            }
            
            var c1 = gradients[x]['colors'][0];
            var c2 = gradients[x]['colors'][1];
            var angle = Math.floor(Math.random() * 360);
            
            var b_c = $.Color(c1).blend(c2);
            b_c = b_c.saturation(b_c.saturation() * 0.8).toHexString();
            
            var bg_img = 'linear-gradient(' + angle + 'deg, ' + c1 + ', ' + c2 + ')';
            
            $('.background-header').css({'background-color': c1, 'background-image': bg_img});
            $('.background-header').stop().animate({opacity: 1.0}, {duration: 350, queue: false, complete: function() {
                $('header').css({'background-color': c1, 'background-image': bg_img});
                $('.background-header').css({opacity: 0.0});
            }});
            
            $('.btn-primary').stop().css({'background-color': b_c});
            
            $('.bg-primary-background').css({'background-color': c1, 'background-image': bg_img});
            $('.bg-primary-background').stop().animate({opacity: 1.0}, {duration: 350, queue: false, complete: function() {
                $('.bg-primary').css({'background-color': c1, 'background-image': bg_img});
                $('.bg-primary-background').css({opacity: 0.0});
            }})
        });
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
