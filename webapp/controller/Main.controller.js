sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ETM.Testapp.controller.Main", {
		onInit: function () {
			this.JsModel = new JSONModel();
			this.JsModel.setProperty("/rEdit" , false);
			var oTable = this.getView().byId("tableReqId");
			oTable.setModel(this.JsModel , "ViewModel");
			
		},
		onTabEdit: function(oEvent){
			this.JsModel.setProperty("/rEdit" , true);					// full table edit
        }
	});
});