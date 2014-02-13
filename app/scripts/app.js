'use strict';

angular.module('rentalApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'rentalController'
      }).
      when('/create',{
        templateUrl: 'views/create.html',
        controller: 'createController'
      }).
      when('/:rentalId/edit',{
        templateUrl: 'views/edit.html',
        controller: 'editController'
      }).
      when('/delete',{
        controller: 'deleteController'
      }).
      otherwise({
        redirectTo: '/'
      });
  });
