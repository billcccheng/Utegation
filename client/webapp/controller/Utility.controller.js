sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"../Formatter/Formatter",
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.utegation.controller.Utility", {

		onInit : function () {
    		var oModel = new JSONModel("/api/payment");
        	// console.log(oModel);
        	// var oList = this.getView().byId("overviewList");
        	this.getView().setModel(oModel);
		},
	});

});