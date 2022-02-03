$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#btn btn-primary').fadeIn();
			} else {
				$('#btn btn-primary').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#btn btn-primary').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});