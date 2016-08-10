const React = require('react');
const ReactDOM = require('react-dom');

const Link = require('react-router').Link;
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

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

  _searchLocationListener(){
    const map = this.map;

    window.autocomplete.addListener('place_changed', () => {
      const address = window.autocomplete.getPlace().geometry.location
      const coords = {
        lat: address.lat(),
        lng: address.lng()
      }
      map.setCenter(coords);
      map.setZoom(12);
    });
  },

  componentDidMount(){
      this.markers = [];

      const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
      const mapOptions = {
        center: {lat: this.props.lat, lng: this.props.lng},
        zoom: 12
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);

      CarStore.addListener(this.createMarkers);
      this._searchLocationListener();
    },

  render(){
    return(
      <div className='map' ref='map'>
      </div>
    );
  }
});

module.exports = CarMap;
