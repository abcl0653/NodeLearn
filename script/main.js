window.addEventListener("hashchange", switch_sign, false);

function switch_sign () {
	//alert(window.location.hash);
	if (window.location.hash === '#signin') {
		$('a[href="\#signin"]').addClass('active');
		$('a[href="\#signup"]').removeClass('active');
		$('.navs-slider').attr('data-active-index','1');
		$('.view-signin').show();
		$('.view-signup').hide();
	} else if (window.location.hash === '#signup') {
		$('a[href="\#signin"]').removeClass('active');
		$('a[href="\#signup"]').addClass('active');
		$('.navs-slider').attr('data-active-index','0');
		$('.view-signup').show();
		$('.view-signin').hide();
	}
	

}