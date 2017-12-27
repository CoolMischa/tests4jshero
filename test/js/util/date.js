describe("jshero.date", function() {

  describe("isDate", function() {
    it('liefert `true`, wenn das gegebene Objekt den Prototypen [object Date] hat', function() {
      var testDate = new Date();
      var result = jshero.date.isDate(testDate);
      expect(result).to.be.true;
    });
    it('liefert `false`, wenn das gegebene Objekt kein Datum ist.', function() {
      var testDate = "2017-12-21";
      var result = jshero.date.isDate(testDate);
      expect(result).to.be.false;
    });
  });

  describe("isEqual", function() {
    it('liefert `true` für Date("2017-12-21") und Date(2017,11,21,1).', function(){
      var date1 = new Date("2017-12-21");
      var date2 = new Date(2017,11,21,1);
      var result = jshero.date.isEqual(date1 , date2);
      expect(result).to.be.true;
    });

  });

});
