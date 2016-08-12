# CarBnB

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

CarBnB is a web application inspired by AirBnB that will be built using Ruby on Rails and React.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Search for cars by available cities/dates
- [ ] Select a specific car with further filters (location, availability, etc.) and viewing these cars on a map
- [ ] View a specific car and its details and reviews and request to book
- [ ] Finalize the transaction with a payment option
- [ ] User profiles, including past and future rentals
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication
- [ ] host on Heroku
- [ ] create new project
- [ ] authentication backend setup
- [ ] set up flux cycle for frontend auth
- [ ] user signup/signin components
- [ ] blank landing component after signin
- [ ] style front end auth


### Phase 2: Cars Model, API, and components (1 days, W1 Th 6pm)

**Objective:** Cars can be created, read, edited and destroyed through
the API.

- [ ] Cars CRUD API
- [ ] Cars seed
- [ ] Cars index
- [ ] Car item detail


### Phase 3: Map, Filters, NavBar, and Search Components (2 day, W2 Mon 6pm)

**Objective:** Cars can be searched by location, availability, and filtered.

- [ ] Maps component
- [ ] Filters Component
- [ ] Style Map and Filters
- [ ] NavBar Component
- [ ] Search Component


### Phase 4: Profile, Booking, Review, and ReviewIndex Components (1 day, W2 Tu 6pm)

**Objective:** Cars can be booked and reviewed. Profiles can be viewed.

- [ ] Profile component
- [ ] Style the Profile
- [ ] Booking Component
- [ ] Style the Bookings
- [ ] Review Component
- [ ] ReviewIndex Component
- [ ] Style the Reviews

### Phase 5: Landing Page (1 day, W2 We 6pm)

**objective:** Landing page will have car visuals and a guest login button.

- [ ] Landing Page
- [ ] Style Landing Page

### Phase 6: - Host Cars (1 day, W2 Th 6pm)

**objective:** Cars can be hosted by the user

- [ ] Style profile page
- [ ] Polish the user experience


### Bonus Features (TBD)
- [ ] Instant-book
- [ ] Messaging
- [ ] Guidebooks
- [ ] Rental history
- [ ] Autoclicks into the first input field
