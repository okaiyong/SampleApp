(function() {

"use strict"
angular
	.module("App")
	.controller("View2Controller", controller)

function controller($scope, model1, model2) {
	//data bind to models, so any update in models will reflect change in the view that this controller is binded to
}
	
}());
