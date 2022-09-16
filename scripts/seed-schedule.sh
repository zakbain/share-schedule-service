#!/bin/bash

curl -X 'POST' \
  'http://localhost:3000/users' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"firstName": "Zak", "lastName": "Bainazarov", "username": "zakbain", "email": "zakbain@gmail.com" }'

curl -X 'POST' \
  'http://localhost:3000/spaces' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"owner": "63250395643142ee5bb59a5b", "title": "Zak Backyard", "description": "A lusciouis backyard with lavender and grass" }'

curl -X 'POST' \
  'http://localhost:3000/availabilities' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"space": "632506af4faa62565ad28001", "startsAt": "2022-07-29T06:30:00.000Z", "endsAt": "2022-07-29T12:30:00.000Z" }'  
  
curl -X 'POST' \
  'http://localhost:3000/reservations' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"space": "632506af4faa62565ad28001", "startsAt": "2022-07-29T07:30:00.000Z", "endsAt": "2022-07-29T08:30:00.000Z" }'  
  