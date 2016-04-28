'use strict';

/**
 * @ngdoc overview
 * @name cornershopAngularApp
 * @description
 * # cornershopAngularApp
 *
 * Main module of the application.
 */
angular
  .module('cornershopAngularApp', [
  	'ui.router',
  	'uiGmapgoogle-maps'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');

  	$stateProvider
  	.state('map', {
  		url: '/',
  		templateUrl: 'views/main.html',
  		controller: 'MainCtrl'
  	})

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });
  });
