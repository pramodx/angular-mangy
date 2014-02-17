'use strict';

angular.module('rentalapp.services.rentals',['restangular'])
.service('DataService', ['$rootScope', 'Restangular', function($scope, Restangular){
	var _messageservice = Restangular.all('rentals');
	
	var service = {
		getRentals : function(){
			return _messageservice.getList();
		},

		addRentals: function(data){
			var newData = data;
			return _messageservice.post(newData);
			location.href="/";
		},

		updateRental: function(data){
			return data.put();
		},

		deleteRental: function(data){
			return data.remove();
		}
	};
	return service;
	
}]);