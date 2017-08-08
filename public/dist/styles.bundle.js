webpackJsonp([2],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n}\n.container-fluid.bg-1 {\n    padding-top: 70px;\n}\n.name {\n    color: #ffffff;\n    font-weight: bold;\n}\nh1{\n    font-family: 'Montserrat';\n    letter-spacing: 6px;\n    font-weight: 700;\n    text-transform: lowercase;\n}\n.description {\n    font-size: 14pt;\n    padding: 10px;\n    letter-spacing: 4px;\n    color: #ffffff;\n}\n.aboutme {\n    background-color: #555555;\n    padding: 10px;\n    color: #ffffff;\n}\n.skills {\n    background-color: #2a2c2b;\n    padding: 10px;\n    color: #ffffff;\n}\nh2, h3{\n    font-family: 'Montserrat';\n    text-transform: lowercase;\n}\n.italic {\n    margin-top: 10px;\n    font-style: italic;\n}\n.bg-1 {\n    margin-top: 50px;\n    padding-top: 20px;\n    background-color: #dc3522; /* Green */\n    color: #ffffff;\n}\n.bg-2 {\n    background-color: #374140; /* Dark Blue */\n    color: #ffffff;\n    padding-left: 70px;\n    padding-right: 70px;\n}\n.bg-3 {\n    background-color: #ffffff; /* White */\n    color: #555555;\n    padding-left: 100px;\n    padding-right: 100px;\n}\n.bg-4 {\n    background-color: #2a2c2b; /* White */\n    color: #ffffff;\n    padding-left: 70px;\n    padding-right: 70px;\n}\n.container-fluid {\n    padding-top: 15px;\n    padding-bottom: 50px;\n}\nul {\n    margin-top: 10px;\n}\n.profile {\n    border: 7px solid rgba(255, 255, 255, .1);\n}\n\n.carousel {\n    position: relative;\n    width: 700px;\n    height: 300px;\n    margin: 10px auto;\n}\n\n.carousel-caption {\n    padding-bottom: 5px;\n    font-size: 12px;\n}\n\n.carousel-indicators {\n    bottom: 0px;\n}\n\n.carousel-control.left, .carousel-control.right {\n    background-image: none !important;\n}\n\n.carousel-gradient {\n  background: rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(30, 30, 30, 0) 75%, rgba(30, 30, 30, .8) 100%) repeat scroll 0 0;\n  position: relative;\n  margin-top: -300px;\n  height: 300px;\n}\n\n.fa-chevron-left {\n    margin-top: 130px !important;\n    margin-left: -50px !important;\n}\n\n.fa-chevron-right {\n    margin-top: 130px !important;\n    margin-right: -50px !important;\n}\n\nnav.navbar {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    background-color: #2a2c2b;\n    min-height: 80px;\n    transition: padding 0.6s ease-in-out;\n}\n\nnav.shrink {\n    min-height: 50px;\n    transition: all 0.6s ease;\n}\n\nnav.shrink a {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n    transition: all 0.6s ease;\n}\n\nnav.shrink li a {\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n    font-size: 14px !important;\n    transition: all 0.6s ease;\n}\n\nnav.shrink a.navbar-brand {\n    font-size: 18px;\n    text-transform: lowercase;\n}\n\n.navbar-nav li a:hover {\n    color: #dc3522 !important;\n}\n.navbar-nav li a {\n    color: #ffffff !important;\n    font-size: 15px !important;\n    padding-top: 24px;\n    transition: all 0.6s;\n    text-transform: lowercase;\n}\n.navbar-brand {\n    padding: 24px 15px;\n    font-size: 22px;\n    text-transform: lowercase;\n    font-weight: bold;\n    color: #dc3522 !important;\n    transition: all 0.6s;\n    letter-spacing: 4px;\n}\n\n.container-fluid span { \n  margin-top: -50px;        /* Size of fixed header */\n  padding-bottom: 50px; \n  display: block; \n  visibility: hidden;\n}\n\n.row {\n    display: inline;\n}\n.column {\n    display: block;\n}\n\n/* overlay */\n.container1 {\n  display: inline-block;\n  position: relative;\n  width: 114px;\n  margin: 5px;\n}\n\n.image1 {\n  display: block;\n  width: 114px;\n  height: auto;\n}\n\n.overlay1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: black;\n  border-radius: 50%;\n}\n\n.container1:hover .overlay1 {\n  opacity: .7;\n}\n\n.text1 {\n  color: white;\n  font-size: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  opacity: 1;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\nh3 {\n    margin-top: 0px !important;\n}\n\n /* Style all font awesome icons */\n.fa {\n    font-size: 30px;\n    padding: 10px;\n    margin: 10px 7px 7px;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n/* Set a specific color for each brand */\n\n/* Facebook */\n.fa-linkedin {\n  background: #007bb5;\n  color: white;\n}\n/* Twitter */\n.fa-github {\n    background: white;\n    color: #333;\n} \n.fa-envelope-o {\n    background: #dd4b39;\n    color: white;\n} ", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map