'use strict';

describe('radar: controller', function(){
  var $scope;

  beforeEach(module('radar'));

  beforeEach(inject(function($controller, $rootScope){
    $scope = $rootScope.$new();
    $controller('radar', {
      $scope: $scope
    });
  }));

  it('should run', function(){
    expect(true).toBe(true);
  });
});
