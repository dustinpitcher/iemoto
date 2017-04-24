# This is a fork of the awesome Iemoto. 

It uses a different Gruntfile which uses grunt-sass instead of compass. Also has livereload enabled which also reloads for php file changes.

Original project located here: based on [_s](https://github.com/automattic/_s) and integrated with [grunt](http://gruntjs.com/project-scaffolding).

Similar except more opinionated:

Compass has been removed because it's slow in c9.io which is what I use for these kinds of projects. Changed to grunt-contrib-sass / gulp-sass respectively.

Added Bootstrap.

Added Font Awesome.

All credit goes to the original contributors. 

# Iemoto

This is a WordPress Starter Theme based on [_s](https://github.com/automattic/_s) and integrated with [grunt](http://gruntjs.com/project-scaffolding).

Iemoto follows all the fixes and feature upgrades of [_s](https://github.com/automattic/_s)

Automate theme development process with it!

## How to install

### install grunt-init

If you've never used any `grunt-init` templates follow below to install `grunt-init`.

```
npm install -g grunt-init
```

Next, create `~/.grunt-init` directory.

```
mkdir ~/.grunt-init
```

### Install Iemoto

Get this template via git.

```
git clone https://github.com/dustinpitcher/iemoto.git
```

### Sass(Compass)

Iemoto utilizes grunt / gulp sass to create style.css and editor-style.css.
Get them first.

* Sass: http://sass-lang.com/
* Compass: http://compass-style.org/

### gulp

You can also use [gulp.js](http://gulpjs.com/) for js/sass compiling if installed.

```
$ npm install --global gulp
```

* gulp.js: http://gulpjs.com/

## Usage

Create your theme directory in `wp-content/themes`.

```
mkdir wp-content/themes/my-theme
```

Cd to your theme directory run `grunt-init iemoto` to create theme files.

```
grunt-init iemoto
```

By commanding above, you will be asked for some inputs such as Theme Name, Description, license and so on.

```
$ grunt-init iemoto
Running "init:iemoto" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

Please answer the following:
[?] Project title (MARCOM) 
[?] PHP function prefix (alpha and underscore characters only) (marcom) 
[?] Description (Custom Theme by The Marcom Group) 
[?] Project homepage (https://themarcomgroup.com/) 
[?] Author name (The Marcom Group) 
[?] Author url (https://themarcomgroup.com/) 
[?] Use gulp? (y/N) 
[?] Do you need to make any changes to the above before continuing? (y/N)
```

At the end of this procedure, you will be asked if there are any changes. Type `N` or enter key to create the templates.

When asked `[?] Use gulp? (y/N) `, type `y` to create files you need for gulp. It's `N` by default.

Then, command `npm install` to download files needed for `grunt` (or `gulp`) command.

```
npm install
```

Files to be installed are defined in `package.json` file.

Create you own theme now.

## Default values

You can set default values to the `grunt-init` prompt.

It will be more useful if there is a name and URL.

To set default values, put defaults.json and edit it.

```
cp ~/.grunt-init/iemoto/defaults.json.sample ~/.grunt-init/defaults.json
```

## Minifying css and javascripts with grunt

When you've edited `.js` and `.scss`, command this. 

```
grunt
```

## Minifying css and javascripts with gulp

When you've edited `.js` and `.scss`, command this. 

```
gulp
```

You can `gulp js` or `gulp compass` to specify just js or Sass(Compass).

## watch

If you utilize `grunt watch` or `gulp watch`, grunt(gulp) will watch the file editing and automatically minify them.


```
grunt watch
// or
gulp watch
```

To stop watch, type `[control]+[c]`

## Version of javascripts and styles

Iemoto adds versions to js and css which is specified in package.json as

```
"version": "0.1.0",
```

When grunt(gulp)ed, the version specified in package.json will be implemented in style.css and .js as comments, and also will be passed to `wp_enqueue_style()` and `wp_enqueue_script()`.

### Debug mode and Sourcemap

If WP_DEBUG is true, theme will load `css/style.css`, which has Sourcemap integrated, instead of `style.css`, which is the Sourcemap-ommited version of the `css/style.css`.

Sourcemap is available if your Sass version is greater than 3.3.0.


## Note when you share your theme on WordPress.org directory

svn:ignore `node_modules` directory

## Feedbacks

Feedbacks are very much welcome!

* https://github.com/megumiteam/iemoto/issues

## Contributors

* [miya0001](https://github.com/miya0001)
* [gatespace](https://github.com/gatespace)
* [8bitodyssey](https://github.com/8bitodyssey)
* [ShinichiNishikawa](https://github.com/ShinichiNishikawa)
* [tekapo](https://github.com/tekapo)

