var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(0));
    })
    it('should return it\'s index position when searching a value', function(){
      assert.equal(2, [1,2,3].indexOf(3));
      assert.equal(0, [4,5,6].indexOf(4));
    })
  })
})
