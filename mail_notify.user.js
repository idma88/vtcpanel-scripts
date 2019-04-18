// ==UserScript==
// @name         Mail icon highlight
// @namespace    vtcpanel
// @version      1.1
// @description  "Подсвечивает" иконку почты, если есть новые сообщения
// @author       Ivanov Dmitrii aka IDma88
// @match        https://vtcpanel.com/*
// @grant        none
// ==/UserScript==

var counterEl = document.getElementsByClassName('blo_pochta')[0];
var count = parseInt(counterEl.textContent);

if (count) {
    var mailIcon = counterEl.parentNode.getElementsByTagName('i')[0];
    setInterval(function() {
        mailIcon.classList.toggle("fa-envelope-o");
        mailIcon.classList.toggle("fa-envelope");
    }, 1000);
}
