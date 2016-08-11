const React = require('react');
const HashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');
const ModalStyles = require('../styles/modal_styles');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const SessionConstants = require('../constants/session_constants');
const hashHistory = require('react-router').hashHistory;

const ErrorActions = require('../actions/error_actions');

const SearchBar = require('./search_bar');


const NavBar = React.createClass({
  getInitialState() {
    return { showModal: false, modal: ""};
  },

  handleOpenModal(modal) {
    this.setState({ showModal: true, modal: modal });
  },

  handleCloseModal() {
    this.setState({ showModal: false });
  },

  handleLogout(e){
    e.preventDefault();
    SessionActions.logOut();
  },

  _handleLogoClick(e){
    e.preventDefault();
    
    hashHistory.push({
      pathname: '/',
    });
  },

  greeting() {
      if (SessionStore.isUserLoggedIn()) {
        return (
          <div>
            <hgroup className='header-group'>
              <div className='nav-bar-user group' id='user-button'>
                <li>

                  <button className='current_user_button'>
                    {SessionStore.currentUser().fname}
                  </button>

                  <ul className='user-menu'>
                    <li>Cars</li>
                    <li>Bookings</li>
                    <li onClick={this.handleLogout}>Log Out</li>
                  </ul>
                </li>
              </div>
            </hgroup>
        </div>
        );
      }

      else {
        return (
          <nav>
            <div className='nav-bar-buttons'>
              <button
                onClick={this.handleOpenModal.bind(this, SessionConstants.LOGIN)}
                className='login_nav_button'
              >Log In</button>

              <button
                onClick={this.handleOpenModal.bind(this, SessionConstants.SIGNUP)}
                className='signup_nav_button'
              >Sign Up</button>
            </div>
          </nav>
        );
      }
    },

    render() {
      let component = null;
      if (this.state.modal === SessionConstants.LOGIN) {
        component = <LoginForm closeModal={this.handleCloseModal} />;
      }
      else if (this.state.modal === SessionConstants.SIGNUP) {
        component = <SignupForm closeModal={this.handleCloseModal} />;
      }

      let modal = null;
      if (this.state.showModal) {
        modal = (
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            style={ModalStyles}
            className='modal'>
              {component}
          </Modal>
        );
      }

      return (
        <header className='nav_header'>
          <ul className='navbar group'>
            <li><button className='logo' onClick={this._handleLogoClick}>CarBnB</button></li>
            <SearchBar/>
            <li>{ this.greeting() }</li>
          </ul>
          {modal}
        </header>
      );
    }
})
module.exports = NavBar
