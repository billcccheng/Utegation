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
		 
		onHeaderSwitchChange: function (evt) {
			MessageToast.show("Saved");
		},
		
		onListItemPress: function (evt) {
			MessageToast.show("Pressed : " + evt.getSource().getTitle());
		}
	});

});


