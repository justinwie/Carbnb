# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create({
  fname: 'Guest',
  lname: 'Doe',
  email: 'guest@email.com',
  password: 'password'
})

User.create({
  fname: 'Justin',
  lname: 'Wie',
  email: 'justin@gmail.com',
  password: 'hello123'
})

User.create({
  fname: 'Clara',
  lname: 'Ko',
  email: 'clara@gmail.com',
  password: 'hello123'
})


Car.create({
  lat: 40.76,
  lng: -73.97,
  manufacturer: 'Ford',
  model: 'Fusion',
  year: 2016,
  style: 'Compact',
  color: 'Red',
  price: 42,
  description: 'It gets excellent gas mileage, about 40 mpg on the highway. I bought new in 2012 and have not had any troubles with it. The bluetooth works with the stereo - I use it to listen to Spotify.',
  image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/001/original/focus.jpg?1472696126",
  owner_id: 1
})

Car.create({
  lat: 40.66,
  lng: -73.97,
  manufacturer: "Toyota",
  model: "Camry",
  year: 2010,
  style: "Sedan",
  color: "Black",
  price: 56,
  description: 'Features include: keyless pushstart, heating and cooling seats throughout the entire car, GPS navigation system, Bluetooth compatibility, spare tire, Sirius XM, AM/FM, CD changer, Economy-drive, Dual AC and Heating.',
  image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/002/original/camry.jpg?1472696262",
  owner_id: 2
})

Car.create({
  lat: 40.72,
  lng: -73.98,
  manufacturer: "Tesla",
  model: "Model S",
  year: 2014,
  style: "Sedan",
  color: "Black",
  price: 149,
  description: 'Driving a Tesla is a great experience, a smooth ride and it feels like you are driving something from the future. Free delivery for rentals of 1 week or more. Autopilot is active and amazing, single carpool lane access stickers, 3 row rear facing jump seats (allows up to 7 people in the car ( two must be kids 4-10 yrs old)), charging - free charging at all Tesla superchargers, takes about 45-1hr for full charge, can use normal charger with adapter (kept in trunk). I will also provide a home charger, 110 volt about 3 miles per hour, 220 outlet about 30 miles per hour',
  image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/012/original/tesla.png?1472687269",
  owner_id: 3
})

Car.create({
  lat: 40.7313423,
  lng: -74.0028996,
  manufacturer: "MINI",
  model: "Cooper",
  year: 2017,
  style: "Sedan",
  color: "Compact",
  price: 74,
  description: '2017 Mini Cooper S convertible fully loaded with: Harman Kardon sound system, rear view camera, heated seats, Sirius XM, upgraded rims, John Cooper Works steering wheel. Phone holder and charger cable available for your use!',
  image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/004/original/cooper.jpg?1472696303",
  owner_id: 1
})

Car.create({
  lat: 40.7253423,
  lng: -74.1,
  manufacturer: "Toyota",
  model: "Prius",
  year: 2016,
  style: "Midsize",
  color: "Silver",
  price: 82,
  description: 'A Toyota Prius pre-loaded with technology: Bluetooth, USB Connections/AUX, Rear Camera, and tinted with privacy glass. It gets 50+ mileage per gallon, a very reliable car, practical, economical, safe, clean and well maintained.',
  image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/005/original/prius.jpg?1472696391",
  owner_id: 2
})

Car.create({
  lat: 40.7,
  lng: -74.05,
  manufacturer: "Ford",
  model: "Mustang",
  year: 2012,
  style: "Convertible",
  color: "Grey",
  price: 65,
  description: 'A beautiful brand new convertible with only 9,000 miles.',
  image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/006/original/mustang.jpg?1472696430",
  owner_id: 3
})
