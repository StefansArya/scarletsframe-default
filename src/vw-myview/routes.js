// https://www.npmjs.com/package/scarletsframe#router--views
var views = new sf.views('vw-myview', 'myview');
views.addRoute([
	{
	    path:'/',

	    // Relative to `/src` directory path
	    // If you modify the `/src` structure you also need to modify `compilePath` from `gulpfile.js`
	    template:'vw-myview/example.html',

	    // Event listener for current route
	    on:{
	      coming:function(){
	        console.log('henlo from / route');
	      },
	      leaving:function(){
	        console.log('leaving from / route');
	      },
	    },
	}, {
	    path:'/page2',
	    template:'vw-myview/page2',

	    // Run something before going to this route
	    beforeRoute:function(data){
	      console.log("Before route data:", data);
	    },
	},
])

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

sf.views.onCrossing = function(url, target){
	console.log("What should we do with cross domain URL?", url, target);
}