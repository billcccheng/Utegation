sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"../Formatter/Formatter",
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.utegation.controller.Payment", {
		onInit : function () {
    		var oModel = new JSONModel("/api/payment");
        	this.getView().setModel(oModel);
		},
		
		 
		onHeaderSwitchChange: function (evt) {
			MessageToast.show("Saved");
		},
		
		onListItemPress: function (evt) {
			MessageToast.show("Pressed : " + evt.getSource().getTitle());
		}
	});

});