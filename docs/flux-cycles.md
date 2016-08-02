# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Car Cycles

### Car API Request Actions

* `fetchAllCars`
  0. invoked from `CarsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/cars` is called.
  0. `receiveAllCars` is set as the success callback.


* `fetchSingleCar`
  0. invoked from `CarDetail` `didMount`/`willReceiveProps`
  0. `GET /api/cars/:id` is called.
  0. `receiveSingleCar` is set as the success callback.

* `createCar`
  0. invoked from new car button `onClick`
  0. `POST /api/cars` is called.
  0. `receiveSingleCar` is set as the success callback.


* `updateCar`
  0. invoked from `CarForm` `onSubmit`
  0. `POST /api/cars` is called.
  0. `receiveSingleCar` is set as the success callback.

* `destroyCar`
  0. invoked from delete car button `onClick`
  0. `DELETE /api/cars/:id` is called.
  0. `removeCar` is set as the success callback.

### Cars API Response Actions

* `receiveAllCars`
  0. invoked from an API callback.
  0. `Car` store updates `_cars` and emits change.

* `receiveSingleCar`
  0. invoked from an API callback.
  0. `Car` store updates `_cars[id]` and emits change.

* `removeCar`
  0. invoked from an API callback.
  0. `Car` store removes `_cars[id]` and emits change.

### Store Listeners

* `CarsIndex` component listens to `Car` store.
* `CarDetail` component listens to `Car` store.


## Review Cycles

### Review API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/reviews` is called.
  0. `receiveAllReviews` is set as the success callback.


* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.



* `destroyReview`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/reviews/:reviewId` is called.
  0. `removeReview` is set as the success callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveSingleReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store removes `_reviews[id]` and emits change.

### Store Listeners

* `ReviewsIndex` component listens to `Review` Store
* `ReviewDetail` component listens to `Review` Store


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `CarSearchBar` `onChange` when there is text
  0. `GET /api/cars` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `CarSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.

## Booking Cycles

### Booking API Request Actions

* `fetchAllBookings`
  0. invoked from `BookingsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/bookins` is called.
  0. `receiveAllBookings` is set as the success callback.


* `fetchSingleBooking`
  0. invoked from `BookingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/bookings/:id` is called.
  0. `receiveSingleBooking` is set as the success callback.

* `createBooking`
  0. invoked from new booking button `onClick`
  0. `POST /api/bookings` is called.
  0. `receiveSingleBooking` is set as the success callback.


* `destroyBooking`
  0. invoked from delete booking button `onClick`
  0. `DELETE /api/bookings/:id` is called.
  0. `removeBooking` is set as the success callback.

### Bookings API Response Actions

* `receiveAllBookings`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings` and emits change.

* `receiveSingleBooking`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings[id]` and emits change.

* `removeBooking`
  0. invoked from an API callback.
  0. `Booking` store removes `_bookings[id]` and emits change.

### Store Listeners

* `BookingsIndex` component listens to `Booking` store.
* `BookingsForm` component listens to `Booking` store.
