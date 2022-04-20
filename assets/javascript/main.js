// 9. swiper slider
var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
    preloadImages: false,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false
    // },
    init: true,
    loop: false,
    speed: 1200,
    grabCursor: true,
    mousewheel: true,
    keyboard: true,
    simulateTouch: true,
    parallax: true,
    effect: "slide",
    pagination: {
        el: ".swiper-slide-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".slide-next",
        prevEl: ".slide-prev"
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    }
});
swiper.on("slideChangeTransitionStart", function() {
    $(".slider-progress-bar").removeClass("slider-active");
    $(".hero-bg").find("video").each(function() {
        this.pause();
    });
});
swiper.on("slideChangeTransitionEnd", function() {
    $(".slider-progress-bar").addClass("slider-active");
    $(".hero-bg").find("video").each(function() {
        this.play();
    });
});
swiper.on("slideChangeTransitionStart", function() {
    $(".slider-progress-bar").removeClass("slider-active");
});
swiper.on("slideChangeTransitionEnd", function() {
    $(".slider-progress-bar").addClass("slider-active");
});
var playButton = $(".swiper-slide-controls-play-pause-wrapper");
function autoEnd() {
    playButton.removeClass("slider-on-off");
    swiper.autoplay.stop();
}
function autoStart() {
    playButton.addClass("slider-on-off");
    swiper.autoplay.start();
}
playButton.on("click", function() {
    if (playButton.hasClass("slider-on-off")) autoEnd();
    else autoStart();
    return false;
});