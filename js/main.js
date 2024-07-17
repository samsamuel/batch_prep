/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                
        $("#btn_XML").click(function () {
            csInterface.evalScript('exportXML()');
        });

        $("#btn_OMF").click(function () {
            csInterface.evalScript('exportOMF()');
        });

        $("#btn_AAF").click(function () {
            csInterface.evalScript('exportAAF()');
        });

        $("#btn_ALL").click(function () {
            csInterface.evalScript('exportAAF()');
            csInterface.evalScript('exportOMF()');
            csInterface.evalScript('exportXML()');
        });
    }
        
    init();

}());
    
