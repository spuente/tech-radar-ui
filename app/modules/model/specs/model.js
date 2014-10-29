'use strict';

describe('Model', function(){

  beforeEach(module('model'));

  var model,
      modelName,
      $httpBackend;

  beforeEach(inject(function(_model_, _$httpBackend_){
    model = _model_;
    modelName = chance.string();
    $httpBackend = _$httpBackend_;
  }));

  describe('get()', function() {
    it('should return all the elements from its model', function() {
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

  describe('post()', function() {
    it('should save a new element', function() {
      var responseCode;
      var element = '{' + chance.string() + '}';
      $httpBackend.expectPOST('http://localhost:3000/' + modelName, element)
        .respond(201, '');
      model.post(modelName, element).then(function(response){
        responseCode = response.status;
      });
      $httpBackend.flush();

      expect(responseCode).toEqual(201);
    });
  });
});
