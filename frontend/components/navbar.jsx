const React = require('react');
const HashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');
const ModalStyles = require('../styles/modal_styles');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions');


const NavBar = React.createClass({
  getInitialState() {
    Modal.setAppElement('body');
    return { showModal: false, modal: ""};
  },

  handleOpenModal(modal) {
    this.setState({ showModal: true, modal: modal });
  },

  handleCloseModal() {
    this.setState({ showModal: false });
  },

  handleLogOut(e){
    e.preventDefault();
    SessionActions.logOut();
  },

  greeting() {
      if (SessionStore.isUserLoggedIn()) {
        return (
          <hgroup className='header-group'>
            <div className='nav-bar-user' id='user-button'>
              <span>{SessionStore.currentUser().fname}</span>
              <ul className='user-menu'>
                <li onClick={this.handleLogout}>Log Out</li>
              </ul>
            </div>
          </hgroup>
        );
      } else {
        return (
          <nav className='login-signup'>
            <div className='nav-bar-buttons'>
              <button
                onClick={this.handleOpenModal.bind(this, "Log In")}
                className='loginbutton'
              >Log In</button>

              <button
                onClick={this.handleOpenModal.bind(this, "Sign Up")}
                className='signupbutton'
              >Sign Up</button>
            </div>
          </nav>
        );
      }
    },


    render() {
      let component;
      if (this.state.modal === "Log In") {
        component = <LoginForm close={this.handleCloseModal}/>;
      } else if (this.state.modal === "Sign Up") {
        component = <SignupForm close={this.handleCloseModal}/>;
      }

      let modal;
      if (this.state.showModal) {
        modal = (
          <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} style={ModalStyles} className='modal'>
            {component}
          </Modal>
        );
      }

      return (
        <div>
          <header>
            <button className='logo'>CarBnB</button>
            { this.greeting() }
          </header>
          {modal}
        </div>
      );
    }
})
module.exports = NavBar
