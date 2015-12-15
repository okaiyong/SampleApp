(function() {

"use strict"
angular
	.module("App")
	.controller("View1Controller", controller)

function controller($scope, model1) {

	$scope.folders = model1.get();

	$scope.$on("event.modelChanged", function(e, args) {
		$scope.folders = args;
	});

}
	
}());
