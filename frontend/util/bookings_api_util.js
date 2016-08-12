const BookingsApiUtil = {
  fetchUsersBookings(userId, cb){
    $.ajax({
      url: `api/bookings?user=${userId}`,
      type: 'GET',
      success(resp){
        cb(resp)
      }
    })
  },

  fetchCarsBookings(carId, cb){
    $.ajax({
      url: `api/bookings?car=${carId}`,
      type: 'GET',
      success(resp){
        cb(resp)
      }
    })
  },

  createBooking(bookingData, cb, success, error){
    $.ajax({
      url: 'api/bookings',
      type: 'POST',
      data: bookingData,
      success(resp){
        success(resp)
        cb(resp)
      },
      error(xhr){
        let errors = xhr.responseJSON;
        error("createBooking", errors)
      }
    })
  },

  deleteBooking(bookingId, cb){
    $.ajax({
      url: `api/bookings/${bookingId}`,
      type: 'DELETE',
      success(resp){
        cb(resp)
      }
    });
  }
};

module.exports = BookingsApiUtil;
