const React = require('react');
const Link = require('react-router').Link;
const ErrorStore = require('../stores/error_store');
const CarMap = require('./car_map')
const CarIndex= require('./car_index')


const Search = React.createClass({

  render(){
    return(
      <div>
          <div className='map_container'>
            <CarMap/>
          </div>

          <div>
            <CarIndex/>
          </div>

      </div>
    )
  }
})

module.exports = Search;
