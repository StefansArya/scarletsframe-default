// Apply your own translator there
var translate = require('./translates.js');
function translates(text, target, callback){
  // Assume that our default language on every template is en_US
	translate('en_US', target, text, callback);
}

process.stdout.write("Loading scarletsframe-compiler\r");

require("scarletsframe-compiler")({
	// Start the server
	browserSync:{
		// proxy:'http://myjs.sandbox',
		port:6789, // Accessible-> http://localhost:6789
		ghostMode: false, // Use synchronization between browser?
		ui: false, // Disable BrowserSync UI

		// Standalone server with BrowserSync
		server:{
			baseDir:'public/',
			index:'index.html',
		}
	},

	// Optional if you want to remove source map on production mode
	includeSourceMap: process.env.production || true,
	timestampSourceMap: false,
	hotReload:{
		html: true,
		js: true,
		scss: true,
		static: true, // A template written on PHP or others
	},

	// ===== Modify me, add slash as last character if it's directory =====
	path:{
		// Use `default` if you're not exporting project as library/module
		default:{
			versioning:'public/index.html',
			stripURL:'public/', // 'public/' will be removed from script/css URL on the HTML

			js:{
				file:'public/assets/myjs.min.js',

				// Will be processed from the top to bottom
				combine:[
					//'src/startup_init/_variable.js',
					'src/**/*.js',
				],
			},
			scss:{
				file:'public/assets/mycss.min.css',
				combine:'src/**/*.scss',
			},
			html:{
				file:'public/assets/myhtml.html.js',
				combine:'src/**/*.html',

				// Watch changes and apply changes directly without combine to one file
				// static:['resources/plate/**/*.php', 'resources/views/**/*.php'],
			}
		},
	},

	// Flag the element with `sf-lang` attribute to get translation
	// Any value on innerText will being used as default language value
	translate:{
		defaultLang:'en_US',

		// https://gist.github.com/jasef/337431c43c3addb2cbd5eb215b376179
		translate:['en_US','fr_FR','id_ID','ja_JP'],

		// Folder to be scanned
		folder:[
			{prefix:'component', path:'src/vw-myview'},
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
}, require('gulp'));