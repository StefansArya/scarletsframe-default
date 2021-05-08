// https://www.npmjs.com/package/scarletsframe#router--views

// Current template is designed for file route
// You can easily add route by adding new file in +vw-myview folder
var views = new sf.Views('vw-myview', 'myview');

// You can also add route with JavaScript
/*views.addRoute([{
    path:'/',

    // Relative to `/src` directory path
    // If you modify the `/src` structure you also need to modify `compilePath` from `gulpfile.js`
    template:'vw-myview/example.html',
}]);*/

// Will be called before navigating
.on('start', function(current, target) {
	// Save or delete stuff maybe?
})

// Useful for making loading bar when waiting HTTP request
.on('loading', function(current, totalDepth){
	// loading(true);
})

// Will be called after new DOM was inserted into views
.on('loaded', function(current, totalDepth, element) {
	// Initialize some element with your library maybe
	// like lazy image element

	// LazyImage.init(element);
})

// Will be called after successfully navigated
.on('finish', function(current, target, data){
	// loading(false);
	animatePageTransition(views);
})

// When any route error happen
.on('error', console.error);

sf.Views.onCrossing = function(url, target){
	console.log("What should we do with cross domain URL?", url, target);
}


// === Function for transitioning page ===

var transitioning = 0;
function animatePageTransition(views){
	if(views.lastSibling !== void 0)
		$(views.lastSibling).animateKey('scaleDown', 0.6, function(){
			$(this).addClass('disable-anim');
		});

	if(views.showedSibling !== void 0)
		$(views.showedSibling).removeClass('disable-anim').animateKey('scaleUpDown', {
			duration:0.6,
			delay:0.3,
			visible:false
		});

	// Make sure showed element is not hidden after animation
	clearTimeout(transitioning);
	transitioning = setTimeout(function(){
		transitioning = false;
		$(views.relatedDOM).removeClass('disable-anim');
	}, 1000);
}