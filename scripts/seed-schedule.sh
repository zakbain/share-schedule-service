#!/bin/bash

# curl -X 'POST' \
#   'http://localhost:3000/users' \
#   -H 'accept: */*' \
#   -H "Content-Type: application/json" \
#   -d '{"firstName": "Zak", "lastName": "Bainazarov", "username": "zakbain", "email": "zakbain@gmail.com" }'

# curl -X 'POST' \
#   'http://localhost:3000/spaces' \
#   -H 'accept: */*' \
#   -H "Content-Type: application/json" \
#   -d '{"owner": "63250395643142ee5bb59a5b", "title": "Zak Backyard", "description": "A lusciouis backyard with lavender and grass" }'

curl -X 'POST' \
  'http://localhost:3001/availabilities' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"space": "63250b8e6e707078908e018b", "startsAt": "2022-07-29T06:30:00.000Z", "endsAt": "2022-07-29T12:30:00.000Z" }'  

curl -X 'POST' \
  'http://localhost:3001/availabilities' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"space": "63250b8e6e707078908e018b", "startsAt": "2022-07-30T06:30:00.000Z", "endsAt": "2022-07-30T12:30:00.000Z" }'  
  
curl -X 'POST' \
  'http://localhost:3001/reservations' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"space": "63250b8e6e707078908e018b", "startsAt": "2022-07-29T07:30:00.000Z", "endsAt": "2022-07-29T08:30:00.000Z" }'  

curl -X 'POST' \
  'http://localhost:3001/reservations' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"space": "63250b8e6e707078908e018b", "startsAt": "2022-07-30T07:30:00.000Z", "endsAt": "2022-07-30T08:30:00.000Z" }'  
  