/**
 * This translator using Google Translate free services
 * It's better if you switch to the paid API of Google Services
 * Or use your own implementation
 */

var _ = null;
var transTimer = 0;
var timerSet = new Set();
var resetTimer = null
var translate = null;
var options = null;
var left = 0;

function initOption(){
	// var tunnel = require('tunnel');
	options = {
		headers: {
			'User-Agent': 'Translation Bot/1.0'
		},

		// https://www.free-proxy-list.com/?page=&port=&speed%5B%5D=3&connect_time%5B%5D=3&up_time=90&search=Search
		// agent: tunnel.httpsOverHttp({
		//     proxy: { 
		//     	host: '209.90.63.108',
		//     	port: '80'
		//     }
		// })
	};
}

module.exports = function(from, target, text, callback){
	if(translate === null){
		initOption();
		_ = require('lodash');
		resetTimer = _.debounce(function(){transTimer = 0}, 2000);
		translate = require('@vitalets/google-translate-api');
	}

	if(target.indexOf('zh_') !== -1)
		target = target.replace('_', '-');

	var timer = setTimeout(function(){
		process.stdout.write("\r\033[K[sf-lang] Translating ("+target+"): "+text.slice(0, 8)+'...');
		translate(text, {
			from: from.split('_')[0],
			to: target.split('_')[0]
		}, options).then(function(res){
			if(res.text === text)
				res.text += '‎'; // Add empty character for marking

			callback(res.text);
			timerSet.delete(timer);
			process.stdout.write("\r\033[K[sf-lang] Translated ("+target+"): "+text.slice(0, 8)+'...');

			if(timerSet.size === 0)
				process.stdout.write("\r\033[K[sf-lang] Translation finished\n");
		}).catch(function(err){
			callback(text);
			console.error("\nCan't translate:", target, err.message);

			for(var val of timerSet.values()){
				clearTimeout(val);
			}

			timerSet.clear();
		});
	}, 2000*(transTimer++));

	timerSet.add(timer);
	resetTimer();
}