# CarBnB

carbnb-jw.herokuapp.com

CarBnB is a full-stack web application inspired by AirBnb.

It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

![image of splash page] [splash-page1]
[splash-page1]: docs/Screenshots/CarBnB_GIF.gif

## Features & Implementation

### Car Rendering

  Cars are stored in the database through a `cars` table that contains the columns `first name`, `last name`, `manufacturer`, `model`, `style`, `year`, `image`, `description`, `price`, `color`, `owner_id`,`lat`, and `lng`. The users and cars table are joined through `owner_id`.

  `CarIndexItem` and `CarDetails` use `image` to render a picture of each car. `CarIndexItem` also contains basic details about the car. `CarDetails` contain more in-depth information about the car along with booking and reviews.

![image of car index][car-detail]

[car-detail]: docs/Screenshots/CarDetails.png

`CarsIndex` render method:

```javascript
  render() {
    return (
      <div className='car_index'>
        {
          cars_arr.map(function(car){
            return <CarIndexItem car={car} key={car.id}/>
          })
        }
      </div>
    );  
  }
```

### Search

Search utilizes the Google Maps API and uses the car's `lat` and `lng` attributes to create a marker on the map. The search bar is implemented with Google Places API - specifically, Place Autocomplete. A listener is set on the autocomplete bar and after a user types in an address or a city, the latitude and longitude are extracted from the address information and sent as params to the map component. The map component then generates of a viewport based on those coordinates and creates a marker for each of the cars. A marker also contains basic information through a click.

![image of search] [search-screenshot]
[search-screenshot]: docs/Screenshots/Search.png


### Bookings

Bookings are stored in the database through a `bookings` join table that contains the columns `start_date`, `end_date`, `car_id`, and `renter_id`. Bookings belong to both the car and user that is renting.

Every time `CarDetail` is rendered, the `BookingForm` is also rendered. Users are only allowed to book a car if they are logged in (regulated by the `SessionStore`) and cars are booked by the selection of a start date and end date.



### Reviews

Reviews are stored in the database through a `reviews` table that contains the columns `car_id`, `user_id`, `description`, and `rating`. Reviews belong to both the car and the user that wrote it.

On the frontend, the `CarDetails` component renders `ReviewsIndex` which is composed of all of the car's reviews. Each review is rendered with the `Review` component. There is no need for a `ReviewStore` because the reviews are dependent on the individual car so it is taken care of every time `fetchCar(id)`is called.



## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for CarBnb are outlined below:

### User/Host Profiles

I plan to allow the user to view their cars, view their bookings, and edit their cars through the account page.

### Direct Messaging

Another feature I would like to implement is messaging, allowing for the user to contact and communicate with car hosts.
