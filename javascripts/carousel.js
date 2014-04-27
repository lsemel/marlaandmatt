$(function () {
    var carousel = $('#mm-photo-carousel');
    carousel.carousel({
        interval: 4000
    });


// handles the carousel thumbnails
    $('.carousel-selector').css('cursor','pointer').click(function (e) {
        var id = $(this).attr('data-id');
        id = parseInt(id);
        console.log(id);
        $('#mm-photo-carousel').carousel(id);
        $('.carousel-selector').removeClass('selected');
        $(this).addClass('selected');
    });

// when the carousel slides, auto update
    carousel.on('slid.bs.carousel', function (e) {
        var active = $(e.target).find('.carousel-inner > .item.active');
        var from = active.index();

        $('.carousel-selector').removeClass('selected');
        $('.carousel-selector[data-id="'+from+'"]').addClass('selected');
    });
    carousel.css('cursor','pointer').on('click', function(e) {
        carousel.carousel('next');
    })
});
