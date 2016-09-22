sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";

	return {
		/**
		 * Initializes the mock server.
		 * You can configure the delay with the URL parameter "serverDelay".
		 * The local mock data in this folder is returned instead of the real data for testing.
		 * @public
		 */
		init: function() {
			// create
			var oMockServer = new MockServer({
				rootUri: "/"
			});
			
			var oUriParameters = jQuery.sap.getUriParameters();
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});

			// simulate against the metadata and mock data
			oMockServer.simulate("../localService/metadata.xml", {
				sMockdataBaseUrl: "../localService/mockdata",
				bGenerateMissingMockData: true
			});
			
			
			var oMockServerPayment = new MockServer({
				rootUri: "/"
			});
			
			// Mock Server for All Payments (Gas, Water, Electricity)
			oMockServerPayment.simulate("../localService/payments.xml", {
				sMockdataBaseUrl: "../localService/mockdata",
				bGenerateMissingMockData: true
			});
			
			// MockServer ignores parameter
			// var fnCustom = function(oEvent) {
			// 	var oXhr = oEvent.getParameter("oXhr");
			// 	if (oXhr && oXhr.url.indexOf("filter") > -1) {
			// 		oEvent.getParameter("oFilteredData").results.splice(1, 100);
			// 	}
			// };
			
			// oMockServerPayment.attachAfter("GET", fnCustom, "paymentsData");
			
			
			// start
			oMockServer.start();
			oMockServerPayment.start();
			jQuery.sap.log.info("Running the app with mock data");
		}

	};

});