'use strict';

describe('radar: controller', function(){
  var $scope,
      expectedTechniques,
      expectedLanguages;

  beforeEach(module('radar'));

  beforeEach(inject(function($controller, $rootScope){
    expectedTechniques = 'my techniques list';
    expectedLanguages = 'my languages list';

    $scope = $rootScope.$new();

    $controller('RadarCtrl', {
      $scope: $scope,
      techniques: expectedTechniques,
      languages: expectedLanguages
    });
  }));

  describe('Radar', function(){
    it('should recover the techniques from the model and put them in $scope.radar', function(){
      expect($scope.radar['techniques']).toBe(expectedTechniques);
    });

    it('should recover the languages from the model and put them in $scope.radar', function(){
      expect($scope.radar['languages']).toBe(expectedLanguages);
    });
  })

  describe('Resolve', function(){
    var $route,
        $httpBackend,
        $rootScope,
        model,
        expectedTechniques,
        expectedLanguages;

    beforeEach(inject(function(_$route_, _$httpBackend_, _$rootScope_, _model_){
      $route = _$route_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
      model = _model_;
      expectedTechniques = 'techniques';
      expectedLanguages = 'languages';

      $httpBackend.whenGET('app/modules/radar/views/radar.html')
      .respond('');
      $httpBackend.whenGET('http://localhost:3000/techniques')
      .respond(expectedTechniques);
      $httpBackend.whenGET('http://localhost:3000/languages')
      .respond(expectedLanguages);
    }));

    it('should resolve for techniques', function(){
      var returnedTechniques;
      $route.routes['/'].resolve.techniques(model)
      .then(function(techniques){
        returnedTechniques = techniques;
      });
      $httpBackend.flush();
      expect(returnedTechniques).toEqual(expectedTechniques);
    });

    it('should resolve for languages', function() {
      var returnedLanguages;
      $route.routes['/'].resolve.languages(model)
      .then(function(languages){
        returnedLanguages = languages;
      });
      $httpBackend.flush();
      expect(returnedLanguages).toEqual(expectedLanguages);
    });
  });
});
