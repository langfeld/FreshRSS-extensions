$(document).ready(function(){

    function sticky_menu() {

        var window_top = $(window).scrollTop();
        var div_top = $('#sticker_anchor').offset().top;

        if (window_top > div_top) {

            $('.nav_menu').addClass('sticker');
            $('.nav_menu').css('width', $('#sticker_anchor').width());
            $('#sticker_anchor').height($('.nav_menu').outerHeight());

        } else {

            $('.nav_menu').removeClass('sticker');
            $('#sticker_anchor').height(0);

        }
    }

    var width = $(window).width();
    if (width > 768) {

        $('.nav_menu').before('<div id="sticker_anchor"></div>');

        $(window).scroll(sticky_menu);
        sticky_menu();

    }

});