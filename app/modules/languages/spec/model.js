'use strict';

describe('Languages: model', function(){

  beforeEach(module('languages'));

  var languagesModel;
  var httpBackend;
  beforeEach(inject(function(_languagesModel_, $httpBackend){
    languagesModel = _languagesModel_;
    httpBackend = $httpBackend;
  }));

  describe('get()', function(){
    it('should return all the languages', function(){

      var expectedLanguages = 'languages';
      var returnedLanguages;
      httpBackend.expectGET('http://localhost:3000/languages')
      .respond(expectedLanguages);

      languagesModel.get().then(function(languages){
        returnedLanguages = languages;
      });

      httpBackend.flush();
      expect(returnedLanguages).toEqual(expectedLanguages);
    });
  });
});
