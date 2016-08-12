const React = require('react');
const BookingActions = require('../actions/booking_actions');
const BookingStore = require('../stores/booking_store');

const BookingIndexItem = React.createClass({
  render(){
    const booking = this.props.booking;
    const start = booking.start_date.slice(5,10) + '-' + booking.start_date.slice(0,4)
    const end = booking.end_date.slice(5,10) + '-' + booking.end_date.slice(0,4)
    return(
      <div className='booking-info'>
        {start} to {end}
      </div>
    );
  }
});

module.exports = BookingIndexItem;
