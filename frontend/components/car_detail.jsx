const React = require('react');
const CarStore = require('../stores/car_store')
const CarActions = require('../actions/car_actions')

const SessionStore = require('../stores/session_store')

const BookingForm = require('./booking_form')

const CarDetail = React.createClass({
  getInitialState(){
    return { car: {}, user: SessionStore.currentUser() };
  },

  componentDidMount(){
    CarStore.addListener(this._onChange)
    CarActions.fetchSingleCar(parseInt(this.props.params.carId));
  },

  _onChange(){
    const carId = parseInt(this.props.params.carId);
    const potentialCar = CarStore.find(carId);
    this.setState({ car: potentialCar });
  },

  render(){
    const car = this.state.car;
    const carImage = car.image_url;
    const image = {
      backgroundImage: 'url(' + carImage + ')'
    };

    return(

      <div className='car-detail-container'>
        <div className='booking-container'>
          <BookingForm car={car} />
        </div>




          <div className='carImage' style={image}>
          </div>

          <div className='car-text-details'>
            <h1 >
              {car.manufacturer} {car.model}
            </h1>

            <div className='car-details'>

              <h2>description</h2>
              <div className="carDesc">
                {car.description}
              </div>


              <h2>year</h2>
              <div className="carYear">
                {car.year}
              </div>


              <h2>color</h2>
              <div className="carColor">
                {car.color}
              </div>


              <h2>style</h2>
              <div className="carStyle">
                {car.style}
              </div>


              <h2>prices</h2>
              <div className="carPrice">
                ${car.price} per week
                  <br></br>
                ${car.price * 4} per month
              </div>

            </div>

            <div className='carReviews'>
              <h2>reviews</h2>
              <div>
              </div>

            </div>
        </div>
      </div>
    );
  }
});


module.exports = CarDetail;
