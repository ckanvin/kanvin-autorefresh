// ==UserScript==
// @name         Auto Refresh Script
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  try to take over the world!
// @author       You
// @match        https://ng4a.gmcc.net/iga/index.html
// @match        http://eip.gmcc.net/*
// @match        http://oa.gmcc.net/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ckanvin/kanvin-autorefresh/main/autorefresh.kan.js
// @downloadURL  https://raw.githubusercontent.com/ckanvin/kanvin-autorefresh/main/autorefresh.kan.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        location.reload();
    }, 1680000); // 1680000 milliseconds = 28 minutes
})();
