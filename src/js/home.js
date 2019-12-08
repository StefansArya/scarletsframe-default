// https://www.npmjs.com/package/scarletsframe#initializedefine-model

sf.model.for('home', function(self, root){
	self.message = "Hello";

	self.init = function(){
		var pending = ' World'.split('');

		// Add character every 100ms
		var interval = setInterval(function(){
			self.message += pending.shift();

			if(pending.length === 0)
				clearInterval(interval);
		}, 100);
	}
});