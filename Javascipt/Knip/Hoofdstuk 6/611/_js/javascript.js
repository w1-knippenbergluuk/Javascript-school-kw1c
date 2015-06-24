$(document).ready(function(){
    $("body").dblclick(function(){
        alert( "U heeft gedubbelklikt!" );
    });

    $("a").hover(function(){
        alert( "Link!" );
    });
});