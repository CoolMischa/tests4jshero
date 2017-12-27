describe("jshero.i18n", function() {

  describe("getLang", function() {
    it('liefert `de`, wenn in der URL kein `/en/`, sonst `en`.', function() {
      var result = jshero.i18n.getLang();
      if (document.URL.indexOf("/en/") === -1) {
        expect(result).to.be.equal("de");
      } else {
        expect(result).to.be.equal("en");
      }
    });
  });

  describe("get", function() {
    it('liefert für den Schlüsselwert `goon` `Weiter` bzw. `Continue`', function() {
      var result = jshero.i18n.get('goon');
      if (document.URL.indexOf("/en/") === -1) {
        expect(result).to.be.equal("Weiter");
      } else {
        expect(result).to.be.equal("Continue");
      }
    });

  });

});
