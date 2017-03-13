$(function () {

    $.detectSwipe.preventDefault = false;
    $.detectSwipe.threshold = 60;

    $('body').on('swipeleft', function () {
        //console.log('left');
        //next_entry();
        $('.next_entry')[0].click();
    });

    $('body').on('swiperight', function () {
        //console.log('right');
        //prev_entry();
        $('.previous_entry')[0].click();
    });

    $('#nav_entries').slideToggle();
    $('body').on('doubletap', '.nav_menu', function () {
        //console.log('doubletap NavBar');        
        $('#nav_entries').slideToggle();
    });

    $('body').on('doubletap', '.content', function () {
        //console.log('doubletap Content');        
        $('.btn.toggle_aside')[0].click();
    });

});