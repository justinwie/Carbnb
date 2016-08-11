const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher')
const BookingConstants = require('../constants/booking_constants');

const BookingStore = new Store(AppDispatcher);

let _bookings = {};

const _resetAllBookings = function(bookings){
  _bookings = {};
  for (var i in bookings) {
    _bookings[bookings[i].id] = bookings[i];
  }
}

const _removeBooking = function(booking) {
  delete _bookings[booking.id];
};

BookingStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BookingConstants.BOOKING_RECEIVED:
      _resetAllBookings(payload.bookings);
      this.__emitChange();
      break;

    case BookingConstants.BOOKING_REMOVED:
      _removeBooking(payload.id);
      this.__emitChange();
      break;
  }
};


module.exports = BookingStore;
