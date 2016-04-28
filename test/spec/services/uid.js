'use strict';

describe('Service: uid', function () {

  // load the service's module
  beforeEach(module('cornershopAngularApp'));

  // instantiate service
  var Uid;
  beforeEach(inject(function (_Uid_) {
    Uid = _Uid_;
  }));

  it('should do something', function () {
    expect(!!Uid).toBe(true);
  });

  it('should create new numbers each time', function () {
    var lastUid = 0;
    for(var i = 0; i < 1000; i++) {
      var uid = Uid.get();
      expect(uid).toBeGreaterThan(lastUid);
      lastUid = uid;
    }
  });
});
