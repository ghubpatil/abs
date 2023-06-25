$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$('.my_bttn').fadeIn(250);
		}
		else{
			$('.my_bttn').fadeOut(250);
		}
	});
	$('.my_bttn').click(function(){
		$('html,body').animate(
			{scrollTop:0},400
			);
	});
});



$(document).ready(function() {
	var progressPath = document.querySelector('.progress-wrap path');
	var pathLength = progressPath.getTotalLength();

	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

	var updateProgress = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}

	updateProgress();
	$(window).scroll(updateProgress);

	var offset = 50;
	var duration = 550;

	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.progress-wrap').addClass('active-progress');
		} else {
			jQuery('.progress-wrap').removeClass('active-progress');
		}
	});

	jQuery('.progress-wrap').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});




$(document).ready(function() {
	var progressPath = document.querySelector('.progress-wrapw path');
	var pathLength = progressPath.getTotalLength();

	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

	var updateProgress = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}

	updateProgress();
	$(window).scroll(updateProgress);

	var offset = 50;
	var duration = 550;

	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.progress-wrapw').addClass('active-progress');
		} else {
			jQuery('.progress-wrapw').removeClass('active-progress');
		}
	});

	jQuery('.progress-wrapw').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});