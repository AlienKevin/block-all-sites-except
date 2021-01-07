// ==UserScript==
// @name         Block All Sites Except
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block all sites. You can edit the whitelist below under exclude.
// @match        *://*/*
// @exclude      *google.com*
// @run-at       document-start
// ==/UserScript==
(function () {
    window.stop();
    console.log("Blocked");
})();