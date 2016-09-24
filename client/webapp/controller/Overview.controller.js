sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"../Formatter/Formatter",
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.utegation.controller.Overview", {

		onInit : function () {
    		var oModel = new JSONModel("/api/overview");
        	// console.log(oModel);
        	// var oList = this.getView().byId("overviewList");
        	this.getView().setModel(oModel);
		},
		
		// onGasPaperLessSwitchChange: function (evt) {
		// 	this.byId("Gas").setVisible(evt.getSource().getState());
		// },
		
		// onWaterPaperLessSwitchChange: function (evt) {
		// 	this.byId("Water").setVisible(evt.getSource().getState());
		// },
		
		// onElectricityPaperLessSwitchChange: function (evt) {
		// 	this.byId("Electricity").setVisible(evt.getSource().getState());
		// },
		
		 
		// onPreferenceSwitchChange: function (evt) {
		// 	this.byId("listItemPartition")
		// 	MessageToast.show("Saved");
		// },
		
		// onListItemPress: function (evt) {
		// 	MessageToast.show("Pressed : " + evt.getSource().getTitle());
		// }
	});

});


		// onInit : function () {
  //  		var oModel = new JSONModel("https://api.myjson.com/bins/1xjvo");
  //      	console.log(oModel);
  //      	// var oList = this.getView().byId("overviewList");
  //      	this.getView().setModel(oModel);
		// },
		// onPressFilter: function() {
		// 	var oList = this.getView().byId("overviewList");
		// 	var oModel = new JSONModel("https://api.myjson.com/bins/seec");
  //      	oList.setModel(oModel);
		// },



	// onInit : function () {
 //   		var data = {"test": [{
	// 			"UtilityID": 1,
	// 			"Title": "PaperLess",
	// 			"OnorOff" : true,
	// 			"Description": "PaperLess options will...."
	// 		},{
	// 			"UtilityID": 2,
	// 			"Title": "Email",
	// 			"OnorOff" : false,
	// 			"Description": "Email..."
	// 		},{
	// 			"UtilityID": 3,
	// 			"Title": "Phone",
	// 			"OnorOff" : true,
	// 			"Description": "Phone..."
	// 		},{
	// 			"UtilityID": 4,
	// 			"Title": "Text",
	// 			"OnorOff" : true,
	// 			"Description": "Text..."
	// 		}]};
 //   		var oModel = new JSONModel();
 //   		oModel.setData(data);
 //       	console.log(oModel);
 //       	this.getView().setModel(oModel);
	// 	},
	
	
	
	// onPressFilter: function() {
		// 	var oList = this.getView().byId("overviewList");
		// 	var oModel = new JSONModel("https://api.myjson.com/bins/seec");
  //      	oList.setModel(oModel);
			// oList.bindItems({
			// 	path: "/paymentsData",
			// 	parameters: {
			// 		custom: {
			// 			filter: "Title eq 'PaperLess'"
			// 		}
			// 	},
			// 	template: new sap.m.ObjectListItem({
			// 		title: "{UtilityType}",
			// 		firstStatus: [
			// 			new sap.m.ObjectStatus({
			// 				text:"{Payments}",
			// 				state:"{ path: 'Payments', formatter: 'sap.ui.utegation.Formatter.Formatter.status'}"
			// 			})
			// 		],
			// 		attributes: [
			// 			new sap.m.ObjectAttribute({
			// 				text: "{Description}"
			// 			})
			// 		]
			// 	})
			// });
		// },