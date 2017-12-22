describe("jshero.array", function() {

  describe("isEqual", function() {
    it('liefert `true` für a = [1, 2, 3, 4] und b = [1, 2, 3, 4].', function(){
      var a = [1, 2, 3, 4];
      var b = [1, 2, 3, 4];
      var result = jshero.array.isEqual(a , b);
      expect(result).to.be.true;
    });
    it('liefert `true` für a = [1, 2, 3, 4] und b = a.', function(){
      var a = [1, 2, 3, 4];
      var b = a;
      var result = jshero.array.isEqual(a , b);
      expect(result).to.be.true;
    });
    it('liefert `false` für a = [1, 2, 3, 4] und b = [1, 2, 4, 3].', function(){
      var a = [1, 2, 3, 4];
      var b = [1, 2, 4, 3];
      var result = jshero.array.isEqual(a , b);
      expect(result).to.be.false;
    });
    it('liefert `false` für a = [1, 2, 3, 4] und b = "1, 2, 3, 4".', function(){
      var a = [1, 2, 3, 4];
      var b = "1, 2, 3, 4";
      var result = jshero.array.isEqual(a , b);
      expect(result).to.be.false;
    });
  });

});
