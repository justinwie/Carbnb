const React = require('react');

const FeaturedCity = React.createClass({
  render(){
    const style = {
      backgroundImage: 'url(' + this.props.img + ')'
    }

    return(
      <div className='root-featured-cities' style={style} >
        <div className='featured-cities-header'>
          <h2>{this.props.city}</h2>
        </div>
      </div>
    )
  }
})

module.exports = FeaturedCity;
