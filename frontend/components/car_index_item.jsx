const React = require('react');
const CarStore = require('../stores/car_store');
const CarActions = require('../actions/car_actions');

const CarIndexItem = React.createClass({
  render(){
    return(
      <li>
        <p>Desc: {this.props.car.description}</p>
        <p>Latitude: {this.props.car.lat}</p>
        <p>Longitude: {this.props.car.lng}</p>
      </li>
    )
  }
})

module.exports = CarIndexItem;
