'use strict';

describe('techniques: controller', function(){
  var $scope,
      expectedTechniques;

  beforeEach(module('techniques'));

  beforeEach(inject(function($controller, $rootScope){
    expectedTechniques = 'my techniques list';

    $scope = $rootScope.$new();

    $controller('TechniquesCtrl', {
      $scope: $scope,
      techniques: expectedTechniques
    });
  }));

  describe('Techniques', function(){
    it('should recover the techniques from the model and put them in $scope.radar', function(){
      expect($scope.techniques).toBe(expectedTechniques);
    });
  })

  describe('Resolve', function(){
    var $route,
        $httpBackend,
        $rootScope,
        model,
        expectedTechniques;

    beforeEach(inject(function(_$route_, _$httpBackend_, _$rootScope_, _model_){
      $route = _$route_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
      model = _model_;
      expectedTechniques = 'techniques';

      $httpBackend.whenGET('http://localhost:3000/techniques')
      .respond(expectedTechniques);
    }));

    it('should resolve for techniques', function() {
      var returnedTechniques;
      $route.routes['/techniques'].resolve.techniques(model)
      .then(function(techniques){
        returnedTechniques = techniques;
      });
      $httpBackend.flush();
      expect(returnedTechniques).toEqual(expectedTechniques);
    });

    it('should resolve for techniques add', function() {
      expect($route.routes['/techniques-add'].templateUrl).
      toEqual('app/modules/techniques/views/techniques-add.html');
    });
  });
});
