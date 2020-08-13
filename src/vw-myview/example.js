// https://www.npmjs.com/package/scarletsframe#initializedefine-model
sf.model("example", function (self, root) {
	// Shared model properties
	self.message = "Hello";
	self.description = "Developers! ";

	//> self.$el = may contains array of related `sf-m` elements
	// self.$el.addClass("heya");
	// console.log(self.$el[0]);

	// To be used for @click
	self.toPage2 = function () {
		views.goto("/page2");
	}

	// Init something when <sf-m name="example"> placed on DOM
	self.init = function () {
		setTimeout(descAnimation, 2000);
	}

	// Animate self.description
	function descAnimation() {
		var description = "Let's getting started!".split("");
		var interval = setInterval(function () {
			self.description += description.shift();
			if (description.length === 0) clearInterval(interval);
		}, 50);
	}

	// Run something when this model script was reloaded
	self.hotReloaded = function () {
		self.description += "\n Again.. ";
		descAnimation();
	}
});