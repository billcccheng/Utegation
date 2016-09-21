sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"../Formatter/Formatter",
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.utegation.controller.Preference", {
		/**
		 * Responds to the button press event.
		 * Upon pressing, we bind the items aggregation of the list to the "Meetups" entityset.
		 * We pass a custom URL parameter "first=3" (assuming our OData BE knows how to process it).
		 */
		 
		
		onPressAction: function() {
			var oList = this.getView().byId("list");
			oList.bindItems({
				path: "/data", //this reads mockdata/data.json
				parameters: {
					custom: {
						first: "3"
					}
				},
				template: new sap.m.ObjectListItem({
					title: "{Title}",
					number: {
						path: 'EventDate',
						type: 'sap.ui.model.type.DateTime',
						formatOptions: {
							style: 'medium'
						}
					},
					attributes: [
						new sap.m.ObjectAttribute({
							text: "{Description}",
						}),
						new sap.m.ObjectAttribute({
							text: "{ContactPhone}",
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