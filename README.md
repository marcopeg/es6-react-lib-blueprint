# es6-react-lib-blueprint

> Blueprint for building an ES6 ReactJS _(and generally client side)_ 
> library and publish it to NPM.

If you want to write an _NPM module_ with _ES6_ this is repository is a good starting point for you. Clone it and dig into `/src` and `/test` folder to write functionalities and unit tests.

## Folder Structure

#### /src

Write here your _ES6_ source files.

#### /test

Write here your _ES6_ unit tests.

#### /lib

This is the target folder for _ES5_ transpiled files. 

	(ES6)          (ES5)
	/src/foo.js -> /lib/foo.js
	
#### /dist

This is the target folder for _Webpack_ to build the standalone distribution for your library.

#### /coverage

This is the target folder for the test coverage report.

## Provided Scripts

There are a couple of _NPM scripts_ which make your developer life easier:

#### npm run build:lib

It transpiles `/src` into _ES5_ compatible files in `/lib`.

#### npm run build:umd

It runs _Webpack_ and generate the distribution bundle.

#### npm run build:umd:min

It runs _Webpack_ and generate the **minified** distribution bundle.

#### npm run build:watch

It transpiles and monitor `/src` files for new changes.

#### npm run build

#### npm lint

It checks your code for any possible problem or style errors accordingly to `.eslintrc`.

#### npm clean

It removes all the generated files in `/lib` and `/coverage`.

#### npm test

#### npm run test:watch

#### npm run test:cov

It runs the tests and produces a **test coverage report** in `/coverage`.

## Customise

You may want to customise the boudle file name in `package.json / scripts / build:umd` and the library name in `webpack.config.js`.



