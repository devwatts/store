$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoWidth: true
    });
});

function menColor() {
    var x = document.getElementById('men-button').classList;
    if (x.length == 0) {
        //document.getElementById('men-button').classList.remove('left');
        document.getElementById('men-button').classList.add('left');
        document.getElementById('women-button').classList.remove('right');
    } else {
        //document.getElementById('men-button').classList.remove('left');
    }
}

function womenColor() {
    var x = document.getElementById('women-button').classList;
    if (x.length == 0) {
        //              document.getElementById('women-button').classList.remove('right');
        document.getElementById('women-button').classList.add('right');
        document.getElementById('men-button').classList.remove('left');
    } else {
        //                document.getElementById('women-button').classList.add('right');
    }
}