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
    var validTechnique;

    beforeEach(function() {
      $scope.techniques.name = 'Valid technique';
      $scope.techniques.description = 'Valid description';
      $scope.techniques.status = 'Valid status';

      validTechnique = {
        "technique": {
          "name":"Valid technique",
          "description": "Valid description",
          "status": "Valid status"
        }
      }
    });

    it('should clean fields in form when a technique with valid data is saved', function() {

      $httpBackend.expectPOST('http://localhost:3000/techniques', validTechnique)
      .respond(201);

      $scope.save();

      $httpBackend.flush();

      expect($scope.techniques).toEqual({});
    });

    it('should add a success message when a user is created with valid data', function() {
      $httpBackend.expectPOST('http://localhost:3000/techniques', validTechnique)
      .respond(201);

      spyOn($scope, 'addAlert');
      $scope.save();
      $httpBackend.flush();

      expect($scope.addAlert).toHaveBeenCalledWith('Technique created successfully!', 'success');
    });

    it('should add a danger warning when a user is created with invalid data', function() {
      $scope.techniques.name = 'Invalid technique';
      $scope.techniques.description = 'Invalid description';
      $scope.techniques.status = 'Invalid status';

      var invalidTechnique = {
        "technique": {
          "name":"Invalid technique",
          "description": "Invalid description",
          "status": "Invalid status"
        }
      };
      $httpBackend
      .expectPOST('http://localhost:3000/techniques', invalidTechnique)
      .respond(400);

      spyOn($scope, 'addAlert');
      $scope.save();
      $httpBackend.flush();

      expect($scope.addAlert).toHaveBeenCalledWith('Some fields contain errors.', 'danger');
    });
  });

  describe('Alert', function() {
    it('should allow adding a message when calling addAlert', function() {
      $scope.addAlert('content', 'type');

      expect($scope.alerts.length >= 1).toBeTruthy();
      expect($scope.alerts[0].type).toEqual('type');
      expect($scope.alerts[0].content).toBeDefined();
    });

    it('should allow removing message, when calling removeAlert', function() {
      $scope.addAlert('content', 'type');
      $scope.removeAlert(0);

      expect($scope.alerts.length).toEqual(0);
    });
  });
});
