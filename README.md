<p align="center">
	<a href="https://skeletonic.io">
		<img src="https://github.com/reedia/skeletonic/raw/master/images/skeletonic.png" alt="Skeletonic Logo"  />
	</a>  
</p>

<h1 align="center">Introducing Skeletonic</h1>

<p align="center">Skeletonic is a lightweight, intuitive and ultra-responsive CSS framework to speed up your Digital and Mobile Web development needs.</p>

<p align="center">Simply designed to fit your cascading web life.</p>

<p align="center"><strong>Version: 1.0.89</strong></p>

<p align="center">
  [s](s)
  
  <a href="https://github.com/reedia/skeletonic/archive/v1.0.89.zip" class="button primary">Download</a>
</p>

[![NPM](https://nodei.co/npm/skeletonic.png)](https://nodei.co/npm/skeletonic/)

[![npm version](https://badge.fury.io/js/skeletonic.svg)](https://badge.fury.io/js/skeletonic)
[![Build Status](https://travis-ci.org/reedia/skeletonic.svg?branch=master)](https://travis-ci.org/reedia/skeletonic)
[![Packagist](https://img.shields.io/badge/license-MIT-blue.svg)](https://skeletonic.github.io/license)

## Table of contents

-   [Getting Started](#getting-started)
-   [What's in the box](#whats-in-the-box)
- 	[Alternate CDN locations](#alter  nate-cdn-locations)
-   [Built With](#built-with)
-   [Contributing](#contributing)
-   [Code of Conduct](#code-of-conduct)
-   [Our Values](#our-values)
-   [History](#history)
-   [License](#license)
-   [Acknowledgements](#acknowledgements)

## Getting Started

A few options are available:

-   Download the latest [release](https://github.com/reedia/skeletonic/archive/v1.0.89.zip)
-   Install with [Npm](https://www.npmjs.com/package/skeletonic) to get the pre-built CSS and sourcemaps. This is recommended when using Skeletonic for a typical web project: 

```bash
npm install skeletonic
```

-   Or simply clone the main repository to get all source files including build scripts: `git clone https://github.com/reedia/skeletonic.git`

## What's in the box

The Github project contains all source files which are compiled into the dist folder. Within the release you'll find the following directory and external style sheets with both compiled, minified CSS variations and CSS sourcemaps:

```
Skeletonic
├── index.html
├── skeletonic-1.0.89.css
├── skeletonic-1.0.89.css.map
├── skeletonic-animations-1.0.89.css
├── skeletonic-animations-1.0.89.css.map
├── skeletonic-animations.min-1.0.89.css
├── skeletonic-colours-1.0.89.css
├── skeletonic-colours-1.0.89.css.map
├── skeletonic-colours.min-1.0.89.css
├── skeletonic-fonts-1.0.89.css
├── skeletonic-fonts-1.0.89.css.map
├── skeletonic-fonts.min-1.0.89.css
├── skeletonic-pattern-1.0.89.css
├── skeletonic-pattern-1.0.89.css.map
├── skeletonic-pattern.min-1.0.89.css
├── skeletonic.min-1.0.89.css
```

You simply then need to link one of these in your HTML document.

The link consists of just a simple line of HTML code that you will need to put in the ```<head>```  section of your HTML document:

#### Default CSS

```
<link rel="stylesheet" type="text/css" href="skeletonic.min-1.0.89.css" />
```

We also offer production-ready versions and use unpkg as our CDN to link to the latest production version

```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/skeletonic" />
```

#### CSS Responsive Grid-View
```
<link rel="stylesheet" type="text/css" href="skeletonic-pattern.min-1.0.89.css" />
```

#### CSS Colours
```
<link rel="stylesheet" type="text/css" href="skeletonic-colours.min-1.0.89.css" />
```

#### CSS Animations
```
<link rel="stylesheet" type="text/css" href="skeletonic-animations.min-1.0.89.css" />
```

## Alternate CDN locations
The following table lists alternate CDN locations where Skeletonic is hosted.

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| [unpkg](https://unpkg.com/) | https://unpkg.com/skeletonic@1.0.89/dist/skeletonic.min-1.0.89.css | Yes | No |
| [jsDelivr](https://www.jsdelivr.com/) | https://cdn.jsdelivr.net/npm/skeletonic/dist/skeletonic.min-1.0.89.css  | Yes | Yes |
| [RawGit](http://rawgit.com/) | https://cdn.rawgit.com/reedia/skeletonic/master/dist/skeletonic.min-1.0.89.css | Yes | No |



## Built With
-   [Gulp](https://gulpjs.com/) - The streaming build system
-   [Stylus](http://stylus-lang.com/) - Expressive, robust, feature-rich CSS language built for nodejs
-   [CSScomb](http://csscomb.com/) - CSS coding style formatter

## Contributing

Please read carefully through our [Contributing Guidelines](https://github.com/reedia/skeletonic/blob/master/CONTRIBUTING.md) for further details on the process for submitting pull requests to us.

## Code of Conduct
We are committed to preserving and fostering a diverse, welcoming community. Please read our [Code of Conduct](https://github.com/reedia/skeletonic/blob/master/CODE_OF_CONDUCT.md).

## Our Values
1.  We believe perfection must consider everything.
2.  We take our passion beyond Code into our daily practices.
3.  We are just obsessed about creating and delivering exceptional solutions.

## History

*   See [Skeletonic Release](https://github.com/reedia/skeletonic/releases) list.


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/reedia/skeletonic/blob/master/LICENSE) file for details


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Freedia%2Fskeletonic.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Freedia%2Fskeletonic?ref=badge_large)

## Acknowledgements

[Skeletonic](https://skeletonic.io) is beautifully crafted by these people and a bunch of awesome [contributors](https://github.com/reedia/skeletonic/graphs/contributors)

[![Sebastien Rousseau](https://avatars0.githubusercontent.com/u/1394998?s=117)](https://sebastienrousseau.co.uk) |
|:---:
[Sebastien Rousseau](https://github.com/sebastienrousseau) |

Credit also goes to the following source code libraries:
-   [Normalize.css](http://necolas.github.io/normalize.css/) - A modern, HTML5-ready alternative to CSS resets to fix cross-browser compatibility issues.
-   [Skeleton](http://www.getskeleton.com) - A Dead Simple, Responsive Boilerplate
-   [Wing](http://usewing.ml/) - A beautiful CSS framework designed for minimalists.

## About Reedia

![Reedia](https://avatars0.githubusercontent.com/u/488747?s=200)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Freedia%2Fskeletonic.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Freedia%2Fskeletonic?ref=badge_shield)