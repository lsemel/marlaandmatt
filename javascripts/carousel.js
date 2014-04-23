$(function () {
    var carousel = $('#myCarousel');
    carousel.carousel({
        interval: 4000
    });


// handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        var id = id_selector.substr(id_selector.length - 1);
        id = parseInt(id);
        $('#myCarousel').carousel(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $(this).addClass('selected');
    });

// when the carousel slides, auto update
    carousel.on('slid.bs.carousel', function (e) {
        var active = $(e.target).find('.carousel-inner > .item.active');
        var from = active.index();

        $('[id^=carousel-selector-]').removeClass('selected');
        $('[id^=carousel-selector-' + from + ']').addClass('selected');
    });

});
