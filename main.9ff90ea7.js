parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"9qb7":[function(require,module,exports) {
var define;
var e;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var s=n.apply(null,o);s&&e.push(s)}else if("object"===a)for(var u in o)r.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}"undefined"!=typeof module&&module.exports?(n.default=n,module.exports=n):"function"==typeof e&&"object"==typeof e.amd&&e.amd?e("classnames",[],function(){return n}):window.classNames=n}();
},{}],"k1sS":[function(require,module,exports) {
"use strict";var e=n(require("classnames"));function n(e){return e&&e.__esModule?e:{default:e}}var t="htxrobotics18",a=1e4;document.getElementById("hashtag").innerHTML="#"+t;var r=[],l=0,o=null;function i(){return window.fetch("https://qpqp.dk/instagram_hashtag_images.php?hashtag=".concat(t)).then(function(e){return e.json()})}function s(n){var t=[],a=!0,r=!1,l=void 0;try{for(var o,i=n[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var s=o.value;if(null!==s){var u=document.createElement("img");u.src=s,u.className=(0,e.default)("image"),t.push(u)}}}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return t}function u(e){console.log("Loading instagram images into slideshow",e);var n=document.getElementById("images");n.innerHTML="";for(var t=0;t<e.length;t++){var a=e[t];null!==a&&(a.className="image",n.appendChild(a))}}function c(){function n(){if(l>=r.length-1)l=0,i().then(function(n){u(r=s(n));for(var t=0;t<r.length;t++)r[t].className=(0,e.default)("image",{shown:t===l})});else{l++;for(var n=0;n<r.length;n++)r[n].className=(0,e.default)("image",{shown:n===l})}}console.log("Starting slideshow"),window.clearInterval(o),o=window.setInterval(n,a),n()}document.getElementById("images")&&i().then(function(e){u(r=s(e)),c()});
},{"classnames":"9qb7"}],"P9xA":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/byhaveskolen.32ee2de0.jpg";
},{}],"fEyY":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/faaborg-gym.bc49afbf.png";
},{}],"5uEA":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/kaffe.20ed4b43.png";
},{}],"yeVa":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/fynbo.f9d36249.jpg";
},{}],"3NMh":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/haahrs.29b1e2e6.png";
},{}],"m/Rw":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/hk-midt.bf5206a2.jpg";
},{}],"3afQ":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/htx-odense.dd02f37a.png";
},{}],"ohSs":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/intersport.c01ccebe.png";
},{}],"5W2i":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/coolshop.39e242f1.jpg";
},{}],"W9d0":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/kims.f94d8a73.jpg";
},{}],"wAhO":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/elgiganten.0ee4902f.png";
},{}],"nfgB":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/nymarkskolen.82c6afb2.png";
},{}],"Vf0J":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/rantzausminde.8490ab60.png";
},{}],"hBKf":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/sdu.9222dc35.png";
},{}],"EmL9":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/sef.64c0f2a6.png";
},{}],"iCkY":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/sesg.43afbd39.png";
},{}],"fbup":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/svend.4a5717b8.jpg";
},{}],"dHgX":[function(require,module,exports) {
module.exports="https://dk-robotics.github.io/event-screen/orsted.416fe754.png";
},{}],"BC6O":[function(require,module,exports) {
var s=[require("../assets/logos/byhaveskolen.jpg"),require("../assets/logos/faaborg-gym.png"),require("../assets/logos/kaffe.png"),require("../assets/logos/fynbo.jpg"),require("../assets/logos/haahrs.png"),require("../assets/logos/hk-midt.jpg"),require("../assets/logos/htx-odense.png"),require("../assets/logos/intersport.png"),require("../assets/logos/coolshop.jpg"),require("../assets/logos/kims.jpg"),require("../assets/logos/elgiganten.png"),require("../assets/logos/nymarkskolen.png"),require("../assets/logos/rantzausminde.png"),require("../assets/logos/sdu.png"),require("../assets/logos/sef.png"),require("../assets/logos/sesg.png"),require("../assets/logos/svend.jpg"),require("../assets/logos/orsted.png")],e=0,o=document.getElementById("logo-shuffle");setInterval(function(){o.src=s[e],e>=s.length-1?e=0:e+=1},4e3);
},{"../assets/logos/byhaveskolen.jpg":"P9xA","../assets/logos/faaborg-gym.png":"fEyY","../assets/logos/kaffe.png":"5uEA","../assets/logos/fynbo.jpg":"yeVa","../assets/logos/haahrs.png":"3NMh","../assets/logos/hk-midt.jpg":"m/Rw","../assets/logos/htx-odense.png":"3afQ","../assets/logos/intersport.png":"ohSs","../assets/logos/coolshop.jpg":"5W2i","../assets/logos/kims.jpg":"W9d0","../assets/logos/elgiganten.png":"wAhO","../assets/logos/nymarkskolen.png":"nfgB","../assets/logos/rantzausminde.png":"Vf0J","../assets/logos/sdu.png":"hBKf","../assets/logos/sef.png":"EmL9","../assets/logos/sesg.png":"iCkY","../assets/logos/svend.jpg":"fbup","../assets/logos/orsted.png":"dHgX"}],"d6sW":[function(require,module,exports) {
"use strict";require("./instagram-fetcher"),require("./logo-shuffle"),console.log("Scripts loaded");
},{"./instagram-fetcher":"k1sS","./logo-shuffle":"BC6O"}]},{},["d6sW"], null)
//# sourceMappingURL=https://dk-robotics.github.io/event-screen/main.ba8d0c85.map