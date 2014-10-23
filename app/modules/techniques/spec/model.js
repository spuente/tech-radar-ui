'use strict';

describe('Techniques: model', function(){

  beforeEach(module('techniques'));

  var techniquesModel;
  var httpBackend;
  beforeEach(inject(function(_techniquesModel_, $httpBackend){
    techniquesModel = _techniquesModel_;
    httpBackend = $httpBackend;
  }));

  describe('get()', function(){
    it('should return all the techniques', function(){

      var expectedTechniques = 'techniques';
      var returnedTechniques;
      httpBackend.expectGET('http://localhost:3000/techniques')
      .respond(expectedTechniques);

      techniquesModel.get().then(function(techniques){
        returnedTechniques = techniques;
      });

      httpBackend.flush();
      expect(returnedTechniques).toEqual(expectedTechniques);
    });
  });
});
