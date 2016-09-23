sap.ui.define(function() {
	"use strict";

	var Formatter = {

		status :  function (sStatus) {
				if (sStatus === 0) {
					return "Success";
				} else {
					return "Warning";
				}
		}
	};

	return Formatter;

}, /* bExport= */ true);
