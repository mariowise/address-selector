'use strict';

/**
 * @ngdoc function
 * @name cornershopAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cornershopAngularApp
 */
angular.module('cornershopAngularApp')
  .controller('MainCtrl', function ($scope, Marker) {
    $scope.camera = { 
    	center: { latitude: -33.4617337, longitude: -70.6682692 }, 
    	zoom: 12 
    };
    $scope.markers = Marker.all();
  })

  .controller('AboutCtrl', function () {

  });
