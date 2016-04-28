'use strict';

/**
 * @ngdoc service
 * @name cornershopAngularApp.marker
 * @description
 * # marker
 * Factory in the cornershopAngularApp.
 */
angular.module('cornershopAngularApp')
  .factory('Marker', function (Uid) {

    var inMemoryMarkers = [];

    function Marker(args) {
      if(typeof args !== 'object') {
        args = {};
      }
      this.id = Uid.get();
      this.name = (args.name) ? String(args.name) : '';
      this.lat = (args.lat) ? parseFloat(args.lat) : 0;
      this.lng = (args.lng) ? parseFloat(args.lng) : 0;
      this.address = (args.address) ? String(args.address) : '';
    }

    Marker.prototype.save = function () {
      for(var i in inMemoryMarkers) {
        if(inMemoryMarkers[i].id === this.id) {
          inMemoryMarkers[i] = this;
          persist();
          return true;
        }
      }
      inMemoryMarkers.push(this);
      persist();
      return true;
    };

    Marker.prototype.destroy = function () {
      for(var i in inMemoryMarkers) {
        if(inMemoryMarkers[i].id === this.id) {
          inMemoryMarkers.splice(i, 1);
          persist();
          return true;
        }
      }
      return false;
    };

    Marker.find = function(id) {
      id = parseInt(id);
      for(var i in inMemoryMarkers) {
        if(inMemoryMarkers[i].id === id) {
          return inMemoryMarkers[i];
        }
      }
      return false;
    };

    Marker.all = function () {
      return inMemoryMarkers;
    };

    function persist() {
      window.localStorage.setItem('inBrowserMarkers', JSON.stringify(inMemoryMarkers));
    }

    setTimeout(function () {
      var collection = window.localStorage.getItem('inBrowserMarkers');
      collection = JSON.parse(collection) || [{"id":1461816385468000,"name":"Usach","lat":-33.4509046,"lng":-70.67974950000001,"address":"Av Libertador Bernardo O'Higgins 3363, Santiago, Estación Central, Región Metropolitana, Chile","$$hashKey":"object:10"},{"id":1461816385468001,"name":"Maipú","lat":-33.5106925,"lng":-70.76055530000002,"address":"5 de Abril 260, Maipú, Maipú, Región Metropolitana, Chile","$$hashKey":"object:11"},{"id":1461816385468002,"name":"La Florida","lat":-33.5199543,"lng":-70.60023869999998,"address":"Vicuña Mackenna 7210, La Florida, La Florida, Región Metropolitana, Chile","$$hashKey":"object:12"}];
      for(var i in collection) {
        collection[i] = new Marker(collection[i]);
      }
      inMemoryMarkers = collection;
    }, 0);

    return Marker;
  });
