$(document).ready(function () {

    $(this).toggleClass('overheen');

    $('#lijst li.overheen').mouseenter(function () {
        $(this).toggleClass('overheen');
        //.fadeOut(10000);
    });

    $('#lijst li.overheen').mouseleave(function () {
        $(this).toggleClass('overheen');
    });

    $('#opdrachten li').click(function () {
        $(this).toggleClass('gedaan');
        //.fadeOut(10000);
    });

    $('.waardering').click(function () {
        var stemmen = parseInt($(this).text()) + 1;
        $(this).text(stemmen);
    });

    $('.waardering').dblclick(function () {
        var stemmen = parseInt($(this).text()) - 3;
        $(this).text(stemmen);
    });
})