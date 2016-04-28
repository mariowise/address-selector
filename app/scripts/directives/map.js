'use strict';

/**
 * @ngdoc directive
 * @name cornershopAngularApp.directive:map
 * @description
 * # map
 */
angular.module('cornershopAngularApp')
  .directive('map', function (Marker) {
    return {
      // template: '<div id="map" ng-transclude></div>',
      // transclude: true,
      templateUrl: 'views/map.html',
      restrict: 'E',
      scope: { camera: '=', markers: '=' },
      controller: function ($scope, $http) {
      	var formatedAddress;
      	$scope.targetMark = false;

      	$scope.search = function () {
      		var query = window.encodeURIComponent( $scope.searchAddress );
      		$http({
      			method: 'GET',
      			url: 'http://maps.google.com/maps/api/geocode/json?address='+query+'&sensor=false'
      		}).then(function (res) {
      			if(typeof res.data === 'object' && res.data.results && res.data.results.length > 0) {
      				var result = res.data.results[0];
      				$scope.camera.center.latitude = result.geometry.location.lat;	
      				$scope.camera.center.longitude = result.geometry.location.lng;
      				$scope.camera.zoom = 17;	
      				$scope.targetMark = true;
      				formatedAddress = result['formatted_address'];
      			}
      		});
      	};

      	$scope.close = function () {
      		$scope.targetMark = false;
      		$scope.searchAddress = '';
      	};

      	$scope.build = function () {
      		$scope.newMarker = new Marker({
      			lat: $scope.camera.center.latitude,
      			lng: $scope.camera.center.longitude,
      			address: formatedAddress
      		});
      	};

      	$scope.create = function () {
          console.log('Creating marker');
          console.log($scope.newMarker);
          if( $scope.newMarker.save() ) {
      			$('#newMarkerModal').modal('hide');
            $scope.targetMark = false;
            $scope.searchAddress = '';
      		}
      	};
      }
    };
  });
