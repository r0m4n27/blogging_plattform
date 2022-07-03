# Grundlagen

In diesem Kapitel sollen die wichtigsten Grundlagen für das Projekt erläutert werden,
welche nicht in der Vorlesung gezeigt wurden. Dies bezieht sich dabei auf die zusätzlich verwendeten Pakete.
So wurde zwar wie auch in der Vorlesung `Vue` für das Front- und `express` für das Backend verwendet,
jedoch mussten weitere Pakete für eine erweiterte Funktionalität herangezogen werden.

## Backend

### Prisma

`Prisma` ist neben `express` das wichtigste Paket für das Backend. Mithilfe von `Prisma` lässt sich
eine typsichere Schnittstelle zur Datenbank erzeugen.
Die Dokumentation kann in [@PrismaDocs] gefunden werden. Um die Schnittstelle zu erzeugen, muss
zuerst ein Datenmodell definiert werden. Dazu verwendet Prisma eine eigene Domänenspezifische Sprache.
In dieser definiert man "Models", durch welche Tabellen in der Datenbank erzeugt werden.
Das folgende Codebeispiel zeigt z.B. die Definition eines Models für einen Benutzer:

```
model User {
  id       String   @id @default(uuid()) @db.Uuid
  username String   @unique
  password String
  role     UserRole @default(AUTHOR)

  articles Article[]
}
```

So werden in einem Modell die einzelnen Felder mit ihren Datentypen angegeben. Es lassen sich
auch Constraints, wie sie aus SQL bekannt sind, durch z.B. das "\@unique" angeben. In dem Model
werden auch Relationen zu anderen Modellen definiert. So ist dem User-Modell aus dem Beispiel
eine Liste von Artikeln zugeordnet. Die Relation muss zusätzlich noch im Article-Model,
ähnlich eines Foreign Keys aus SQL, mit Hilfe der "\@relation" Annotation spezifiziert werden.

Nachdem das Datenmodell beschrieben wurde, kann `Prisma` mit Hilfe eines Generators eine Schnittstelle
erstellen. Es wird dabei offiziell ein Generator für _Typescript_ unterstützt. Mit diesem
werden Interfaces für die Modelle, als auch typsichere Methoden um Create, Read, Update, Delete (CRUD)
Operationen durchzuführen erzeugt.

### Zod

Um JSON Objekte, welche von der API erhalten werden zu validieren, wird `zod` [@Zod] verwendet.
Durch diese Bibliothek lassen sich deklarativ Schemata zu Validation definieren. Diese können
aus einfachen Typdefinitionen wie Numbers oder Strings, aber auch anderen Schemata, bestehen. Es
können auch einzelne Felder durch Transformationen zu anderen Typen konvertiert werden und
spezifische Validationsfunktionen z.B. für E-Mails oder UUIDs angeben werden.
Außerdem kann `zod` mit Hilfe des `z.infer<ZodType>` Typen
aus einem Schema einen Typen für das eigentliche JSON Objekt generieren.

## Frontend

### Emotion

In der Vorlesung wurden die Sprache Sass zum Erstellen von Styles gezeigt. In diesem
Projekt wurde stattdessen eine Bibliothek verwenden, welche das Schreiben von Styles
in JavaScript ermöglicht. Die dazu verwendete Bibliothek heißt `emotion`. Mit Hilfe dieser können
Styles entweder durch einen String oder ein Objekt beschreiben werden. Die Dokumentation des Paketes
[@Emotion] gibt dabei Code-Beispiele für beide Verwendungsweisen. Um den Style verwenden zu können,
wir bei der Definition dessen ein CSS-Klassenname zurückgegeben. Dieser kann wie gewohnt einem HTML
Element zugewiesen werden. Durch dieses Paket war es einfach möglich dynamische Styles für
die Basiskomponenten des Frontend zu erzeugen.

### Storybook

`Storybook` ermöglicht es eine Vorschau für Komponenten außerhalb der Applikation zu erzeugen.
Dadurch ist es möglich das Aussehen der einzelnen Komponenten zu prüfen, ohne sie im Frontend
selbst einzusetzen. Auch kann so eine Vorschau einer Komponente für jeden Zustand erzeugt werden,
den sie haben kann. Die kann den großen Vorteil haben, dass nicht einfach erreichbare Zustände
in der Applikation einfach auf ihre Visuelle Korrektheit überprüft werden können.
In der Dokumentation von `Storybook` [@Storybook] wird ein Beispiel gegeben, wie eine Preview
für eine Komponente mit verschiedenen Argumenten erzeugt wird. Es muss jedoch gesagt werden,
dass dieses Paket hauptsächlich auf die Bibliothek `React` ausgelegt wurde. Es werden
zwar auch andere Frameworks wie `Vue` unterstützt, jedoch müssen z.B. dafür die Komponenten
mit einem Template String initialisiert werden. Die Möglichkeit zur Vorschau aller Komponenten
der Applikation bietet jedoch solch einen großen Vorteil, dass, trotz der nicht optimalen Developer
Experience, auf `Storybook` nicht verzichtet wurde.

