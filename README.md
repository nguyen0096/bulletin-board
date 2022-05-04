# Bulletin Board

To run this app on local:

* Install prerequisites:
    * [nodejs]()
    * [lerna](https://lerna.js.org/)

* Install all packages: at project root directory, run `npx lerna bootstrap`
* Install Docker container for MongoDB: at `packages/server` directory, run `docker-compose up -d db`
* Start API server:
    * Create new `.env` file, using [`.env.example`](./packages/server/.env.example)
    * At `packages/server` directory, run `npm run dev`
* Start React app: at `packages/web` directory, run `npm run start`

React web app will be served at `localhost:3000` by default
API server will be served at `localhost:8081`
Swagger doc for API server: `http://localhost:8081/v1/docs`