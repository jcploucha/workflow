# workflow




### .gitignore
common files to ignore in this workflow

### grunt

##### installation

`$ npm install grunt`

or 

`$ npm install` if using `package.json`

##### tasks

* handlebars: compiles handlebars template files into a `templates.js` file

* sass: compiles sass file into a css file

* jshint: lints javascript files

* jscs: also lints javascript files

* watch: watches css/html/handlebars/js files for changes on save and runs the appropriate task (e.g. save sass file > sass task is run) and reloads the browser

	* requires chrome livereload extension: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en 

##### usage
`$ grunt`

### package.json
for use with grunt to install all dependencies

### .bash_profile
helpful aliases for running app in different environments

* requires https://github.com/alexch/rerun
