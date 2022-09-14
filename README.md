<div align="center"><img style = "width:100%;"src="https://i.imgur.com/6VUAD8e.png"></img></div>
<hr>
<h2 align=center>Shortly (Back-End)</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A api for a webapp that manages shortened URL's</h4>
<hr>

## Features

- User can:
  - register and login
  - shorten URL's
  - delete URL's
- Redirect to original URL
- Get all URL's from user
- Ranking with most popular users

## Requirements

- Database
  - [x] Use the Postgres database.
  - [x] Model the database as needed.
  - [x] Insert the SQL script to create the database inside the project with the name `tables.sql`.
  - [x] Use CONSTRAINS when applicable to secure the application's business logic.
  - [x] Use a field called `createdAt` to store the creation date of entities.
- _Backend_
  - [x] Implement the _back-end_ of the application in **Node + Express** following the architecture of _routes_, _controllers_ and _middlewares_.
  - [x] Sensitive data (such as passwords) must be encrypted.

# API Reference

#### SIGN-UP

```http
POST /sign-up
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `name`     | `string` | **Required**. name        |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |
| `password` | `string` | **Required**. password    |

#

#### SIGN-IN

```http
POST /sign-in
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |

</br>

#### Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbC26IkZhYnJjaW8yOUB5YWhvby5jb20iLCJpYXQiOjE2NTgxNzQwNTh9.dQ0JA1VMM7rAyFwaC-_AG9gDyrTDhOv1eoW1DNVpqOs"
}
```

<br/>

### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

<br/>

# URL's

- **POST** `/urls/shorten`

  - This is an **authenticated route.**
  - Must receive an `Authorization` _header_ in `Bearer TOKEN` format.

#### Request:

| Body  | Type     | Description       |
| :---- | :------- | :---------------- |
| `url` | `string` | **Required**. url |

</br>

#### Response:

```json
{
  "shortUrl": "a8745bcf" // here the identifier that is generated
}
```

- **GET** `/urls/:id`

  - This is **not** an authenticated route.
  - Must respond with _status code_ `200` and body (_body_) in the format:

    ```json
    {
      "id": 1,
      "shortUrl": "bd8235a0",
      "url": "http(s)://..."
    }
    ```

- **GET** `/urls/open/:shortUrl`
  - This is **not** an authenticated route.
  - Redirect the user to the corresponding link.
  - Increase one in the link's hit count.
  - If the shortened url does not exist, reply with _status code_ `404` .
- **DELETE** `/urls/:id`
  - This is an **authenticated route.**
  - Must respond with _status code_ `401` when the shortened url does not belong to the user.
  - If it is from the user, it must reply with _status code_ `204` and exclude the shortened url.
  - If the shortened url does not exist, reply with _status code_ `404` .
- **GET** `/users/me`

  - This is an **authenticated route.**
  - Must respond with _status code_ `200` and body (_body_) in the format:

    ```json
    {
    "id": user id,
    "name": username,
    "visitCount": sum of the number of visits of all user links,
    "shortenedUrls": [
    {
    "id": 1,
    "shortUrl": "...",
    "url": "...",
    "visitCount": sum of the number of visits to the link
    },
    {
    "id": 2,
    "shortUrl": "...",
    "url": "...",
    "visitCount": sum of the number of visits to the link
    }
    ]
    }
    ```

  - Must respond with _status code_ `404` if the user does not exist.
  - If the _header_ is not sent (or is invalid), reply with _status code_ `401`.

- **GET** `/ranking` **\*important change** (formerly `/users/ranking`)

  - This is **not** an authenticated route.
  - Must respond with _status code_ `200` and body (_body_) in the format:

    ```json
    [
    {
    "id": user id,
    "name": username,
    "linksCount": 5,
    "visitCount": 100000
    },
    {
    "id": user id,
    "name": username,
    "linksCount": 3,
    "visitCount": 85453
    },
    {
    "id": user id,
    "name": username,
    "linksCount": 10,
    "visitCount": 0
    },
    {
    "id": user id,
    "name": username,
    "linksCount": 0,
    "visitCount": 0
    }
    ]
    ```

- Limited to **10 users.**
- This list must be **ordered** by the sum of visits to your links.
- It should appear even users whose _links_ have not had any visits, if necessary.

## Usage

Install my project with npm

> Clone the repository:

```bash
  git clone git@github.com:DanielCdOliveira/projeto16-shortly.git
```

> Install dependences:

```bash
  npm install
```

> Create a .env file like the .env.example file

> Run aplication:

```bash
  npm run dev
```

### Built with

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/
