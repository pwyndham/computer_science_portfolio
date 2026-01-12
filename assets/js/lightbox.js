$(document).ready(function() {
    var $overlay = $('<div id="custom-lightbox-overlay"></div>');
    var $img = $('<img id="custom-lightbox-img">');
    var $close = $('<span id="custom-lightbox-close">&times;</span>');

    $overlay.append($img, $close);
    $('body').append($overlay);

    $('.portfolio-lightbox').on('click', function(e) {
        e.preventDefault();
        $img.attr('src', $(this).attr('href'));
        $overlay.css({ visibility: 'visible', opacity: 1 });
    });

    function closeLightbox() {
        $overlay.css({ opacity: 0 });
        setTimeout(() => {
            $overlay.css('visibility', 'hidden');
        }, 200);
    }

    $close.on('click', closeLightbox);

    $overlay.on('click', function(e) {
        if (e.target === this) closeLightbox();
    });

    $(document).on('keyup', function(e) {
        if (e.key === 'Escape') closeLightbox();
    });
});
