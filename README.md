# Fullstack-Webentwicklung Projekt

Obwohl heutzutage static site generators, wie Hugo oder Gatsby,
immer beliebter werden, soll in diesem Projekt ein CMS für eine Blogging-Plattform
erstellt werden. Diese Plattform sollte ein Benutzer bei sich selbst hosten
können und so eine Onlinepräsenz über einen Blog für sich erstellen können.

## Anforderungen

Siehe [Anforderungen](./docs/anforderungen.md)

### Technologie Stack

Als Datenbank wird in diesem Projekt PostgreSQL verwendet, da jedoch zu zweit an diesem Projekt gearbeitet wird,
wird diese indirekt über einen ORM angesprochen.

Das Backend wird mit Hilfe des Frameworks `Express` (JS) geschrieben. Als ORM wird vermutlich `Prisma` eingesetzt.
Um bestimmte Endpoints nur dem Betreiber zugänglich zu machen, werden Bearer Tokens im `Authorization` Header verwendet.

Das Frontend wird mit Hilfe von `Vue` erstellt. Da `vite` als Bundler verwendet wird,
könnte Server Site Rendering (SSR) verwendet werden, um die Komponenten im Frontend server zu rendern
und so die Zeit zu reduzieren bis der Nutzer den Seiteninhalt sieht. Dies sollte jedoch erst dann gemacht werden
wenn die Anwendung mit den klassischen Client Side Rendering funktioniert.
In diesen Projekt sollte die Composition API von `Vue` verwendet werden. Falls festgestellt wird, dass das interne State Management von `Vue` nicht ausreicht
wird [Pinia](https://pinia.vuejs.org/) verwendet. Außerdem sollte `Chakra UI`, ein simple Komponenten-Bibliothek, als Basis für die Komponenten dienen.
Dadurch sollte größtenteils auf eigene css Dateien verzichtet werden können und die Konzeption für zwei nicht Gestalter erleichtert werden :).
