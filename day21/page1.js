$(document).ready(function(){
    var swiper = new Swiper('.contents.swiper-container');
    var titleSwiper = new Swiper('.title.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true
    });
    swiper.controller.control = titleSwiper;
    titleSwiper.controller.control = swiper;
    $('.carousel').carousel('pause');
    new daum.roughmap.Lander({
		"timestamp" : "1546584200212",
		"key" : "rn7j",
		"mapWidth" : "800",
		"mapHeight" : "300"
	}).render();
});