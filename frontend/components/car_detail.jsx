const React = require('react');
const ReactDOM = require('react-dom');

const CarStore = require('../stores/car_store');
const CarActions = require('../actions/car_actions');

const SessionStore = require('../stores/session_store');

const BookingForm = require('./booking_form');
const ReviewForm = require('./review_form');
const Reviews = require('./reviews');
const BookingIndex = require('./booking_index');


const CarDetail = React.createClass({
  getInitialState(){
    return { car: {}, user: SessionStore.currentUser() };
  },

  componentDidMount(){
    this.storeListener = CarStore.addListener(this._onChange);
    CarActions.fetchSingleCar(parseInt(this.props.params.carId));

    this.infowindow = new google.maps.InfoWindow();
    this.markers = [];
    this.mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
  },

  componentWillUnmount(){
    this.storeListener.remove();
  },

  createMarkers(){
    if (this.state.car) {
      const car = this.state.car;

      let marker = new google.maps.Marker({
        position: this.position(car.lat, car.lng),
        map: this.map,
        carId: car.id
      });

      const content = `<div className='iw-container' id='iw-pic-container'>
                        <img id='iw-pic' src=${car.imageurl} className='iw-pic'/>
                          <div >
                              <li id='iw-title'>${car.year} ${car.manufacturer} ${car.model}</li>
                              <li id='iw-price'>$${car.price} / day</li>
                          </div>
                      </div>`
      }
    },

  _onChange(){
    const carId = parseInt(this.props.params.carId);
    const potentialCar = CarStore.find(carId);
    this.setState({ car: potentialCar });
  },

  position(x, y){
    return {lat: x, lng: y};
  },

  render(){
    const car = this.state.car;

    if (car.lat && car.lng) {
      const mapOptions = {
        center: {lat: this.state.car.lat, lng: this.state.car.lng},
        zoom: 17
      };

      this.map = new google.maps.Map(this.mapDOMNode, mapOptions);
      this.createMarkers();
    }

    let image = {};
    if (this.state.car.imageurl) {
      image = {
        backgroundImage: 'url(' + this.state.car.imageurl + ')'
      };
    };


    const allReviews = (car.reviews || []);
    let reviewItem = 'none yet';

    if (allReviews.length > 0) {
      reviewItem = allReviews.map(function(singleReview){
        return <Reviews key={singleReview.id} review={singleReview} />;
      });
    };

    return(
      <div className='car-detail-container'>

          <div className='booking-container'>
            <BookingForm car={car} />
          </div>

          <div className='bookingsIndex'>
            <h1>Currently Booked Dates:</h1>
            <BookingIndex car={car} />
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
                  ${car.price} per day
                </div>
                <h2>reviews</h2>
                <div className='carReview'>
                  { reviewItem }
                </div>
            </div>

            <div className='carReviewFormContainer'>
              <ReviewForm car={car}/>
            </div>
          </div>

          <div className='carDetailMap' ref='map'>
          </div>

        </div>
    );
  }
});


module.exports = CarDetail;
