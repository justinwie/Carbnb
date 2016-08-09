const React = require('react');
const CarStore = require('../stores/car_store')
const CarActions = require('../actions/car_actions')

const SessionStore = require('../stores/session_store')

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
    const potentialCar = (CarStore.find(carId) || {});
    return { car: potentialCar };
  },

  render(){
    const car = this.state.car;
    
    return(
      <div className='car-detail-container'>

        <div className='car-details'>

          <h1 className="cardetailtest">
            hello world
            {car.model}
          </h1>

        </div>


      </div>
    );
  }
});


module.exports = CarDetail;
