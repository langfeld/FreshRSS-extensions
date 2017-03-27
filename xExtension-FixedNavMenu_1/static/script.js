jQuery(function($){

    var width = $(window).width();
    if (width <= 768) {

        // View-State
        smartify_menu( 'nav_menu_actions' );

        // View-Type
        smartify_menu( 'nav_menu_views' );

        // Shorten read-all button text
        $('.read_all').html('✔');

        //  🔍 Dropdown search bar
        // $('.nav_menu').animate({ height:100 });
        var searchtemp = $(".item.search").html();
        $(".item.search").remove();
        $(".nav_menu").append( '<a id="searchbutton" class="btn" title="Suche"><img class="icon" src="../themes/icons/search.svg" alt="🔍"></a>' );
        $(".nav_menu").append( '<div class="item search">' + searchtemp + '</div>' );
        $(".item.search").hide();
        $(".nav_menu #searchbutton").on('click', function() { $(".item.search").slideToggle(); });
    }

});


/* Helper function */
function smartify_menu( menu_id ) {

    /* Init dropdown */
    $('#'+menu_id).prepend('<div class="dropdown extension_smartmenu" id="'+menu_id+'_dropdown"><div id="'+menu_id+'_dropdowninside" class="dropdown-target"></div><ul class="dropdown-menu"><li class="dropdown-close"><a href="#close">❌</a></li></ul></div>');

    // for each button
    var activecounter = 0;    // set active button as dropdown-button
    $('#'+menu_id + '>a').each(function(){


        // set active button as dropdown-button
        if( $(this).hasClass('active') ) {

            // set counter for dot-hint
            activecounter++;

            // show only the first active button as dropdown button
            if(activecounter === 1) {

                // set button-icon as dropdown icon
                $('#'+menu_id+'_dropdowninside').after('<a class="btn dropdown-toggle" href="#'+menu_id+'_dropdowninside">' + $(this).html() + '</a>');
            }

            // add button to dropdown menu (with active class)
            $('#'+menu_id+'_dropdown>ul').append('<li class="item"><a href="' + $(this).attr('href') + '" class="btn active">' + $(this).html() + '</a></li>');

        }
        else {

            // add button to dropdown menu
            $('#'+menu_id+'_dropdown>ul').append('<li class="item"><a href="' + $(this).attr('href') + '" class="btn">' + $(this).html() + '</a></li>');

        }


        // remove button from regular view
        $(this).remove();

    });

    // Add selection counter
    if(activecounter > 1) {
        $('#'+menu_id+' .extension_smartmenu .dropdown-toggle').append('<span class="dot">'+activecounter+'</span>');
    }

}