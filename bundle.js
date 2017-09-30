(function () {
'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && _typeof(undefined.amd) === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
})();
});

/**
 * This file uses a script I (Viktor Strate) have written,
 * to get the latest images for a specified hashtag from Instagram
 */

var HASHTAG = 'robots';
var SLIDESHOW_SPEED = 10 * 1000;

var imageElements = [];
var currentImage = 0;
var slideshowInterval = null;

window.fetch('https://qpqp.dk/instagram_hashtag_images.php?hashtag=' + HASHTAG).then(function (res) {
  return res.json();
}).then(function (json) {
  loadImages(json);
});

function loadImages(images) {
  console.log('Loading instagram images', images);

  var livescore = document.getElementById('images');
  livescore.innerHTML = '';
  imageElements = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var img = _step.value;

      if (img === null) continue;

      var imgElm = document.createElement('img');
      imgElm.src = img.display_src;
      imgElm.className = classnames('image');

      imageElements.push(imgElm);

      livescore.appendChild(imgElm);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  imageElements[currentImage].className = classnames('image', 'shown');

  startSlideshow();
}

function startSlideshow() {
  window.clearInterval(slideshowInterval);
  slideshowInterval = window.setInterval(function () {
    currentImage = currentImage >= imageElements.length - 1 ? 0 : currentImage + 1;

    for (var i = 0; i < imageElements.length; i++) {
      imageElements[i].className = classnames('image', { shown: i === currentImage });
    }
  }, SLIDESHOW_SPEED);
}

console.log('Scripts loaded');

}());
