'use strict';

describe('techniques form: controller', function(){
  var $scope,
      $httpBackend;

  beforeEach(module('techniques'));

  beforeEach(inject(function($controller, $rootScope, _$httpBackend_){
    $httpBackend = _$httpBackend_;
    $scope = $rootScope.$new();

    $controller('TechniquesFormCtrl', {
      $scope: $scope,
      techniques: {}
    });
  }));

  describe('Techniques', function(){
    it('should clean fields in form when a technique with valid data is saved', function() {

      $scope.techniques.name = 'Valid technique';
      $scope.techniques.description = 'Valid description';
      $scope.techniques.status = 'Valid status';

      var validTechnique = {
        "technique": {
          "name":"Valid technique",
          "description": "Valid description",
          "status": "Valid status"
        }
      }

      $httpBackend.expectPOST('http://localhost:3000/techniques', validTechnique)
      .respond(201);

      $scope.save();

      $httpBackend.flush();

      expect($scope.techniques).toEqual({});
    });
  })
});
