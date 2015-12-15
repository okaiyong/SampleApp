(function() {

"use strict"
angular
	.module("App")
	.factory("Model2", model2)

function model2($rootScope, $scope, $http) {

	var cases = [];

	function _init() {
		$http.get(url)
			.success (function(data) {
				cases = data;

				$rootScope.$broadcast("event.model2Changed", model);
			}
	}

	function _create(case) {
		$http.post(url, case)
			.success(function(data) {
				cases.push(data);

				$rootScope.$broadcast("event.model2Changed", model);
			})
	}

	function _get() {
		return cases;
	}

	function _update(case) {
		cases.push(folder);

		$rootScope.$broadcast("event.model2Changed", model);
	}

	function _delete(id) {
		$http.delete()
			.success(function (data) {

				$rootScope.$broadcast("event.model2Changed", model);

			});
	}

	_init();

	return {
		init: _init,
		create: _create,
		get: _get,
		update: _update,
		delete: _delete

	}

}
	
}());
