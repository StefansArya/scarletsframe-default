// https://www.npmjs.com/package/scarletsframe#initializedefine-model
sf.model.for('example', function(self, root){
	// Shared model properties
	self.message = "Hello";
	self.description = "Developers! ";
	// self.$el = may contains array of related `sf-m` element

	// Init something when <sf-m name="example"> placed on DOM
	self.init = function(){
		setTimeout(textAnimation, 2000);
	}

	// Being used for @click
	self.toPage2 = function(){
		views.goto('/page2');
	}

	function textAnimation(){
		var description = "Let's getting started!".split('');

		// Text animation
		var interval = setInterval(function(){
			self.description += description.shift();

			if(description.length === 0)
				clearInterval(interval);
		}, 50);
	}
});