'use strict';

angular.module('rentalapp.services.rentals',['restangular'])
.service('DataService', ['$rootScope', 'Restangular', function($scope, Restangular){
	var _messageservice = Restangular.all('rentals');
	
	var service = {
		getRentals : function(){
			return _messageservice.getList();
		}
	};
	return service
	
}]);