$(document).ready(function() {

	// handle nav-bar active class on page load
	apply_active_class_on_load(document.location.pathname);

		
});

function apply_active_class_on_load(pathname) {
	if (pathname === '/') {
		$('#download').addClass('active');
	} else if (pathname === '/docs') {
		$('#docs').addClass('active');
	} else {
		Console.log("Pathname: \"" + pathname + "\" not handled.");
	}
}