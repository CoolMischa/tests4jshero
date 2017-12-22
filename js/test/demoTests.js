
describe("Testdemos", function() {
  describe("add( lhs, rhs )", function() {

    function makeTest(x) {
      var random = 5-(Math.floor(Math.random()*10));
      let expected = x + random;
      it(`${random} added to ${x} is ${expected}`, function() {
        assert.equal(add(x, random), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("sum_array( [a, b, c, d, ...] )", function() {
    it(`sum_array called with [1, 2, 3, 4] is 10`, function () {
      assert.equal(sum_array([1, 2, 3, 4]), 10);
    });

    it(`sum_array called with [1, 2, 3, 5] is not 10 `, function () {
      assert.equal(sum_array([1, 2, 3, 5]), 10);
    });
  });

});
