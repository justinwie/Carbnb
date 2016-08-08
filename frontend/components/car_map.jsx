const React = require('react');
const ReactDOM = require('react-dom');

const Link = require('react-router').Link;
const ErrorStore = require('../stores/error_store');

const CarActions = require('../actions/car_actions')
const CarStore = require('../stores/car_store')

const CarMap = React.createClass({

  createMarkers(){
    const cars = CarStore.all();

    const cars_arr = [];

    for (var index in cars){
      cars_arr.push(cars[index]);
      
    };

    cars_arr.forEach(car => {
      let marker = new google.maps.Marker({
        position: this.position(car.lat, car.lng),
        map: this.map
      });

      this.markers.push(marker);
    });

  },

  position(x, y){
    return {lat: x, lng: y};
  },

  componentDidMount(){
      this.markers = [];

      const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
      const mapOptions = {
        center: {lat: 40.76, lng: -73.97},
        zoom: 10
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);

      CarStore.addListener(this.createMarkers);
    },

  render(){
    return(
      <div className='map' ref='map'>

      </div>
    )
  }
})

module.exports = CarMap;
