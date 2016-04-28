'use strict';

/**
 * @ngdoc directive
 * @name cornershopAngularApp.directive:rightSidebar
 * @description
 * # rightSidebar
 */
angular.module('cornershopAngularApp')
  .directive('rightSidebar', function () {
    return {
      templateUrl: 'views/rightsidebar.html',
      restrict: 'E',
      controller: function ($scope, Marker) {
      	$scope.markers = Marker.all();

      	$scope.destroy = function (marker) {
      		if( marker.destroy() ) {
      			
      		}
      	};
      }
    };
  });
