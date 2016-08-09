const React = require('react');
const hashHistory = require('react-router').hashHistory;

const SearchBar = React.createClass({
  getInitialState(){
    return { text: 'Search Here'};
  },

  componentDidMount(){
    const input = document.getElementById('searchTextField');
    window.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(window.autocomplete, 'place_changed', this._handleSubmit)
  },

  _handleSubmit() {
    const address = window.autocomplete.getPlace();
    if (!address) {
      return;
    }

    const coords = {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng()
    }

    hashHistory.push({
      pathname: '/cars/',
      query: coords
    });
  },

  render() {
    return (
      <div className='search-bar-container'>

        <div className='search-icon'>
        </div>

        <input
          ref='searchField'
          id='searchTextField'
          type='text'
          placeholder={this.state.text}
          className='search-location-bar'
        />

      </div>
    )
  }
});


module.exports = SearchBar;
