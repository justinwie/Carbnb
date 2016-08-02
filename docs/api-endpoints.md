# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `POST /session`
- `DELETE /session`
- `GET /session/new`

### Cars

- `GET /api/cars`
  - Cars index/search
- `POST /api/cars`
- `GET /api/cars/:id`
- `PATCH /api/cars/:id`
- `DELETE /api/cars/:id`

### Bookings

- `GET /api/cars/:car_Id/bookings`
- `POST /api/cars/:car_Id/bookings`
- `PATCH /api/bookings/:booking_id`
- `DELETE /api/bookings/:booking_id`

### Reviews
- A car's reviews will be included in the car show template
- `POST /api/cars/:car_Id/reviews`
- `DELETE /api/cars/:car_Id/reviews/:review_Id`
