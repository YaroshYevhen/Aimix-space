var APP = {};
APP.$document = $(document);

APP.$document.ready(function() {

	$(document).on('click', '.team-item', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
		else {
			$('.team-item.active').removeClass('active');
			$(this).addClass('active');
		}
	});

	$(document).on('click', '.quiz-item__radio', function() {
		let customField = $(this).parents('.quiz-item__content').find('.quiz-item__custom');

		if($(this).hasClass('quiz-item__radio_custom'))
			customField.removeAttr('disabled');
		else
			customField.attr('disabled', true);
	});

	$('.steps__total').text($('.quiz-item').length);

	$(document).on('click', '.quiz-control__arrow', function() {
		let currentStep = $('.quiz-item.current');
		let totalSteps = $('.quiz-item').length;

		if($(this).hasClass('quiz-control__next') && currentStep.next('.quiz-item').length) {
			currentStep.removeClass('current');
			currentStep.next('.quiz-item').addClass('current');
			$('.steps__current').text(+$('.steps__current').text() + 1);
			$('.quiz-control__prev').addClass('show');

			if(!$('.quiz-item.current').next('.quiz-item').length) {
				$('.quiz-control__next').removeClass('show');
				$('.quiz-control__send').addClass('show');
			}
		} else if($(this).hasClass('quiz-control__prev') && currentStep.prev('.quiz-item').length) {
			currentStep.removeClass('current');
			currentStep.prev('.quiz-item').addClass('current');
			$('.steps__current').text(+$('.steps__current').text() - 1);
			$('.quiz-control__next').addClass('show');

			if(!$('.quiz-item.current').prev('.quiz-item').length)
				$('.quiz-control__prev').removeClass('show');

			$('.quiz-control__send').removeClass('show');
		}
	});

});