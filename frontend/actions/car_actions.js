const CarConstants = require('../constants/car_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const CarApiUtil = require('../util/car_api_util.js');

const CarActions = {
  fetchAllCars(bounds){
    CarApiUtil.fetchAllCars(bounds, this.receiveAllCars)
  },

  fetchSingleCar(id){
    CarApiUtil.fetchSingleCar(id, this.receiveSingleCar)
  },

  createCar(car, cb){
    CarApiUtil.createCar(
      car,
      cb,
      ErrorActions.setErrors
    )
  },

  updateCar(car, cb){
    CarApiUtil.updateCar(
      car,
      cb,
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
  },

  createReview(data){
    CarApiUtil.createReview(data, this.receiveSingleCar)
  }
}

module.exports = CarActions;
