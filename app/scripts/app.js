'use strict';

angular.module('rentalapp.controllers', ['rentalapp.controllers.rentals']);
angular.module('rentalapp.services', ['rentalapp.services.rentals']);

angular.module('rentalApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'rentalapp.controllers',
  'rentalapp.services'
  ]).constant('apiKey', 'SUNCexY8jmspBkpwUsua0ymB_vVipNNI')
.config(function(RestangularProvider, apiKey){
  RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/pramodx/collections');
  RestangularProvider.setDefaultRequestParams({
    apiKey: apiKey
  });
  RestangularProvider.setRestangularFields({
    id: '_id.$oid'
  });
  RestangularProvider.setRequestInterceptor(
    function(elem, operation, what) {

      if (operation === 'put') {
        elem._id = undefined;
        return elem;
      }
      return elem;
    })
})
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
  otherwise({
    redirectTo: '/'
  });
});
