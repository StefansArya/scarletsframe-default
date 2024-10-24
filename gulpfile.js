process.stdout.write("Loading scarletsframe-compiler\r");

// Run this from CLI
// $ npx gulp               -> Watch files
// $ npx gulp compile       -> Compile JS/CSS/HTML
// $ npx gulp compile-html  -> Compile HTML only
// $ npx gulp compile-css   -> Compile CSS only
// $ npx gulp compile-js    -> Compile JS only
// $ npx gulp compile-sf    -> Compile SF only

var translates = require('./translates.js');

var os = require('os');
var notifier = os.platform() === 'win32'
	? new require('node-notifier/notifiers/balloon')() // For Windows
	: require('node-notifier'); // For other OS

require("scarletsframe-compiler")({
	// Start the server with BrowserSync
	browserSync: {
		// proxy:'http://myjs.sandbox',
		port: process.env.PORT || 6789, // Accessible-> http://localhost:6789
		ghostMode: false, // Use synchronization between browser?
		ui: false, // Disable BrowserSync UI
		open: false, // Don't automatically open browser

		// Standalone server with BrowserSync
		server:{
			baseDir: 'public/',
			index: 'index.html',
		}
	},

	// Recompile some files before being watched on startup
	// You may want to check if the git history was changed
	// And then set this to true with JavaScript
	startupCompile: true,

	// Choose your default editor
	// You must register "subl" or "code" to the PATH environment variable.
	// https://www.sublimetext.com/docs/command_line.html
	//
	// https://code.visualstudio.com/docs/editor/command-line#_code-is-not-recognized-as-an-internal-or-external-command
	editor: 'sublime', // only 'sublime' or 'vsc' that currently supported

	// Optional if you want to remove source map on production mode
	includeSourceMap: process.env.production || true,
	hotReload:{
		html: true,
		js: true,
		scss: true,
		sf: true,
		static: true, // A template written on PHP or others
	},

	// ===== Modify me, add slash as last character if it's directory =====
	path:{
		// Use `default` if you're not exporting project as library/module
		default:{
			versioning:'public/index.html',
			stripURL:'public/', // 'public/' will be removed from script/css URL on the HTML

			// ** Optional Feature: js module **
			// js:{
			// 	file:'public/assets/myjs.min.js',
			// 	module: {
			// 		from: 'src/init.js',
			// 		format: 'cjs', // https://rollupjs.org/repl/
			// 	},
			// },

			// ** Optional Feature: combined js files**
			js:{
				file:'public/assets/myjs.min.js',
				// header:"/* MyProject \n MIT Licensed */",

				// Will be processed from the top to bottom
				combine:[
					//'src/startup_init/_variable.js',
					'src/**/*.js',
				],
			},

			scss:{
				file:'public/assets/mycss.min.css',
				combine:'src/**/*.scss',

				// header:"/* MyProject \n MIT Licensed */",
			},
			html:{
				file:'public/assets/myhtml.html.js',
				combine:'src/**/*.html',

				// header:"/* MyProject \n MIT Licensed */",
				// prefix: 'MyHTML'

				// Watch changes and apply changes directly without combine to one file
				// static:['resources/plate/**/*.php', 'resources/views/**/*.php'],
			},
			sf:{
				file:'public/assets/sf.combined', // Will have .js and .css
				combine:'src/**/*.sf',
				// prefix: 'MyHTML'
			}
		},
	},

	onCompiled: function(which){
		notifier.notify({
			title: 'Gulp Compilation',
			message: which+' was finished!',
			timeout: 4, time: 4,
		});
	},

	// ** Optional Feature: translate **
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

		// Put `var tr = sf.language.get` somewhere on the script to avoid being uglified
		jsFunc:'tr',
		phpFunc:'tr',

		// Available language will be saved here
		saveDir:'public/assets/languages',
		on:{
			// Apply your own translator there
			translate(text, target, callback){
				// Assume that our default language on every JS or HTML template is en_US
				translates('en_US', target, text, callback);
			}
		},

		// if changed text not similar, new index will be created
		similarity:0.6,
		retranslate:true
	},

	// ** Experimental **
	// Browser executable path, you don't need to use full path
	// If the browser can be called from your CLI environment
	// browserExec: "%AppData%/../Local/Chromium/Application/chrome.exe",
}, require('gulp'));