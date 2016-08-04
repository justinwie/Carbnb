const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = {};
let _form = "";

const _setErrors = function(payload) {
  _form = payload.form;
  _errors = payload.errors;
}

const _clearErrors = function() {
  _form = "";
  _errors = {};
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};

ErrorStore.errors = function (form) {
  if (form !== _form) {
    return {};
  }

  const result = {};
  for (let i in _errors) {
    result[i] = Array.from(_errors[i]);
  }

  return result;
};

ErrorStore.form = function() {
  return _form;
};


module.exports = ErrorStore;
