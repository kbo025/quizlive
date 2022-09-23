
# Quizlive

Quizlive is a webapp for education, where teachers can create easely test and students can answer it in real time.
Teachers and students have to conect througth a classroom where the teacher can create questions and students can answer it. then they can see the qualification at the end of  the classroom.  


## Dependencies
- Node 
- yarn
- nvm
- Neo4J


## Dependencias npm
- restify
- vue JS
- nuxt
- vuetify
- neo4j-driver
- neode
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SERVER_PORT`

`SERVER_URL`

`SERVER_PREFIX`

`CLIENT_PORT`

`CLIENT_BASE_URL`

`NEO4J_PROTOCOL`

`NEO4J_HOST`

`NEO4J_USERNAME`

`NEO4J_PASSWORD`

`NEO4J_PORT`

`NEO4J_DATABASE`

`NEO4J_ENCRYPTION`


## Run Locally

Clone the project

```bash
  git clone https://github.com/kbo025/quizlive.git
```

Go to the project directory 

```bash
  cd quizlive/server
```

The server app was made with node v10, you can use nvm for install and use this node version 

```bash
  nvm install 10
  nvm use 10
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn server
```

In another terminal, Go to project directory and then no client

```bash
  cd quizlive/client
```

This time you must use node v16

```bash
  nvm install 16
  nvm use 16
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```


## Difficulties
- Have to learn Neo4J
- Little time to develop

## Facilities
- use Node
- use vue, Nuxt and vuetify
## TODO'S
- Web sockets for the realtime
- Best resport of student's results
- JWT for security
- User area with reports, update profile data and others
## Authors

- [@kbo025](https://www.github.com/@kbo025)

