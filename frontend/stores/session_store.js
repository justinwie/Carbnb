const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher')
const SessionConstants = require('../constants/session_constants')

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserHasBeenFetched = false

const _login = function(user) {
  _currentUser = user;
  _currentUserHasBeenFetched = true;
}

const _logout = function() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.user)
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout(payload.user)
      this.__emitChange();
      break;
  };
};

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};


module.exports = SessionStore;
