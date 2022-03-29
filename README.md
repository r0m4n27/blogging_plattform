# Fullstack-Webentwicklung Projekt

NOTE: An diesem [Projekt](https://r-n-d.informatik.hs-augsburg.de:8080/romankol/blogging-plattform)
wird hauptsächlich im Informatik Gitlab gearbeitet,
da der Multimedia Gitlab wohl nicht mit SSH-Keys arbeiten kann :). Wenn neue Features
gemerged werden, sollte der `main` Branch auch zeitnah auf dem Multimedia Gitlab gepushed werden.

## Projektbeschreibung

Obwohl heutzutage static site generators, wie Hugo oder Gatsby,
immer beliebter werden, soll in diesem Projekt ein CMS für eine Blogging-Plattform
erstellt werden. Diese Plattform sollte ein Benutzer bei sich selbst hosten
können und so eine Onlinepräsenz über einen Blog für sich erstellen können.

Auf der Startpage werden den Besuchern die zuletzt veröffentlichten Posts angezeigt.
Wie man von einer Blogging-Plattform erwarten würde, können die Benutzer zu den einzelnen
Artikeln navigieren und diese dann lesen. Unter jedem Post haben Besucher der Seite die Möglichkeit
anonym Kommentare unter diesem zu schreiben. Den Posts können zudem Kategorien zugewiesen werden
und es ist möglich alle Posts einer Kategorie zu Listen. Das gleiche ist auch mit dem Veröffentlichungsdatum
möglich. So sollte man dann eine Liste von allen Posts eines Jahres anzuzeigen.

Der Betreiber der Seite hat die Möglichkeit Kategorien und Posts für die Seite zu erstellen.
Ein Post wird dabei in Markdown geschrieben. Posts können als Draft gespeichert werden,
dadurch werden sie im System gespeichert aber noch nicht veröffentlicht. Außerdem sollte es natürlich möglich
sein Posts zu editieren und zu löschen.

Falls der bisherige Umfang noch zu gering ist kann das Projekt mit folgenden Features erweitert werden:

- Mehrere Benutzer, die Posts erstellen können
- Metriken
  - Pageviews
  - Durschnittliche länge auf einem Blogpost
  - ...
- Einbinden von internen Bildern und Videos
  - Markdown Links können dann nicht nur auf externe URLs verweisen
  - Sondern man kann pro Post Bilder hochladen
  - Und diese verlinken
- Gastaccounts für Kommentare oder Social Login mit z.B. Google

### Technologie Stack

Als Datenbank wird in diesem Projekt PostgreSQL verwendet, da jedoch zu zweit an diesem Projekt gearbeitet wird,
wird diese indirekt über einen ORM angesprochen.

Das Backend wir mit Hilfe der Programmiersprache `Elixir` und dem Framework `Phoenix` geschrieben werden.
`Phoenix` stellt auch `Ecto`, ein ORM mit PostgreSQL Unterstützung, bereit. Um bestimmte Endpoints nur dem
Betreiber zugänglich zu machen, werden Bearer Tokens im `Authorization` Header verwendet.

Das Frontend wird mit Hilfe von `Vue` erstellt. Da `vite` als Bundler verwendet wird,
könnte Server Site Rendering (SSR) verwendet werden, um die Komponenten im Frontend server zu rendern
und so die Zeit zu reduzieren bis der Nutzer den Seiteninhalt sieht. Dies sollte jedoch erst dann gemacht werden
wenn die Anwendung mit den klassischen Client Side Rendering funktionniert. In diesen Projekt sollte die Composition
API von `Vue` verwendet werden. Falls festgestellt wird, dass das interne State Management von `Vue` nicht ausreicht
wird `Pinia` verwendet. Außerdem sollte `Chakra UI`, ein simple Komponenten-Bibliothek, als Basis für die Komponenten dienen.
Dadurch sollte größtenteils auf eigene css Dateien verzichtet werden können und die Konzeption für zwei nicht Gestalter erleichtert werden :).
