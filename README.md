# ScarletsFrame's default template
Basic template for scarletsframe

## Getting started
```sh
$ npm i -g scarletsframe-cli
$ scarletsframe init default

# Compile the default template
$ npm run compile

# Or use gulp if already installed globally
$ gulp compile
```

## Starting the server
```sh
$ npm start

# Or use gulp
$ gulp
```

After starting gulp, you will being redirected to your browser automatically.

If you haven't compile your project, then you need to re-save any `.js .scss .html` file from `/src` folder.

## Modifying the code
The `/public` folder have default `index.html` for getting started, and you should write `css` and `js` into `/src` folder to get the live reload from browser-sync.
The compiler already have versioning, so you don't need to press CTRL+F5 every time you modify your code in `/src`.
But usually you will have to modify some parameter on the `/gulpfile.js` if you want to have different configuration.

## Compiling the code
The compilation process will minify your code and also run Babel transpiler to support low end browser.
```sh
$ npm compile
```