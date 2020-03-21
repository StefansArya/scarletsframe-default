// https://www.npmjs.com/package/scarletsframe#router--views
var views = new sf.views('vw-myview', 'myview');
views.addRoute([
	{
	    path:'/',

	    // Relative to `/src` directory path
	    // If you modify the `/src` structure you also need to modify `compilePath` from `gulpfile.js` 
	    template:'vw-myview/example',

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
]);

// Useful for making loading bar when waiting HTTP request
views.on('routeStart', function(current, target) {
	// loading(true);
});

// Route finished
views.on('routeFinish routeCached', function(current, target, data) {
	// loading(false);
	animatePageTransition(views);
});

views.on('routeError', function(e) {
	console.warn(e);
	// loading(false);
});