const React = require('react');
const CarIndexItem = require('./car_index_item')
const CarStore = require('../stores/car_store')
const CarActions = require('../actions/car_actions')

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

  render(){
    let cars_arr = []
    for (var idx in this.state.cars){
      cars_arr.push(this.state.cars[idx])
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
