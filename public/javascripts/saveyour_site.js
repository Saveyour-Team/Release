$(document).ready(function() {

	// handle nav-bar active class on page load
	apply_active_class_on_load(document.location.pathname);

	// hover feedback
	apply_active_class_on_hover();
		
});

function apply_active_class_on_load(pathname) {
	if (pathname === '/') {
		$('#download').addClass('active loaded');
	} else if (pathname === '/docs') {
		$('#docs').addClass('active loaded');
	} else if (pathname === '/plugins') {
		$('#plugins').addClass('active loaded');
	} else {
		Console.log("Pathname: \"" + pathname + "\" not handled.");
	}
}

function apply_active_class_on_hover() {

	$('#main-nav li').mouseenter(function() {
		if (!$(this).hasClass('loaded')) {
			$(this).addClass('nav-hovered');
			$('#main-nav li').mouseleave(function() {
				$(this).removeClass('nav-hovered');
			});
		}
	});
	
}