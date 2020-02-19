// Apply your own translator there
var translate = require('./translates.js');
function translates(text, target, callback){
	translate(path.translate.defaultLang, target, text, callback);
}

process.stdout.write("Loading scarletsframe-compiler\r");

require("scarletsframe-compiler")({
	// ===== Modify me, add slash as last character if it's directory =====
	path:{
		versioning:'public/index.html',
		js:{
			folder:'public/assets/',
			file:'myjs.min.js'
		},
		css:{
			folder:'public/assets/',
			file:'mycss.min.css'
		},
		html:{
			folder:'public/assets/',
			file:'myhtml.html.js'
		}
	},

	compilePath:{
		// Will be processed from the top to bottom
		js:[
			//'src/startup_init/_variable.js',
			'src/**/*.js',
		],
		css:'src/**/*.scss',
		html:'src/**/*.html',

		// Watch changes and apply changes directly without combine to one file
		// template:['resources/plate/**/*.php', 'resources/views/**/*.php']
	},

	browserSync:{
		// proxy:'http://myjs.sandbox',
		port:5678, // accessible-> http://localhost:5678
		ghostMode: false,

		// Standalone server with BrowserSync
		server:{
			baseDir:'public/',
			index:'index.html',
		}
	},

	// Flag the element with `sf-lang` attribute to get translation
	// Any value on innerText will being used as default language value
	translate:{
		defaultLang:'en_US',

		// https://gist.github.com/jasef/337431c43c3addb2cbd5eb215b376179
		translate:['en_US','fr_FR','id_ID','ja_JP'],

		// Folder to be scanned
		folder:[
			{prefix:'component', path:'src/html'},
			{prefix:'js', path:'src/js', flag:'js'}, // Flag this as javascript
			// {save:'resources/lang', path:'app', flag:'php'}, // Flag this as PHP
		],

		// Put `var tr = sf.lang` somewhere on the script to avoid being uglified
		jsFunc:'tr',
		phpFunc:'tr',

		// Available language will be saved here
		saveDir:'public/assets/languages',
		on:{
			translate:translates
		},

		// if changed text not similar, new index will be created
		similarity:0.6,
		retranslate:true
	},

	includeSourceMap:true,
}, require('gulp'));