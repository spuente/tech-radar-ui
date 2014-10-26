'use strict';

describe('Radar: model', function(){

  beforeEach(module('radar'));

  var model, $httpBackend;

  beforeEach(inject(function(_model_, _$httpBackend_){
    model = _model_;
    $httpBackend = _$httpBackend_;
  }));

  describe('get()', function() {
    it('should return all the elements from its model', function() {
      var modelName = 'xyz';
      var expectedElements = 'elements';
      var returnedElements;
      $httpBackend.expectGET('http://localhost:3000/' + modelName)
      .respond(expectedElements);

      model.get(modelName).then(function(elements) {
        returnedElements = elements;
      });
      $httpBackend.flush();

      expect(returnedElements).toEqual(expectedElements);
    });
  });
});
