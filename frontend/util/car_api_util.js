const CarApiUtil = {
  fetchAllCars(bounds, callback){
    $.ajax({
      url: 'api/cars',
      type: 'GET',
      data: bounds,
      success(resp){
        callback(resp);
      }
    })
  },

  fetchUsersCars(id, callback){
    $.ajax({
      url: 'api/cars?user=' + id,
      type: 'GET',
      success(resp){
        callback(resp);
      }
    })
  },

  fetchSingleCar(id, callback){
    $.ajax({
      url: 'api/cars/' + id,
      type: 'GET',
      success(resp){
        callback(resp)
      }
    })
  },

  createCar(car, callback, error){
    $.ajax({
      url: 'api/cars/',
      type: 'POST',
      data: {car},
      success(resp){
        callback(resp)
      },
      error(xhr){
        let errors = xhr.responseJSON;
        error("createcar", errors)
      }
    })
  },

  updateCar(car, callback){
    $.ajax({
      url: `api/cars/${car.id}`,
      type: 'PATCH',
      data: {car},
      success(resp){
        callback(resp)
      }
    })
  },

  deleteCar(id, callback){
    $.ajax({
      url: 'api/cars/' + id,
      type: 'DELETE',
      success(resp){
        callback(resp)
      }
    })
  },

  createReview(review, callback){
    $.ajax({
      url: 'api/reviews',
      type: 'POST',
      data: {review},
      success(resp){
        callback(resp);
      }
    })
  }
}

module.exports = CarApiUtil;
