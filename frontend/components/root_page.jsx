const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const NavBar = require('./navbar');
const FeaturedCity = require('./featured_city')


const RootPage = React.createClass({

  componentWillMount() {
    this.cities = {
          'New York': [40.740533, -73.998207, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468022846/New-York-Top-of-the-rock-black-white_pplbvr.jpg'],
          'Paris': [48.855449, 2.341032, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000516/paris-eiffeltowerviewsunsetview-500_rtt5aq.jpg'],
          'London': [51.511602, -0.135464, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000916/Tower_bridge_London_Twilight_-_November_2006_zssunr.jpg'],
          'Amsterdam': [52.365725, 4.895174, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000954/amsterdam2-sq_g7l4ti.jpg'],
          'Seoul': [37.546509, 126.986107, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000764/Seoul-Free-Easy_icpcsz.jpg'],
          'San Francisco': [37.7749, -122.4194, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000417/a-new-moroccan-restaurant-is-coming-to-san-francisco-_1107_40019880_1_14103245_500_bshn3x.jpg'],
          'Barcelona': [41.399093, 2.160331, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000791/barcelona-second_e2zpou.jpg'],
          'Sydney': [-33.897160, 151.205064, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000823/Sydney-Harbour-Bridge-Getty-Image-AA039819-500x500_d76yvy.jpg'],
          'Tokyo': [35.716201, 139.713125, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000850/tumblr_mm2gp6qJhl1re7fvvo1_500-5877_eqkblq.jpg']
    };
  },


  render(){
    return(
      <div>
        <div className='rootMessage'>
          <h3>Rent the Car</h3>
          <h1>Own the Adventure</h1>
        </div>

        <div className='rootFeatures'>
          <h1>Featured Cities</h1>

          <div className='rootCities'>
            {
              Object.keys(this.cities).map(city => {
                return <FeaturedCity key={city} city={city} img={this.cities[city][2]} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
})

module.exports = RootPage;
