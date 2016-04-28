'use strict';

/**
 * @ngdoc service
 * @name cornershopAngularApp.uid
 * @description
 * # uid
 * Service in the cornershopAngularApp.
 */
angular.module('cornershopAngularApp')
  .service('Uid', function () {
    this.lastId = 0;
    this.get = function () {
    	var newUid = Date.now() * 1000;
    	if(newUid > this.lastId) {
    		this.lastId = newUid;
    		return this.lastId;
    	} else {
    		return ++this.lastId;
    	}
    };
  });
