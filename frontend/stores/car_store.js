const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher')

const CarConstants = require('../constants/car_constants');

const CarStore = new Store(AppDispatcher);

let _cars = {}

const _resetAllCars = function(cars){
  _cars = {};

  cars.forEach(function(car){
    _cars[car.id] = car
  })
}

const _resetSingleCar = function(car){
  _cars[car.id] = car
}

const _removeCar = function(id){
  delete _cars[id]
}

CarStore.all = function(){
  return Object.assign({}, _cars);
};

CarStore.find = function(id){
  return _cars[id]
};

CarStore.__onDispatch = function(payload) {
  

  switch (payload.actionType) {
    case CarConstants.CARS_RECEIVED:
      _resetAllCars(payload.cars)
      this.__emitChange();
      break;

    case CarConstants.CAR_RECEIVED:
      _resetSingleCar(payload.car)
      this.__emitChange();
      break;

    case CarConstants.CAR_REMOVED:
      _removeCar(payload.id)
      this.__emitChange();
      break;
  }
};

module.exports = CarStore;
