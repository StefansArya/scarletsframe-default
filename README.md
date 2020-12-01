# ScarletsFrame's default template
Basic template for scarletsframe

Let's begin with these steps

### Install dependency
We will use [scarletsframe-compiler](https://github.com/StefansArya/scarletsframe-compiler), but it's still work in progress. You can use another custom build chain like using [Webpack](https://github.com/krausest/js-framework-benchmark/tree/master/frameworks/keyed/scarletsframe)/Rollup/Parcel.

```sh
$ npm i

# Or use yarn
$ yarn install

# Or use pnpm
$ pnpm i
```

## Starting the development server
```sh
$ npm start

# Or use gulp if already installed globally
$ gulp
```

### Compile or build the project
The compilation process will minify your code and also run Babel transpiler to support low end browser.
```sh
# Compile the template
$ npm run compile

# Or use gulp
$ gulp compile
```

### Modifying the code
The `/public` folder is the directory where the browser could access every content inside of it. `index.html` is the default html file that being served after the server was started.

### Hot Reload
Everytime you modify the project's source code inside `/src` folder the development server will reload the browser. The compiler already have versioning, so you don't need to press CTRL+F5 every time you modify your code in `/src`.

If you want to change the hot reload behaviour you can modify it from `/public/index.html`.

### Compiler settings
You can modify some parameter on the `/gulpfile.js` if you want to have different configuration.

### ScarletsFrame file extension
Before you getting started with `.sf` file, please install the syntax highlighter from this [link](https://github.com/StefansArya/scarletsframe-compiler/syntax-highlighter). There are an example in the `/src/vw-myview/example.sf`.

## GitHub Pages
There are a default template for deploying into `gh-pages` branch on `/.github/workflows/gh-pages.yml-template`. To use it you just need to rename it to `gh-pages.yml`. Then go to your project settings, scroll down, and configure your GitHub Pages.

### For automatic build on Vercel
If you're using Vercel you can specify this on the settings.<br>
> Build Command       : npm run compile<br>
> Output Directory    : public<br>
> Development Command : npm start<br>

`Build command` is a command for compiling the source and the compiled files will be placed on public folder (configured on `gulpfile.js`). `Development Command` is a command for starting the compiler server so you can use hot reload feature if you editing the source somewhere.

### License
MIT
