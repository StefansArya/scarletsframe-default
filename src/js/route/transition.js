function animatePageTransition(views){
	if(views.lastSibling !== void 0){
		$(views.showedSibling).insertAfter(views.lastSibling);
		$(views.lastSibling).animateKey('scaleDown', 0.6, function(){
			$(this).addClass('disable-anim');
		});
	}

	$(views.showedSibling).removeClass('disable-anim').animateKey('scaleUpDown', {
		duration:0.6,
		delay:0.3,
		visible:false
	});
}