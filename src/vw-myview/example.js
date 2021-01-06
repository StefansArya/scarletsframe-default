// https://www.npmjs.com/package/scarletsframe#initializedefine-model
// To change the hot reload behaviour, go to public/index.html
sf.model("example", function (My, require) {
	// Shared model properties
	My.message = "Hello";
	My.description = "Developers! ";

	//> My.$el = may contains array of related `sf-m` elements
	// My.$el.addClass("heya");
	// console.log(My.$el[0]);

	// To be used for @click
	My.toPage2 = function () {
		views.goto("/page2");
	}

	// Init something when <sf-m name="example"> placed on DOM
	My.init = function () {
		setTimeout(descAnimation, 2000);
	}

	// Animate My.description
	function descAnimation() {
		var description = "Let's getting started!".split("");
		var interval = setInterval(function () {
			My.description += description.shift();
			if (description.length === 0) clearInterval(interval);
		}, 50);
	}

	// Run something when this model script was reloaded
	My.hotReloaded = function () {
		My.description += "\n Again.. ";
		descAnimation();
	}
});