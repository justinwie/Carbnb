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
    return(
      <div>
        
      </div>
    )
  }
})

module.exports = CarIndexItem;
