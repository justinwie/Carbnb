const React = require('react');

const ReactDatePicker = require('./date_picker');

const HashHistory = require('react-router').hashHistory;
const CarStore = require('../stores/car_store');
const BookingActions = require('../actions/booking_actions');
const SessionStore = require('../stores/session_store');
const BookingStore = require('../stores/booking_store');



const BookingForm = React.createClass({
  getInitialState(){
    return { startDate: null, endDate: null, booked: false }
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

  _successfulBooking() {
    let user = SessionStore.currentUser();
    this.setState({ booked: true })
    alert(`Congrats ${user.fname}! Your ${this.props.car.manufacturer} ${this.props.car.model} will be ready from ${this.state.startDate._d.getMonth()+1}/${this.state.startDate._d.getDate()} to ${this.state.endDate._d.getMonth()+1}/${this.state.endDate._d.getDate()}`)
  },


  _handleSubmit(e){
    e.preventDefault();
    const user = SessionStore.currentUser();
    if (SessionStore.isUserLoggedIn()) {
      BookingActions.createBooking({
        renter_id: user.id,
        car_id: this.props.car.id,
        start_date: this.state.startDate.format(),
        end_date: this.state.endDate.format()
      }, this._successfulBooking);
    }
    else {
      alert('Please login before booking!')
    }
  },

  render(){
    const car = this.props.car;

    return(
      <div>
        <form className='booking-form' onSubmit={this._handleSubmit}>
          <h1>${car.price}</h1>
          <h2>per day</h2>

          <div className='booking-form-dates'>

            <div className='booking-form-datepicker'>
              <h3>From:</h3>
              <ReactDatePicker
                action={this.setStartDate}
                date={this.state.startDate}
                placeholder='mm/dd/yyyy'
              />
            </div>

            <div className='booking-form-datepicker'>
              <h3>Until:</h3>
              <ReactDatePicker
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
