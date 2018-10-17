$(() => {
    $('nav ul li a').click(scrollToSection);
    $('#download-button').click(scrollToSection);
})

function scrollToSection(e) {
    e.preventDefault();
    let hash = $(this).attr('href');
    let pos = $(hash).offset().top - 30;
    $('html, body').animate({
        scrollTop: pos
    }, 500, function () {
        location.hash = hash;
    });
}

function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
}