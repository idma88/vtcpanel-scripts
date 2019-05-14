// ==UserScript==
// @name         VTCPanel report form fix
// @namespace    vtcpanel
// @version      1.1
// @description  Исправляет тип полей "Пробег", "Заработано денег", "Опыт на данный момент"
// @icon         https://vtcpanel.com/favicon.ico
// @author       Иванов Дмитрий (aka IDma88)
// @match        https://vtcpanel.com/*/report
// @match        https://vtcpanel.com/contracts
// @match        https://vtcpanel.com/addrept.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var updateInterval = 1000;

    var reportFormScaner = setInterval(function() {
        var inputCtrl = document.querySelectorAll('.form-control[type="number"]');

        for (var i = 0; i < inputCtrl.length; i++)
        {
            inputCtrl[i].type = "";
        }

    }, updateInterval);
})();
