module.exports = {
  signUp(data, callback, error){
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: {user: data},
      success(resp){
        callback(resp)
      },
      error(xhr){
        let errors = xhr.responseJSON;
        error("signup", errors)
      }
    })
  },

  logIn(userData, callback, error){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: {user: userData},
      success(resp){
        callback(resp)
      },
      error(xhr){
        let errors = xhr.responseJSON;
        error("login", errors)
      }
    })
  },

  logOut(callback, error){
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      success(resp){
        callback(resp)
      },
      error: function(){
        console.log('Logout error in SessionApiUtil')
      }
    })
  }

}
