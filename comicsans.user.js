// ==UserScript==
// @name        Comic Sans
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @updateURL https://cdn.jsdelivr.net/gh/Kore-Development/qe@master/comicsans.user.js
// @downloadURL https://cdn.jsdelivr.net/gh/Kore-Development/qe@master/comicsans.user.js
// @grant       none
// @version     1.0.0
// @author      Pqtato
// @description This is dumb.
// ==/UserScript==

var elems = document.body.getElementsByTagName("*");
elems.forEach(function(elem){
  elem.style.fontFamily = "Comic Sans MS";
});
