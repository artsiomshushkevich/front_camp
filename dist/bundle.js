!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,i){for(var a,s,u=0,c=[];u<t.length;u++)s=t[u],o[s]&&c.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(n&&n(t,r,i);c.length;)c.shift()()};var r={},o={1:0};t.e=function(e){function n(){s.onerror=s.onload=null,clearTimeout(u);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var i=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+""+({0:"app"}[e]||e)+".bundle.js";var u=setTimeout(n,12e4);return s.onerror=s.onload=n,a.appendChild(s),i},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);n.n(r);document.querySelector("#show-news-btn").addEventListener("click",function(){n.e(0).then(n.bind(null,5)).then(function(e){var t=e.default.modules.news,n=t.controller,r=t.model,o=t.view,i=document.querySelector("#app-container");new n(new r,new o(i)).initialize()})})},function(e,t){},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=l[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));l[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function i(e,t){var n=d(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=d(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o,c;if(t.transform&&e.css){if(!(c=t.transform(e.css)))return function(){};e.css=c}if(t.singleton){var l=v++;n=h||(h=s(t)),r=f.bind(null,n,l,!1),o=f.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=m(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var l={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),d=function(e){var t={};return function(e){if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),h=null,v=0,b=[],m=n(2);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=p()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a];(u=l[s.id]).refs--,i.push(u)}if(e){r(o(e,t),t)}for(a=0;a<i.length;a++){var u;if(0===(u=i[a]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete l[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);