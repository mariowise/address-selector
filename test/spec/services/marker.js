'use strict';

describe('Service: marker', function () {

  // load the service's module
  beforeEach(module('cornershopAngularApp'));

  // instantiate service
  var Marker;
  beforeEach(inject(function (_Marker_) {
    Marker = _Marker_;
  }));

  it('should be able to create objects', function () {
    var instance = new Marker();
    expect(instance.id).toBeDefined();
    expect(instance.name).toBeDefined();
    expect(instance.lat).toBeDefined();
    expect(instance.lng).toBeDefined();
    expect(instance.address).toBeDefined();
  });

  it('should be able to fetch objects', function () {
    var instance = new Marker();
    instance.save();
    expect(!!Marker.find(instance.id)).toBe(true);
  });

  it('should be able to update objects', function () {
    var instance = new Marker({ name: 'Some name' });
    instance.save();
    expect(Marker.find(instance.id).name).toBe(instance.name);
    instance.name = 'Other name';
    instance.save();
    expect(Marker.find(instance.id).name).toBe(instance.name);
  });

  it('should be able to remove objects', function () {
    var instance = new Marker();
    instance.save();
    var id = instance.id;
    instance.destroy();
    expect(!!Marker.find(id)).toBe(false);
  });
});
