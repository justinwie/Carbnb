# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({
  fname: 'Guest',
  lname: 'ABC',
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


all_cars = {
  'jeep' => {
    manufacturer: 'Jeep',
    model: 'Wrangler',
    year: 2014,
    style: 'SUV',
    color: 'Green',
    price: 68,
    description: 'Affordable adventure!',
    image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/008/original/wrangler.jpg",
    owner_id: 1
  },
  'tesla' => {
    manufacturer: "Tesla",
    model: "Model S",
    year: 2014,
    style: "Sedan",
    color: "Black",
    price: 149,
    description: 'Driving a Tesla is a great experience, a smooth ride and it feels like you are driving something from the future. Free delivery for rentals of 1 week or more. Autopilot is active and amazing, single carpool lane access stickers, 3 row rear facing jump seats (allows up to 7 people in the car ( two must be kids 4-10 yrs old)), charging - free charging at all Tesla superchargers, takes about 45-1hr for full charge, can use normal charger with adapter (kept in trunk). I will also provide a home charger, 110 volt about 3 miles per hour, 220 outlet about 30 miles per hour',
    image: "https://s3.amazonaws.com/carbnb-dev/cars/images/000/000/012/original/tesla.png?1472687269",
    owner_id: 3
  },
  'cooper' => {
    manufacturer: "MINI",
    model: "Cooper",
    year: 2017,
    style: "Sedan",
    color: "Compact",
    price: 74,
    description: '2017 Mini Cooper S convertible fully loaded with: Harman Kardon sound system, rear view camera, heated seats, Sirius XM, upgraded rims, John Cooper Works steering wheel. Phone holder and charger cable available for your use!',
    image: "https://s3.amazonaws.com/carbnb-dev/cars/images/000/000/004/original/cooper.jpg?1472696303",
    owner_id: 1
  },
  'mustang' => {
    manufacturer: "Ford",
    model: "Mustang",
    year: 2012,
    style: "Convertible",
    color: "Grey",
    price: 65,
    description: 'A beautiful brand new convertible with only 9,000 miles.',
    image: "https://s3.amazonaws.com/carbnb-dev/cars/images/000/000/006/original/mustang.jpg?1472696430",
    owner_id: 3
  },
  'bmw' => {
    manufacturer: "BMW",
    model: "M4",
    year: 2016,
    style: "Coupe",
    color: "Metal Grey",
    price: 109,
    description: 'Thrilling to drive!',
    image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/007/original/bmw.jpg",
    owner_id: 3
  },
  'rover' => {
    manufacturer: "Range Rover",
    model: "Sport",
    year: 2016,
    style: "Full Size SUV",
    color: "Black and Grey",
    price: 139,
    description: 'Sporty yet sophisticated. A perfect car to get away for the weekend.',
    image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/011/original/rover.jpg",
    owner_id: 3
  },
  'nissan' => {
    manufacturer: "Nissan",
    model: "Altima",
    year: 2016,
    style: "Sedan",
    color: "Metallic Blue",
    price: 63,
    description: 'Great car that fits 5 comfortably. Perfect for comfortable driving.',
    image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/009/original/altima.jpg",
    owner_id: 3
  },
  'camry' => {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2010,
    style: "Sedan",
    color: "Black",
    price: 56,
    description: 'Features include: keyless pushstart, heating and cooling seats throughout the entire car, GPS navigation system, Bluetooth compatibility, spare tire, Sirius XM, AM/FM, CD changer, Economy-drive, Dual AC and Heating.',
    image: "https://s3.amazonaws.com/carbnb-dev/cars/images/000/000/002/original/camry.jpg?1472696262",
    owner_id: 2
  },
  'prius' => {
    manufacturer: "Toyota",
    model: "Prius",
    year: 2016,
    style: "Midsize",
    color: "Silver",
    price: 82,
    description: 'A Toyota Prius pre-loaded with technology: Bluetooth, USB Connections/AUX, Rear Camera, and tinted with privacy glass. It gets 50+ mileage per gallon, a very reliable car, practical, economical, safe, clean and well maintained.',
    image: "https://s3.amazonaws.com/carbnb-dev/cars/images/000/000/005/original/prius.jpg?1472696391",
    owner_id: 2
  },
  'f150' => {
    manufacturer: "Ford",
    model: "F-150",
    year: 2016,
    style: "Pickup truck",
    color: "Red",
    price: 42,
    description: 'Brand new F-150. Durable, capable, and America\'s most popular truck.',
    image: "http://s3.amazonaws.com/carbnb-dev/cars/images/000/000/010/original/f150.jpg",
    owner_id: 3
  }
}


nyc = [40.739, -73.99]
paris = [48.855449, 2.341032]
sf = [37.759, -122,446]
ldn = [51.511602, -0.135464]
amst = [52.365725, 4.895174]
seoul = [37.546509, 126.986107]
barc = [41.399093, 2.160331]
syd = [-33.897160, 151.205064]
tok = [35.716201, 139.713125]

cities = [nyc, paris, sf, ldn, amst, seoul, barc, syd, tok]

cities.each do |city|
  shuffled_cars = all_cars.to_a.sample(10).to_h
  shuffled_cars.each do |car|
    car[1][:lat] = city[0] + (0.04*rand*(rand(2)*2-1))
    car[1][:lng] = city[1] + (0.04*rand*(rand(2)*2-1))
    Car.create(car[1])
  end
end

Review.create({
  rating: 4,
  user_id: 3,
  car_id: 3,
  description: "Teslas are amazing! This one was clean, charged, and beautiful. Extremely fun to drive."
})

current_month = Date.today.month
current_day = Date.today.day

  i = 0
while i < 3
  (1..all_cars.length).each do |carID|
    random_start_day = rand(30 - current_day)
    random_end_day = random_start_day + rand(3) + 1
    month = ((current_day < 20) ? (current_month + i) : (current_month + i + 1))

    Booking.create({
      renter_id: (rand(3) + 1),
      car_id: carID,
      start_date: "2016-"+ month.to_s + "-" + random_start_day.to_s + "T00:00:00-04:00",
      end_date: "2016-"+ month.to_s + "-" + random_end_day.to_s + "T00:00:00-04:00"
    })
  end
  i += 1
end
