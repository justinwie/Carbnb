const CarConstants = require('../constants/car_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const CarApiUtil = require('../util/session_api_util');

const CarActions = {
  fetchAllCars(){

  },

  fetchSingleCar(id){
    CarApiUtil.fetchSingleCar(id, this.receiveSingleCar)
  },

  createCar(car){
    CarApiUtil.createCar(
      car,
      this.receiveSingleCar,
      ErrorActions.setErrors
    )
  },

  updateCar(car){
    CarApiUtil.updateCar(
      car,
      this.receiveSingleCar,
      ErrorActions.setErrors
    )
  },

  deleteCar(id){
    CarApiUtil.deleteCar(id, this.removeCar)
  },

  receiveAllCars(cars){
    AppDispatcher.dispatch({
      actionType: CarConstants.CARS_RECEIVED,
      cars: cars
    })
  },

  receiveSingleCar(car){
    AppDispatcher.dispatch({
      actionType: CarConstants.CAR_RECEIVED,
      car: car
    })
  },

  removeCar(id){
    AppDispatcher.dispatch({
      actionType: CarConstants.CAR_REMOVED,
      id: id
    })
  }
}

module.exports = CarActions;
