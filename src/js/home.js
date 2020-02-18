// https://www.npmjs.com/package/scarletsframe#initializedefine-model
sf.model.for('example', function(self, root){
	self.message = "Hello";
	self.description = "Developers! ";

	self.init = function(){
		setTimeout(textAnimation, 2000);
	}

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