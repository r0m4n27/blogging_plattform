# Einführung

Blogs sind, mit ihren vielfältigen Themengebieten, nicht mehr von der heutigen Internetlandschaft wegzudenken.
Dabei hat man eine hohe Diversität von Personengruppen, welche einen Blog betreiben, die sich
von einer einzelnen Person bis hin zu großen Unternehmen erstreckt. Die Diversität der Personen spiegelt
sich auch in den verwendeten Technologien für die jeweiligen Blogs wieder. So können z.B. Plattformen wie
_Medium_ oder _Substack_ oder eigens betriebene Seiten verwendet werden. Auch bei den selbst betriebenen
Seiten gibt es verschiedene Technologien, die verwendet werden können, jedoch haben Content-Management-Systeme
(CMS) (z.B. _Wordpress_, _Ghost_ oder _Strapi_) eine hohe Beliebtheit. Diese Plattformen haben zum eine Schnittstelle, durch die Kollaboratoren Inhalte
für die Seite erstellen und eine weitere durch die Besucher der Seite die erstellen Inhalte betrachten können.
So sollte auch in Rahmen dieser Studienarbeit eine einfache Version eines CMS für Blogartikel erstellt werden.

## Anforderungen

Wie im vorherigen Abschnitt erwähnt wurde sollte ein einfache Blogging-Plattform erstellt werden.
Auf dieser sollten mehrere Autoren die Möglichkeit haben einzelne Blogartikel zu erstellen.
Dabei sollten nur ausgewählte Autoren auf der Plattform Artikel veröffentlichen, welche
vom Administrator der Seite zu dieser eingeladen wurden. Nachdem ein Artikel verfasst wurde
kann er von einem Besucher neben allen anderen veröffentlichten Artikeln gelesen werden.
Die Nutzer der Plattform können dabei in die drei folgenden Gruppen aufgeteilt werden:
Besucher, Autor und Administrator. Die nächsten Punkte gehen näher auf die Funktionalitäten ein,
welche diesen Gruppen zur Verfügung stehen.

### Besucher

Ein Besucher sollte die Möglichkeit haben alle veröffentlichten Blogartikel der
Plattform betrachten zu können. Die Artikel können dabei zu verschiedenen Kategorien gehören.
Diese veröffentlichten Artikel können auf der Startseite sortiert nach dem Veröffentlichungsdatum
betrachtet werden. Es gibt aber auch die Möglichkeit, eine gefilterte Liste der Artikel zu betrachten.
Zum einen kann so der Benutzer alle Blogartikel einer Kategorie betrachten, zum anderen können alle
Einträge eines Jahren, in dem sie veröffentlicht wurden, angezeigt werden. Zuletzt soll der
Besucher die Möglichkeit haben alle Kategorien und ein Archiv mit allen Jahren, in dem Artikel
veröffentlicht wurden, zu betrachten. Mit Hilfe von diesen Listen können die vorhin
beschriebenen gefilterten Veröffentlichungen, mit dem jeweiligen Filterkriterium erreicht werden.

### Autor

Bevor die Artikel von Besuchern betrachtet werden können, müssen diese von den Autoren
geschrieben werden und veröffentlicht werden. Dafür muss sich zuerst ein Autor einen Account
erstellen, bzw. sich einloggen. Damit sich nicht jeder Person für die Plattform registrieren kann,
muss bei der Registration ein Registrations-Code angegeben werden. Danach kann der Autor zum einen Artikel, als
auch Kategorien für diese erstellen. Für den Inhalt der Artikel kann der Autor das
Markdownformat verwenden. Auch kann ein Artikel als unveröffentlicht gespeichert werden,
so wird dieser im System gespeichert ohne diesem den Besucher anzuzeigen. Sowohl Kategorien
als auch Artikel können nach der Erstellung editiert oder gelöscht werden. Zuletzt hat der
Autor die Möglichkeit, sein Password für den Login zu verändern.

### Administrator

Zuletzt gibt es im System die Rolle des Administrators. Dieser kann die Einstellungen
der Seite verändern und die Nutzer in System zu verwalten. In den Einstellungen
kann der Titel und das Logo für die Plattform angepasst werden. Der weitere wichtige Punkt
ist die Nutzerverwaltung. In dieser kann der Administrator Registrations-Code für die
Autoren erstellen. Auch können so alle registrierten Nutzer der Plattform betrachtet und
auch gelöscht werden. Damit der Administrationsaccount erstellt werden kann, wird beim
erstellen des Systems ein fester Registrations-Code festgelegt. Über diesen können
Administrator Accounts erstellt werden, wovon es jedoch im System maximal nur einen
geben kann.

## Inhaltsangabe

Der folgende Abschnitt soll einen Überblick zur Struktur und den Inhalten der folgenden Kapitel geben.
Das nächste Kapitel soll die wichtigsten Technologien erläutern, welche nicht in der Vorlesung
Besprochen wurden. So baut zwar das Projekt auf den Technologien, welche in der Vorlesung besprochen wurden,
auf, jedoch wurde die Liste der Softwarepakete erweitert und teils verändert. Im darauffolgenden Kapitel wird auf die Implementation
des Backends genauer eingegangen. Dazu wird näher auf die allgemeine Architektur, die Datenbankstruktur und die
API Schnittstelle des Backendsystems eingegangen. Nach der Beschreibung des Backends wird das Frontend des Systems
beschrieben. In diesem Kapitel wird auf die Struktur der Seite, der Zustandsverwaltung und dem Erstellen der Komponenten
selbst eingegangen. Im letzten Kapitel soll noch ein Fazit zum Erfolg des Projektes und die Verwendbarkeit der angewandten
Softwarepakete gezogen werden.
