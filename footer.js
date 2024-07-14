function onMenuToggle() {
	const icon = document.getElementById("icon");
	const checkbox = document.getElementById("checkbox");
	const isChecked = checkbox.checked;
	checkbox.checked = !isChecked
	icon.className = checkbox.checked ? "icon-close": "icon-menu";
	if (checkbox.checked){
		$(".menu").fadeIn(200);
		$(".splide__arrow").fadeOut(200);
	}
	else {
		$(".menu").fadeOut(200);
		$(".splide__arrow").fadeIn(200);
	}
}

$( document ).ready(function() {
	var splide = new Splide( '.splide',{
		'lazyLoad': 'sequential',
	});
	splide.mount();
});