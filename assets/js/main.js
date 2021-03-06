$(document).ready(function() {
	var url = document.location.href;
	var parent_folder = url.substr(0, url.lastIndexOf('/'));
	var active = url.substr(0, url.length-document.location.hash.length);

	$('.docs.sidebar ul ul').hide();
	$('.docs.sidebar ul ul').each(function() {
		$(this).parent('li').addClass('nav-close');
		var anchor = $(this).prev('a').attr('href');
		if (anchor == active) {
			$(this).prev('a').addClass('active');
			$(this).parent('li').addClass('nav-open').removeClass('nav-close');
			$(this).show();
		} else if (anchor == parent_folder) {
			$(this).prev('a').addClass('active');
			$(this).parent('li').addClass('nav-open').removeClass('nav-close');
			$(this).show();
		}
		$(this).prev('a').bind('click', function(e) {
			$(this).parent('li').toggleClass('nav-open').toggleClass('nav-close');
			$(this).next('ul').animate({opacity: 'toggle', height: 'toggle'}, "slow");
			return false;
		});
	});
	$().UItoTop({ easingType: 'easeOutQuart' });
});