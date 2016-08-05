const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const NavBar = require('./navbar');

const App = React.createClass({

  componentDidMount() {
   SessionStore.addListener(this.forceUpdate.bind(this));
 },

  _handleLogOut(e){
    e.preventDefault();
    SessionActions.logOut();
  },

  greeting(){
    if (SessionStore.isUserLoggedIn()) {
      return(
        <div>
          <h1>Welcome Back, {SessionStore.currentUser().fname}! :)</h1>
        </div>
      )
    }
    else {
      return(
        <nav>
          <br></br>
        </nav>
      );
    }
  },

  render(){
    return(
      <div className='root'>

        <div className='rootNavBar'>
          <NavBar />
        </div>

        <div className='welcomeMsg'>
          {this.greeting()}
          {this.props.children}
        </div>

      </div>
    )
  }
})


module.exports = App;
