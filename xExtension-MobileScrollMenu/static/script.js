$(function () {

    var width = $(window).width();
    if (width <= 768) {

        var scroll_tolerance = 20;

        // Navbar Layout
        $('.nav_menu').css('position', 'fixed').css('zIndex', '10');

        // Content Top Spacer
        $('#stream').css('paddingTop', $('.nav_menu').outerHeight() + 'px');

        // StartPos
        var position = $(window).scrollTop();

        $(window).scroll(function () {

            var scroll = $(window).scrollTop();
            var diff = Math.abs(position - $(window).scrollTop());

            if (scroll > position) {
                $('.nav_menu').slideUp();
            } else {
                if (diff > scroll_tolerance) {
                    $('.nav_menu').slideDown();
                }
            }

            position = scroll;

        });

    }

});