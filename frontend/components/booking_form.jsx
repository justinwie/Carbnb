const React = require('react');

const DatePicker = require('./date_picker');
const moment = require('moment');

const HashHistory = require('react-router').hashHistory;
const CarStore = require('../stores/car_store');
const BookingActions = require('../actions/booking_actions');
const SessionStore = require('../stores/session_store');
const BookingStore = require('../stores/booking_store');

const BookingForm = React.createClass({
  getInitialState(){
    return { startDate: null, endDate: null }
  },

  componentWillReceiveProps(props) {
    this.setState( { bookings: this.props.bookings } );
  },

  setStartDate(date){
    this.setState({ startDate: date })
  },

  setEndDate(date){
    this.setState({ endDate: date })
  },

  _handleSubmit(){
    const user = SessionStore.currentUser();

    if (user) {
      BookingActions.createBooking({
        renter_id: user.id,
        car_id: this.props.car.id,
        start_date: this.state.start_date,
        end_date: this.state.end_date
      })
    }
  },

  render(){
    const car = this.props.car;

    return(
      <div>
        <form className='booking-form' onSubmit={this._handleSubmit}>
          <h1>${car.price}</h1>
          <h2>per week</h2>

          <div className='booking-form-dates'>

            <div className='booking-form-datepicker'>
              <h3>From:</h3>
              <DatePicker
                action={this.setStartDate}
                date={this.state.startDate}
                placeholder='mm/dd/yyyy'
              />
            </div>

            <div className='booking-form-datepicker'>
              <h3>Until:</h3>
              <DatePicker
                action={this.setEndDate}
                date={this.state.endDate}
                placeholder='mm/dd/yyyy'
              />
            </div>


          </div>


          <button className='bookButton' type='submit'>Book!</button>
        </form>
      </div>
    )
  }
})


module.exports = BookingForm;
