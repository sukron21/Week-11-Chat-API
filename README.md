# Chat API

<!-- ABOUT THE PROJECT -->

## About The Project

This is a Restful API repository for . This Restful API is built using ExpressJS and PostgreSQL.

### Technology Used

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [socket.io](https://socket.io/)



## Getting Started
### Structure Folder 

<p id='structure-folder'>Backend</p>
<ul>
  <li>public || <span><b><i>Folder for save user image in local storage</i></b></span></li>
  <li>src</li>
  <ul>
  <li>config ||<span><b><i>Folder for database setting to connect with backend.</i></b></span></li>
    <li>controller ||<span><b><i>You can store various needs for this website, such as images, styles, javascript, and others.</i></b></span></li>
    <li>helper ||<span><b><i>This folder to help the user such as for example response.</i></b></span></li>
    <li>Middlware ||<span><b><i>This folder is to help users deal with things related to jwtauth cloudinary and multer.</i></b></span></li>
    <li>model ||<span><b><i>In this folder we use a query so that user input enters the database.</i></b></span></li>
     <li>socket ||<span><b><i>|This folder contains configuration based on the socket.io library, which manages the application to run in real time.</i></b></span></li>
    <li>router ||<span><b><i>The router is used to set the endpoint of this application.</i></b></span></li>
  </ul>
</ul>
<hr/>



### Installation

<li>- Clone this project with `git clone https://github.com/sukron21/Week-11-Chat-API`</li>
<li>- Install package required with `npm install`</li>
<li>Setting .env</li>

```bash

# database
DB_HOSTNAME = 
DB_USERNAME  = 
DB_PASSWORD  = 
DB_NAME  = 
DB_PORT  = 

#index
PORT = 

# jwt
JWT_SECRET = 

```
<li>Continue with database creation.</li>
  <li>You can first import the postman documentation contained in this repo and pay attention to the fields in each POST request.
</li>
  <li>To run the server that has been set, use the <b>npm run dev command</b>.</li>
  <li>When there is a description of the Server running on Port (with the port you have specified), the API is ready to use.</li>
</ol>
<hr />

### Package
- bcrypt
- body-parser,
- cors
- dotenv
- express
- jsonwebtoken
- nodemon
- pg
- socket.io

### Executing program

- Run program with `npm run dev` for development and `npm run start` for production

## Endpoint List
### /user

- GET | `/user`
  - Body: None
  -  - limit (number | default 3)
    - page (number | default 1)
    -asc (asc | asc)
    -sort (sort | username)
  - Desc: Get a list of users ascending with username  in the database
- GET | `/user/:id`
  - Body: None
  - Token: Required
  - Desc: Get detailed user data based on the entered id
- PUT | `/user/:id
  - Body:
    - username (required | alphabet | max 50)
    - phone (required | number | max 13)
  - Desc: Update user data based on entered id
  - POST | `/register`
  - Body:
    - username (required)
    - email (required | valid email)
    - password (required)
    -phone (required)
  - Desc: register
- POST | `/login`
  - Body:
    - email (required | valid email)
    - password (required)
  - Token: Not required
  - Desc: Login
  
- DELETE | `/user/:id`
  - Body: None
  - Desc: Delete user data based on the entered id
  
<!-- RELATED PROJECT -->

## Related Project

- [Telegram Chat API](https://github.com/sukron21/Week-11-Chat-API)
- [Telegram Chat App](https://github.com/sukron21/Week-11-Chat-APP)

## Authors

Contributors names and contact info:

1. Rahmat Furqon

- [Linkedin](www.linkedin.com/in/furqon-rahmat)
