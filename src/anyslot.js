'use strict';
/**
 * @module slot
 * @alias slot
 * @example
 * ```js
 * var slot = require('anyslot');
 * ```
 *
 */
 module.exports = (function () {
 	let ret = {
      go: go
 	}

 	let self = this;
 	return ret;

 function go(){
   var res = "";
   var len = arguments.length;
   for (var i = 0; i < 3; i++) {
     var p = getRandomInt(0,len-1);
     res+=arguments[p] + " ";
   }
   return res;
 }

 function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 }());
