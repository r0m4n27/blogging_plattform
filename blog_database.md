# Datenbank Aufbau

| User          |                    |     |
| ------------- | ------------------ | --- |
| user_id       | Int                | PK  |
| name          | String             |     |
| password_hash | String             |     |
| avatar        | (bild/binaryblob?) |     |

| Post             |          |     |
| ---------------- | -------- | --- |
| post_id          | Int      | PK  |
| author_id        | Int      | FK  |
| titel            | String   |     |
| text             | String   |     |
| zusammenfassung  | String   |     |
| erstellungsdatum | Datetime |     |
| veröffentlicht   | bool     |     |

Zugeordnete Kategorien: SELECT \* FROM PostKategorien WHERE PostKategorien.post_id = Post.post_id

| Kategorie |        |     |
| --------- | ------ | --- |
| kat_id    | Int    | PK  |
| name      | String |     |

Zugeordnete Posts: SELECT \* FROM PostKategorien WHERE PostKategorien.kat_id = Post.kat_id

| PostKategorien |     |     |
| -------------- | --- | --- |
| post_kat_id    | Int | PK  |
| post_id        | Int | FK  |
| kat_id         | Int | FK  |

| Kommentar |        |     |
| --------- | ------ | --- |
| kom_id    | Int    | PK  |
| post_id   | Int    | FK  |
| text      | String |     |

## Optional (Falls mehrere Benutzer Rechte haben sollen Posts zu veröffentlichen)

| Admin-Rechte        |      |     |
| ------------------- | ---- | --- |
| rechte_id           | Int  | PK  |
| Benutzer_sehen      | Bool |     |
| Benutzer_sperren    | Bool |     |
| Benutzer_löschen    | Bool |     |
| Posts_sperren       | Bool |     |
| Posts_löschen       | Bool |     |
| Kommentare_erlauben | Bool |     |
| Kommentare_löschen  | Bool |     |
