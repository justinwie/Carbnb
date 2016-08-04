const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signUp(formData){
    SessionApiUtil.signUp(
      formData,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logIn(formData){
    SessionApiUtil.logIn(
      formData,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logOut(){
    SessionApiUtil.logOut(this.removeCurrentUser);
  },

  // fetchCurrentUser(complete){
  //   SessionApiUtil.fetchCurrentUser(this.receiveCurrentUser, complete);
  // },

  receiveCurrentUser(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    })
  },

  removeCurrentUser(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    })
  },
}


module.exports = SessionActions;
