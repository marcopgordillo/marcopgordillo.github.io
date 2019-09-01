$(document).ready(function () {

    $(document).on("scroll", onScroll);

    $('.navbar-nav a[href^="#"]').click(smoothScroll);
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a[href^="#"]').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}

function smoothScroll(event) {
    $('.navbar-nav a').parent().removeClass('active');
    $(this).parent().addClass('active');
}
