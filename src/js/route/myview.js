// https://www.npmjs.com/package/scarletsframe#router--views
var views = sf.views('vw-myview', 'myview');
views.addRoute([
	{
	    path:'/',
	    template:'example',
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
	    template:'page2',
	    beforeRoute:function(data){
	      console.log("Before route data:", data);
	    },
	},
]);

views.on('routeStart', function(current, target) {
	// loading(true);
});

views.on('routeFinish', function(current, target, data) {
	// loading(false);
	animatePageTransition(views);
});

views.on('routeCached', function(current, target) {
	animatePageTransition(views);
});

views.on('routeError', function(e) {
	console.warn(e);
	// loading(false);
});