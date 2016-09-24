sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.utegation.controller.Preference", {

		onInit : function () {
    		var oModel = new JSONModel("/api/preference");
        	// console.log(oModel);
        	// var oList = this.getView().byId("overviewList");
        	this.getView().setModel(oModel);
		},
		
		onGasPaperLessSwitchChange: function (evt) {
			this.byId("Gas").setVisible(evt.getSource().getState());
		},
		
		onWaterPaperLessSwitchChange: function (evt) {
			this.byId("Water").setVisible(evt.getSource().getState());
		},
		
		onElectricityPaperLessSwitchChange: function (evt) {
			this.byId("Electricity").setVisible(evt.getSource().getState());
		},
		
		 
		onPreferenceSwitchChange: function (evt) {
			this.byId("listItemPartition")
			MessageToast.show("Saved");
		},
		
		onListItemPress: function (evt) {
			MessageToast.show("Pressed : " + evt.getSource().getTitle());
		}
	});

});