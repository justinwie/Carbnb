const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const BookingConstants = require('../constants/booking_constants');
const BookingApiUtil = require('../util/bookings_api_util');

const BookingActions = {

  fetchUsersBookings(userId){
    BookingApiUtil.fetchUsersBookings(userId, this.receiveBookings)
  },

  fetchCarsBookings(carId){
    BookingApiUtil.fetchCarsBookings(carId, this.receiveBookings)
  },

  createBooking(booking, cb){
    BookingApiUtil.createBooking(
      {booking},
      cb,
      ErrorActions.setErrors
    )
  },

  deleteBooking(id){
    BookingApiUtil.deleteBooking(
      id,
      this.removeBooking
    )
  },

  receiveBookings(bookings){
    AppDispatcher.dispatch({
      actionType: BookingConstants.BOOKING_RECEIVED,
      bookings: bookings
    })
  },

  removeBooking(id){
    AppDispatcher.dispatch({
      actionType: BookingConstants.BOOKING_REMOVED,
      id: id
    })
  }
};
module.exports = BookingActions;
