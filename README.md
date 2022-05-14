# Fullstack-Webentwicklung Projekt

Obwohl heutzutage static site generators, wie Hugo oder Gatsby,
immer beliebter werden, soll in diesem Projekt ein CMS für eine Blogging-Plattform
erstellt werden. Diese Plattform sollte ein Benutzer bei sich selbst hosten
können und so eine Onlinepräsenz über einen Blog für sich erstellen können.

## Anforderungen

Siehe [Anforderungen](./docs/anforderungen.md)

## Technologie Stack

Als Datenbank wird in diesem Projekt PostgreSQL verwendet, da jedoch zu zweit an diesem Projekt gearbeitet wird,
wird diese indirekt über einen ORM angesprochen.

Das Backend wird mit Hilfe des Frameworks `Express` (JS) geschrieben. Als ORM wird vermutlich `Prisma` eingesetzt.
Um bestimmte Endpoints nur dem Betreiber zugänglich zu machen, werden Bearer Tokens im `Authorization` Header verwendet.

#### Frontend

- Design in [Figma](https://www.figma.com/file/c3UmnmRKhvv52DWA9BWkQx/Blogging-Plattform)
- Verwendung von `Vue`
- Falls nötig [Pinia](https://pinia.vuejs.org/) als state management library
- Es wurde gedacht `Chakra UI` als Komponentenbibliothek zu verwenden
  - Es doch befindet diese sich für Vue 3 in der alpha und hat nicht alle benötigten Komponenten
- Das Design in Figma wurde mit den Komponenten von `Chakra` erstellt
- Diese wurden jedoch selbst nachgebaut und die theming werte von `Chakra` übernommen
- Zur Hilfe wurde [Emotion](https://emotion.sh/docs/introduction) verwendet
