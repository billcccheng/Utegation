sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"../Formatter/Formatter",
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.utegation.controller.Payments", {
		onInit: function() {
			var oList = this.getView().byId("overviewList");
			oList.bindItems({
				path: "/paymentsData",
				parameters: {
					custom: {
						filter: "Title eq 'PaperLess'"
					}
				},
				template: new sap.m.ObjectListItem({
					title: "{UtilityType}",
					firstStatus: [
						new sap.m.ObjectStatus({
							text:"{Payments}",
							state:"{ path: 'Payments', formatter: 'sap.ui.utegation.Formatter.Formatter.status'}"
						})
					],
					attributes: [
						new sap.m.ObjectAttribute({
							text: "{Description}"
						})
					]
				})
			});
		},
		
		 
		onHeaderSwitchChange: function (evt) {
			MessageToast.show("Saved");
		},
		
		onListItemPress: function (evt) {
			MessageToast.show("Pressed : " + evt.getSource().getTitle());
		}
	});

});