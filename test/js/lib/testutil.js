let jtu = jshero.testutil;

describe("jshero.testutil", function() {
  describe("assert_isFunction(f_name)", function() {
    it('Liefert false, wenn f_name keine Funktion ist: `f_name = "isNotAFunction";` => false.', function() {
      f_name1 = undefined;
      f_name1 = "isNotAFunction";
      var result = jtu.assert_isFunction('f_name1').ok;
      expect(result).to.be.false;
    });
    it('Liefert true, wenn f_name eine Funktion ist: `f_name = function() {};` => true.', function() {
      f_name1 = undefined;
      f_name1 = function() {};
      var result = jtu.assert_isFunction('f_name1').ok;
      expect(result).to.be.true;
    });
  });

  describe("assert_functionReturnsType(f_name, expectedReturnType)", function() {
    var types = ['Array', 'Date', 'NaN', 'undefined', 'null', 'boolean', 'string', 'symbol', 'number', 'object'];
    var returnValues = [
      [1, 2, 3], new Date(), parseInt("NaN"), undefined, null, true, "String", Symbol(42), 37, {
        name: "Soujon",
        vorname: "Mischa"
      }
    ];

    function makeTest(type, returnValue) {
      it(`Liefert true, wenn f_name() ein ${type} zurückgibt.`, function() {
        f_name1 = undefined;
        f_name1 = function() {
          return returnValue;
        };
        var result = jtu.assert_functionReturnsType('f_name1()', type).ok;
        expect(result).to.be.true;
      });
    };

    for (let i = 0; i < types.length; i++) {
      makeTest(types[i], returnValues[i]);
    };

    it('Liefert true, wenn f_name() null zurückgibt', function() {
      f_name1 = undefined;
      f_name1 = function() {
        return null;
      };
      var result = jtu.assert_functionReturnsType('f_name1()', 'null').ok;
      expect(result).to.be.true;
    });

    it('Liefert false, wenn auf einen unbekannten Typen getestet wird.', function() {
      f_name1 = undefined;
      f_name1 = function() {
        return null;
      };
      var result = jtu.assert_functionReturnsType('f_name1()', 'UnknownType').ok;
      expect(result).to.be.false;
    });
  });
  
  describe("assert_functionReturns(f_name, expectedReturnValue)", function() {
    it('Liefert true, wenn f_name() den gefragten Wert liefert.', function() {
      f_name1 = undefined;
      f_name1 = function() {
        return 37;
      };
      var result = jtu.assert_functionReturns('f_name1()', 37).ok;
      expect(result).to.be.true;
    });

    it('Liefert false, wenn f_name() eine falschen Wert liefert.', function() {
      f_name1 = undefined;
      f_name1 = function() {
        return 42;
      };
      var result = jtu.assert_functionReturns('f_name1()', 37).ok;
      expect(result).to.be.false;
    });

  });

  var erg = jtu.assert_isFunction(jtu.escapeHtml);
  if (erg.ok) {
    describe("escapeHtml", function() {
      it('Übersetzt `"` in `&quot;`', function() {
        var result = jtu.escapeHtml('"');
        var expected = "&quot;";
        expect(result).to.be.equal(expected);
      });
      it('Übersetzt `&` in `&amp;`', function() {
        var result = jtu.escapeHtml('&');
        var expected = "&amp;";
        expect(result).to.be.equal(expected);
      });
      it("Übersetzt `'` in `&#39;`", function() {
        var result = jtu.escapeHtml("'");
        var expected = "&#39;";
        expect(result).to.be.equal(expected);
      });
      it('Übersetzt `>` in `&gt;`', function() {
        var result = jtu.escapeHtml('>');
        var expected = "&gt;";
        expect(result).to.be.equal(expected);
      });
      it('Übersetzt `<` in `&lt;`', function() {
        var result = jtu.escapeHtml('<');
        var expected = "&lt;";
        expect(result).to.be.equal(expected);
      });
      it('Übersetzt `< mit "Anf" und & >` in `&lt; mit &quot;Anf&quot; und &amp; &gt;`', function() {
        var result = jtu.escapeHtml('< mit "Anf" und & >');
        var expected = '&lt; mit &quot;Anf&quot; und &amp; &gt;';
        expect(result).to.be.equal(expected);
      });
      it("Übersetzt `< mit 'Ticks' und & >` in `&lt; mit &#39;Ticks&#39; und &amp; &gt;`", function() {
        var result = jtu.escapeHtml("< mit 'Ticks' und & >");
        var expected = '&lt; mit &#39;Ticks&#39; und &amp; &gt;';
        expect(result).to.be.equal(expected);
      });
    });
  }
});
