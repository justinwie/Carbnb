const React = require('react');
const hashHistory = require('react-router').hashHistory;


const FeaturedCity = React.createClass({
  _handleClick(){
    debugger

    const coords = {
      lat: this.props.lat,
      lng: this.props.lng
    }

    hashHistory.push({
      pathname: '/cars/',
      query: coords
    });
  },

  render(){
    const style = {
      backgroundImage: 'url(' + this.props.img + ')'
    }

    return(
      <div className='root-featured-cities' style={style} onClick={this._handleClick}>
        <div className='featured-cities-header'>
          <h2>{this.props.city}</h2>
        </div>
      </div>
    )
  }
})

module.exports = FeaturedCity;
