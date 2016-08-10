const React = require('react');
const CarStore = require('../stores/car_store');
const CarActions = require('../actions/car_actions');
const hashHistory = require('react-router').hashHistory;


const CarIndexItem = React.createClass({
  _handleClick(){
    const carId = this.props.car.id;
    hashHistory.push('cars/' + carId);
  },

  render(){
    const car = this.props.car;
    return(
      <div className='car_index_item' key='car.id' onClick={this._handleClick}>
        <div className='car_image_container'>
          <div className='car_image'><img src={car.image_url}></img></div>
        </div>

        <div className='car_info'>
          {car.year} {car.manufacturer} {car.model}
        </div>
      </div>
    );
  }
});

module.exports = CarIndexItem;
