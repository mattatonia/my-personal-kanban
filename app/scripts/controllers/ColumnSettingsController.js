'use strict';

var ColumnSettingsController = function ($scope) {
	$scope.model = {column: {}, kanban: {}, columnName: '', color: '', limit: ''};

	$scope.$on('OpenColumnSettings', function(e, kanban, column){
		$scope.showColumnSettings = true;
		$scope.model = {column: column, kanban: kanban, columnName: column.name};
		if (column.settings != undefined && column.settings.color != undefined){
			$scope.model.color = column.settings.color;
		}
		if (column.settings && column.settings.limit){
			$scope.model.limit = column.settings.limit;
		}
	});
	

	$scope.update = function(){
		var col = $scope.model.column;
		col.name = $scope.model.columnName;
		if (col.settings == undefined){
			col.settings = {};
		}
		col.settings.color = $scope.model.color;
		if ($scope.model.limit != ''){
			col.settings.limit = $scope.model.limit;
		}
		$scope.showColumnSettings = false;
		return true;
	};
};

angular.module('mpk').controller('ColumnSettingsController', ColumnSettingsController);