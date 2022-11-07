# Share Schedule Service

## Description
Backend Service for managing space availabilities and reservations

## Installation

```bash
$ yarn install
```

## Pre-requisite
```bash
$ docker-compose up -d
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Interactive Resources & Documentation
- Interactive GraphQl UI at http://localhost:3001/graphql
- Swagger Endpoint - http://localhost:3001/api 

## Using MongoDB

Mongo is configured using docker-compose.yml

Using powershell, connect to mongo:
```bash
docker exec -it share-schedule-service_mongo_1 mongosh -u root -p example
```

## Helpful commands
Generate controller or service inside module named module1
```bash
nest g controller1 module1
nest g service1 module1
```

## License

Nest is [MIT licensed](LICENSE).
