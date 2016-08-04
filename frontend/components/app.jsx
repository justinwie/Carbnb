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
          <h2>Welcome back {SessionStore.currentUser().fname}! :)</h2>
          <input type="submit" value="logout" onClick={this._handleLogOut}></input>
        </div>
      )
    }
    else {
      return(
        <nav>
          <Link to="/login">Login</Link>
          <br></br>
          <Link to="/signup">Sign Up</Link>
        </nav>
      );
    }
  },

  render(){
    return(
      <div>
        <NavBar />
        {this.greeting()}
        {this.props.children}
      </div>
    )
  }
})


module.exports = App;
