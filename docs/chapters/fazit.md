# Fazit

Zusammenfassend lässt sich sagen, dass in diesem Projekt
erfolgreich ein einfache Blogging-Plattform erstellt werden konnte, die
nicht nur eine Besucheransicht, sondern auch eine Administrative Oberfläche
für den Autor und Administrator bietet. Dabei war es möglich für das ganze
Projekt Typescript zu verwenden und so Typsicherheit vom Zugriff auf die
Datenbank bis hin zu den UI-Komponenten zu haben.
Die gestellten Anforderungen des Projektes
konnten alle erfüllt werden und ist es möglich die Software produktiv
einzusetzen. So könnte man einen einfachen Blog für sich und noch weitere
Autoren führen. In dem Projekt gibt es aber auch größeren Spielraum für zukünftige Erweiterungen.
Ein Punkt dafür wäre das Einbauen neuer Features, wie z.B. Kommentare
der Besucher mit Hilfe eines Social-Logins oder das Tracking von Metriken,
wie der durchschnittlichen Zeit, die ein Besucher auf einem Artikel verbringt.

Das Projekt hatte jedoch auch einige Hürden. Diese entstanden hauptsächlich
durch `Vue` selbst. So hat man schnell herausfinden können, dass das Ökosystem
bei weitem nicht so groß ist, wie das z.B. von `React`. Auch wurde die bereits nicht
so große Auswahl an Paketen, durch die Transition von `Vue 2` zu `Vue 3`, noch weiter verkleinert.
Die ließ sich z.B. daran erkennen, dass `Chakra UI` trotz der hohen Beliebtheit bisher
nur für `Vue 2` stabil ist und die `Vue 3` Version sich in der Alpha befindet.
Ein weiteres Problem ist, dass in Vue zum Teil nicht alle Features nicht so funktionieren,
wie sie sollten. Das wurde in diesem Projekt an der Definition der Properties für die Komponenten
festgestellt. So ist es zwar durch die _Composition API_ von `Vue` möglich die Properties
mit Hilfe eines Typescript Interfaces zu beschreiben, jedoch kann das Interface nur in der
Komponente selbst definiert werden. Das Issue auf GitHub ist dazu seit fast einem Jahr
offen und es existiert immer noch keine Lösung für das Problem. [@VueProps] Dies hat die
Definition der Basiskomponenten um einiges erschwert, da die Properties mit Hilfe eines Objektes
beschrieben werden mussten.

Abschließen lässt sich jedoch sagen, dass durch dieses Projekt in allen Ebenen der Webentwicklung
gebildet werden konnte und trotz der beschreiben Hürden eine gute Erfahrung mit den Technologien
aus der Vorlesung gemacht werden konnte.
