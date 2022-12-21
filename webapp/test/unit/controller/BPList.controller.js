/*global QUnit*/

sap.ui.define([
	"z00/parceiros/controller/BPList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BPList Controller");

	QUnit.test("I should test the BPList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
