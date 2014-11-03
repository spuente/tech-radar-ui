'use strict';

describe('languages: controller', function(){
  var $scope,
      expectedLanguages;

  beforeEach(module('languages'));

  beforeEach(inject(function($controller, $rootScope){
    expectedLanguages = 'my languages list';

    $scope = $rootScope.$new();

    $controller('LanguagesCtrl', {
      $scope: $scope,
      languages: expectedLanguages
    });
  }));

  describe('Languages', function(){
    it('should recover the languages from the model and put them in $scope.radar', function(){
      expect($scope.languages).toBe(expectedLanguages);
    });
  })

  describe('Resolve', function(){
    var $route,
        $httpBackend,
        $rootScope,
        model,
        expectedLanguages;

    beforeEach(inject(function(_$route_, _$httpBackend_, _$rootScope_, _model_){
      $route = _$route_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
      model = _model_;
      expectedLanguages = 'languages';

      $httpBackend.whenGET('http://localhost:3000/languages')
      .respond(expectedLanguages);
    }));

    it('should resolve for languages', function() {
      var returnedLanguages;
      $route.routes['/languages'].resolve.languages(model)
      .then(function(languages){
        returnedLanguages = languages;
      });
      $httpBackend.flush();
      expect(returnedLanguages).toEqual(expectedLanguages);
    });

    it('should resolve for languages add', function() {
      expect($route.routes['/languages/new'].templateUrl).
      toEqual('app/modules/languages/views/languages-form.html');
    });
  });
});
