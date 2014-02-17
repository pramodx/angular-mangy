'use strict';

angular.module('rentalapp.controllers.rentals', ['restangular'])
.controller('rentalController', ['$scope', 'DataService', function($scope, DataService){
	//console.log(Data);
	DataService.getRentals().then(function(data){
		$scope.movielist = data;
	});
}])

.controller('createController', ['$scope', 'DataService', function($scope, DataService){
	$scope.save = function(){
		if (!(this.movie.id)){
			this.movie.id =  parseInt(999999999*Math.random());
		}
		DataService.addRentals(this.movie).then(function(){
			location.href='/';
		})
	}
}])
.controller('detailController', ['$scope', 'DataService', 'Restangular', 'movie', function($scope, DataService, Restangular, movie){
	var originalMovie = movie;
	$scope.movie = Restangular.copy(originalMovie);
}])
.controller('editController', ['$scope', 'DataService', 'Restangular', 'movie', function($scope, DataService, Restangular, movie){
	var originalMovie = movie;
	$scope.movie = Restangular.copy(originalMovie);
	$scope.save = function(){
		DataService.updateRental(this.movie).then(function(){
			location.href='/';
		})
	}
}])
.controller('deleteController', ['$scope', 'DataService', 'movie', function($scope, DataService, movie){
	if (confirm('Are you sure you want to delete this record?')){
		var original = movie;
		DataService.deleteRental(original).then(function(){
			location.href='/';
		})
	} else {
		location.href='/';
	}
}])
