# Implementation

Nachdem das Design der Seite erstellt wurde, konnte das Frontend mit Hilfe von `Vue` erstellt werden.
Dazu wurde den aus dem Design Komponenten gebildet und mit dem Backend verbunden. Die entstandenen
Komponenten können dabei in die drei folgenden Kategorien eingeteilt werden: Basiskomponenten, Hauptkomponenten und Pages.

## Basiskomponenten

Da für das Design des Blogs `Charka UI` als Basis verwendet wurde, sollte dies auch für das Frontend
selbst verwendet werden. Jedoch befindet sich das Framework für `Vue 3` noch in der Alpha.
So wurde sich an der Implementation von der React Version [@ChakraReact] orientiert,
um wiederverwendbare Basiskomponenten zu erstellen. Die entstandenen Komponenten stellen
meistens entweder Layoutelemente, wie z.B. eine Liste, ein Modal oder eine Card,
oder einfache UI-Elemente, wie z.B. einen Icon-Button, Tags oder ein Heading, dar.

Diese Komponenten sollten, wie in `Chakra U`, selbst mit Hilfe von der Properties der Komponenten
gestyled werden. Dazu wurden eine Reihe von Property-Objekten definiert, welche von den Basiskomponenten
verwendet werden können. So können z.B. durch das `systemProps` Objekt Styles, wie das Padding,
die Hintergrundfarbe oder der Border-Radius gesetzt werden. Um dies zu ermöglichen, wurde das
in den Grundlagen beschriebene Paket `emotion` verwendet. Zu jedem Property-Objekt wurde eine
Funktion definiert, welche ein Stylesheet definiert und den passenden Klassennamen zurückgibt.
So mussten dafür nur die jeweiligen Styles in ein Objekt, unter dem passenden Namen geschrieben werden
und `emotion` konnte daraus das Stylesheet bilden.

Jedoch gab es die Besonderheit, dass einige Stylewerte abhängig von der Laufzeitumgebung waren.
So sollten diese je nach Größe des Gerätes verschiedene Werte annehmen oder eine andere Farbe
haben wenn der Dark-Mode aktiviert ist. Anstatt diese direkt in das Objekt für `emotion` zu schreiben,
wurden sogenannte `writer` definiert, welche verantwortlich waren den Style korrekt in das Objekt
für Emotion zu schreiben. Dadurch konnte z.B. bevor eine Farbe in das Objekt geschrieben geprüft werden,
ob der Dark-Mode aktiviert ist. Eine weitere Verwendungsmöglichkeit war, dass so Werte aus einem
Konfigurationsobjekt in das Style geschrieben werden konnte. So diente der eigentliche eingebe
Stylewert nur als Key für das Konfigurationsobjekt und der Wert des Keys wird in den Style geschrieben.
Dies konnte z.B. verwendet werden, um einfache vorgefertigte Keys anstatt Größen in Pixeln für das Padding einzugeben.

## Hauptkomponenten

Nachdem die Basiskomponenten implementiert wurden, konnte das Design in `Vue` übertragen werden.
Dies war dabei meisten trivial da in _Figma_ schon Komponenten basiert gearbeitet wurde. So
konnten die Basiskomponenten verwendet werden, um Schritt für Schritt die UI zu bilden.
Dabei besondere bei den Hauptkomponenten war, dass diese größtenteils zustandslos sind.
D.h. die Daten für diese wurden über die Properties gegeben. Falls diese den Zustand ändern wollten,
konnte dies durch die Emits von `Vue` signalisiert werden. Dadurch, dass diese Komponenten nicht von
dem Backend abhängen, war es einfach möglich Previews für diese in `Storybook` zu erzeugen.
Um die Daten zu den Komponenten nicht durch viele Schichten durchgeben zu müssen, wurde dabei geachtet
dass viele Layouts mit Hilfe von dem Slot-Mechanismus von `Vue` zu erstellen. So musste auch z.b. das aussehen
einer Seite nicht jedes mal für eine Seite neu definiert werden, sondern man konnte eine wiederverwendbare
Komponente namens `BasePageLayout` verwenden. Jedoch war es nicht immer möglich jede Komponente ohne Zustand
zu haben. Einige der Komponenten, wie der `Article-Editor` haben einen inneren Zustand.
Falls eine Komponente einen solchen Zustand haben sollte, dient dieser nur zur Darstellung der UI
und interagiert nicht mit dem Backend. Fall eine Aktion mit dem Backend erfolgen sollte wurde dies
auch hier mit Hilfe von Emits implementiert.

## Pages

Zuletzt mussten die definierten Komponenten zu dem Backend angebunden werden. Dafür sind die sog.
"Pages" verantwortlich. Diese halten die zustandlosen Komponenten und geben diesen Daten vom Backend
bzw. führen Aktionen auf dem Backend aus. Dazu wurde das Konzept des "Composables" von `Vue` verwendet. [@Composables]
Diese Composables sind dabei Funktionen die einen Zustand von `Vue` halten können. Damit können auch wiederverwendbare
Funktionen geschrieben werden. So gibt ein Composable mit Hilfe dessen eine Abfrage an das Backend ausgeführt werden kann
und nachdem diese erhalten wurde in ein `ref` geschrieben wird. Durch diese und noch weiteren Composables konnte
der Zustand einer Seite abgebildet werden. Dieser wird so lange gehalten bis der Nutzer auf eine andere Seite wechselt.
Es gab auch im Frontend bestimmte Zustände, die zwischen den Seitenwechsel gehalten wurden mussten. Dazu
wurde die Bibliothek `pinia` verwendet. Dies waren hauptsächlich Daten über das ausgewählte Theme oder den zurzeit angemeldeten Benutzer.

