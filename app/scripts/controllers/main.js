'use strict';

angular.module('rentalApp')
  .controller('rentalController', function($scope, $http){
  	$http.get('https://api.mongolab.com/api/1/databases/pramodx/collections/rentals/?apiKey=SUNCexY8jmspBkpwUsua0ymB_vVipNNI').
  		success(function(data){
  			$scope.movielist = data;
  		})

  })
