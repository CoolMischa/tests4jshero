# test4jshero

Automatisiertes Testen des [JavaScript Hero](http://www.jshero.net)

Statische Website: läuft lokal

## Lokal starten

Die index.html im Browser öffnen.

## Bauen

Dieses Projekt muss nicht explizit gebaut werden.

Als initiale Vorbereitung muss das Repository geclont werden. Damit die lokalen Tests funktionieren am besten direkt neben das **jshero** Repository. Das heißt, die Verzeichnisse `jshero` und `tests4JSHero` liegen nebeneinander.

Da [`mocha`](http://mochajs.org) und [`chai`](http://chaijs.com) für die Testautomation genutzt wird, müssen die Module installiert werden. Die Datei `package.json` definiert die dazu nötigen Module.

Dann mit `$ yarn install` die Module einmalig installieren.

## Ein neuen Test hinzufügen

Soll der Test eine Testsuite erweitern, einfach die entsprechende Datei unter `js/test/` ergänzen.

Soll mit dem Test auch eine neue Testsuite erstellt werden, einen entsprechende JavaScript-Datein unter `js/test/` anlegen und in den `*.html`-Dateien aufrufen. Natürlich dort auch die zu testende JavaScript-Datei aus dem JS Hero-Projekt eintragen.

Seiten über den WebBrowser aufrufen und die Testergebnisse genießen ;-).
