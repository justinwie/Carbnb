const React = require('react');
const CarIndexItem = require('./car_index_item')
const CarStore = require('../stores/car_store')
const CarActions = require('../actions/car_actions')
const CarMap = require('./car_map')

const CarIndex = React.createClass({
  getInitialState(){
    return { cars: {} }
  },

  componentDidMount(){
    CarStore.addListener(this._handleChange);
    CarActions.fetchAllCars();
  },

  _handleChange(){
    this.setState({ cars: CarStore.all() })
  },

  position(x, y){
    return {lat: x, lng: y};
  },

  render(){
    let cars_arr = []

    for (var idx in this.state.cars){
      let lat = this.state.cars[idx].lat;
      let lng = this.state.cars[idx].lng;
      // if (this.props.inBounds({ lat: lat, lng: lng }) ){
        cars_arr.push(this.state.cars[idx])
      // }
    }

    return(
      <div className='car_index'>
        {
          cars_arr.map(function(car){
            return <CarIndexItem car={car} key={car.id}/>
          })
        }
      </div>
    );
  }
});

module.exports = CarIndex;
