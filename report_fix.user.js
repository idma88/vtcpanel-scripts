// ==UserScript==
// @name         VTCPanel report page fix
// @namespace    vtcpanel
// @version      1.1
// @description  Исправляет глюк с переносом на странице Мои доклады в Firefox
// @icon         https://vtcpanel.com/favicon.ico
// @updateURL    https://github.com/idma88/vtcpanel-scripts/raw/master/report_fix.user.js
// @author       Иванов Дмитрий (aka IDma88)
// @match        https://vtcpanel.com/*/report
// @match        https://vtcpanel.com/contracts
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var updateInterval = 1000;

    var reportScaner = setInterval(function() {
        var spansObj = document.querySelectorAll('.span-reports-org div div span:nth-child(2)[style*="display: inline-table"]');
        for (var i = 0; i < spansObj.length; i++)
        {
            spansObj[i].style.display = "inline";
        }

        spansObj = document.querySelectorAll('.block_work_kontrakt div div span[style*="display: inline-table"]');
        for (var i = 0; i < spansObj.length; i++)
        {
            spansObj[i].style.display = "inline";
        }

    }, updateInterval);
})();
