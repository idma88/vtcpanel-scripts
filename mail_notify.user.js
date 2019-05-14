// ==UserScript==
// @name         VTCPanel mail icon highlight
// @namespace    vtcpanel
// @version      1.3
// @description  "Подсвечивает" иконку почты, если есть новые сообщения
// @icon         https://vtcpanel.com/favicon.ico
// @updateURL    https://github.com/idma88/vtcpanel-scripts/raw/master/report_fix.user.js
// @author       Иванов Дмитрий (aka IDma88)
// @match        https://vtcpanel.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    var flashInterval = 1000;

    var counterEl = document.getElementsByClassName('blo_pochta')[0];
    var count = parseInt(counterEl.textContent);

    if (count) {
        var mailIcon = counterEl.parentNode.getElementsByTagName('i')[0];
        setInterval(function() {
            mailIcon.classList.toggle("fa-envelope-o");
            mailIcon.classList.toggle("fa-envelope");
        }, flashInterval);
    }

})();
