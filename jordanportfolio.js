/* ========= SCROLL TO TOP ========= */

$('a[href^="#scrollHere"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

/* ========= NAVBAR FADE ========== */

$(function() {
	$(document).scroll(function(){
		var $nav = $("#navbar");
		$nav.toggleClass("navscroll", $(this).scrollTop() > $nav.height());
	});
});