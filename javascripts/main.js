//nav fade

$(document).ready(function(){
    var $nav = $('#nav-bar');
    $nav.hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });

});
