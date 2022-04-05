# Endpoints

## Overview

| Route       | Methode |
| ----------- | ------- |
| /status     | (GET)   |
| /init       | (POST)  |
| /articles   | (GET)   |
| /categories | (GET)   |
| /years      | (GET)   |

## Details

Verwendete Variablen (Worte innerhalb von \<>) werden in der nächsten Sektion als JSON gezeigt.

- /status

```
Method: GET
Params: NONE
Response:
OK: {} (200)
ERR: {message: “”} (400)
```

- /initialise

```
Method: POST
Params: JSON
    Example: {
                “blogname”: “Test”,
                “username”: “hans”,
                “password”: “Password123”
            }
Response:
OK: {} (200)
ERR: {message: “”} (400)
```

- /articles

```
Method: GET
Params: URL-Params
    Example: NONE, year=2022, category=test
Response:
OK: [<article>, <article>] (200)
ERR: {message: “”} (400)
```

- /categories

```
Method: GET
Params: NONE
Response:
OK: [<article>, <article>] (200)
ERR: {message: “”} (400)
```

- /years

```
Method: GET
Params: NONE
Response:
OK: [<article>, <article>] (200)
ERR: {message: “”} (400)
```

## Verwende Variablen:

```
<article> = {
    “Id”: 1,
    “titel”: “asdf”,
    “Body”: Markdown String,
    “Summary”: String
    Categories: [<category>, <category>]
}

<category> = {
    “Id”: 123132,
    “Name”: “Programming”,

}

<year> = {
    Year: 2022,
    Article_count: 53
}
```
