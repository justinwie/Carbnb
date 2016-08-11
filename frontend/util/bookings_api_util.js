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

  createBooking(bookingData, cb, error){
    $.ajax({
      url: 'api/bookings',
      type: 'POST',
      data: bookingData,
      success(resp){
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
