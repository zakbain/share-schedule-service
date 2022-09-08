#!/bin/bash

curl -X 'POST' \
  'http://localhost:3000/availabilities' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"spaceId": "0", "startsAt": "2022-07-29T06:30:00.000Z", "endsAt": "2022-07-29T12:30:00.000Z" }'  
  
curl -X 'POST' \
  'http://localhost:3000/reservations' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"spaceId": "0", "startsAt": "2022-07-29T07:30:00.000Z", "endsAt": "2022-07-29T08:30:00.000Z" }'  
  