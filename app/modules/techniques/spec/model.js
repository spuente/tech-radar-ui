'use strict';

describe('Techniques: model', function(){

  beforeEach(module('techniques'));

  var techniquesModel;
  beforeEach(inject(function(_techniquesModel_){
    techniquesModel = _techniquesModel_;
  }));

  describe('get()', function(){
    it('should return all the techniques', function(){
      var techniques = techniquesModel.get();
      var expectedTechniques = [
        {
          name: 'Comply with OWASP Top 10',
          status: 'Adopt'
        },
        {
          name: 'TDD',
          status: 'Adopt'
        },
        {
          name: 'Waterfall model',
          status: 'Hold'
        }
      ];
      expect(techniques).toEqual(expectedTechniques);
    });
  });
});
