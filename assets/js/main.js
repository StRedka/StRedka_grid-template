$(document).ready(function(){
	$('.header-nav__btn').on ('click', function(){
		$(this).toggleClass('active');
		$('.header-nav__list').stop (true, true).slideToggle(500);
	});
});