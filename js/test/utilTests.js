describe("jshero.util", function() {

  describe("isPhoneGap", function() {
    it('liefert `true`, wenn URL Protokol nicht http(s) ist', function() {
      var result = jshero.util.isPhoneGap();
      var expected = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1)
      expect(result).to.be.equal(expected);
    });
  });

  describe("formatMessage", function() {
    it('ersetzt %0 und %1 durch `Hallo` und `Welt`.', function(){
      var message = "%0 %1!";
      var values = ["Hallo", "Welt"];
      expect(jshero.util.formatMessage(message, values)).to.be.equal("Hallo Welt!");
    });

  });

});
