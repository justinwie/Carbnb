const React = require('react');
const CarStore = require('../stores/car_store');
const BookingActions = require('../actions/booking_actions');
const BookingStore = require('../stores/booking_store');
const BookingIndexItem = require('./booking_index_item');

const BookingIndex = React.createClass({
  getInitialState(){
    return { bookings: {} }
  },

  componentWillUpdate(){
    BookingActions.fetchCarsBookings(parseInt(this.props.car.id))
  },

  componentDidMount(){
    BookingStore.addListener(this._handleChange)
    BookingActions.fetchCarsBookings(parseInt(this.props.car.id))
  },


  _handleChange(){
    this.setState({ bookings: BookingStore.all() })
  },

  render(){
    let bookings_arr = [];
    for (var idx in this.state.bookings){
      bookings_arr.push(this.state.bookings[idx])
    }
    return(
      <div className='booking_index_item'>
        {
          bookings_arr.map(function(booking){
            return <BookingIndexItem key={booking.id} booking={booking} />
          })
        }
      </div>
    )
  }
});

module.exports = BookingIndex;
