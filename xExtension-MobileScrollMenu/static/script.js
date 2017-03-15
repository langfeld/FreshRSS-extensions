$(document).ready(function() {

    var width = $(window).width();
    if (width <= 768) {

        var scroll_tolerance = 20;

        // Navbar Layout
        $('.nav_menu').css('position', 'fixed').css('zIndex', '10');

        // Content Top Spacer
        $('#stream').css('paddingTop', $('.nav_menu').outerHeight() + 'px');

        // StartPos
        var position = $(window).scrollTop();

        // Prevent scrolljumps while switching articles
        var scrollcounter = 0;
        var scrolltimer;

        $(window).scroll(function() {

            var scroll = $(window).scrollTop();
            var diff = Math.abs(position - $(window).scrollTop());

            // Prevent scrolljumps while switching articles
            if (scrolltimer) {
                scrollcounter++;
                clearTimeout(scrolltimer);
            }
            scrolltimer = setTimeout(function() {
                scrollcounter=0;
            }, 1000);

            // Scrolling down
            if (scroll > position) {
                $('.nav_menu').slideUp();
            } 
            else {
                
                // Scrolled up and no jump
                if (diff > scroll_tolerance && scrollcounter > 5) {
                    $('.nav_menu').slideDown();
                }
                
                // Reached top
                else if (scroll < 20) {
                    $('.nav_menu').slideDown();
                }
                
            }

            position = scroll;

        });

    }

});