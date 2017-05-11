$('document').ready(function () {

    var $box = $('.box');
        $reset = $('#reset');

    $box.on('click', function () {
        $(this).addClass('white');
    });

    $box.on('click', function () {
        $(this).addClass('white');
    });
    
    $reset.on('click', function () {
        $box.addClass('white');
    });


    
});