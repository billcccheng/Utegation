sap.ui.define([
	'sap/m/MessageToast',
	'sap/ui/core/mvc/Controller',
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
],function(MessageToast, Controller, JSONModel, ResourceModel) {
	"use strict";
	var CController = Controller.extend("sap.ui.utegation.controller.App", {
		
		// onInit : function () {
  //       // set data model on view
  //      	var oData = {
  //          	recipient : {
  //          		name : "Bill"
  //          	}
  //      	};
	 //       var oModel = new JSONModel(oData);
	 //       this.getView().setModel(oModel);
		// },
		
		
		handleNav: function(evt) {
			var navCon = this.getView().byId("navCon");
			var target = evt.getSource().data("target");
			if (target) {
				var animation = "slide";
				navCon.to(this.getView().byId(target), animation);
			} else {
				navCon.back();
			}
		},
		_getDialog : function () {
	        if (!this._oDialog) {
	            this._oDialog = sap.ui.xmlfragment("sap.ui.utegation.view.Setting", this);
	            this.getView().addDependent(this._oDialog);
			}
	         return this._oDialog;
	    },
	    onOpenDialog : function () {
	    	this._getDialog().open();
	    },
	    onCloseDialog : function () {
	    	this._getDialog().close();
		},
		
		
		
		onOpenGasPayment : function () {
			if (!this._oDialog) {
	            this._oDialog = sap.ui.xmlfragment("sap.ui.utegation.view.GasPayment", this);
	            this.getView().addDependent(this._oDialog);
			}
	         return this._oDialog;
		},
		onOpenGasDialog : function () {
	    	this.onOpenGasPayment().open();
	    },
	    onCloseGasDialog : function () {
	    	this.onOpenGasPayment().close();
		},
		
	});


	return CController;

});


		// onInit : function () {
  //       // set data model on view
  //      	var oData = {
  //          	recipient : {
  //          		name : "Bill"
  //          	}
  //      	};
	 //       var oModel = new JSONModel(oData);
	 //       this.getView().setModel(oModel);
	    //    // set i18n model on view
	    //    // var i18nModel = new ResourceModel({
     //    //   	bundleName: "utegation.i18n.i18n"
     //   	// });
     //   	// this.getView().setModel(i18nModel, "i18n");
	    //},