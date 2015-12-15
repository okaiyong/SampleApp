(function() {

"use strict"
angular
	.module("App")
	.factory("Model1", model1)

function model1($rootScope, $scope, $http) {

	var folders = [];

	function _init() {
		$http.get(url)
			.success (function(data) {
				folders = data;

				$rootScope.$broadcast("event.modelChanged", model);
			}
	}

	function _create(folder) {
		$http.post(url, folder)
			.success(function(data) {
				folders.push(data);

				$rootScope.$broadcast("event.modelChanged", model);
			})
	}

	function _get() {
		return folders;
	}

	function _update(folder) {
		folders.push(folder);

		$rootScope.$broadcast("event.modelChanged", model);
	}

	function _delete(id) {
		$http.delete()
			.success(function (data) {

				$rootScope.$broadcast("event.modelChanged", model);

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
