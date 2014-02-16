'use strict';

angular.module('rentalapp.controllers.rentals', ['restangular'])
.controller('rentalController', ['$scope', 'DataService', function($scope, DataService){
	//console.log(Data);
	DataService.getRentals().then(function(data){
		$scope.movielist = data;
	});
	//console.log($scope);
}]);
