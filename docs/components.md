## Component Hierarchy

* **App**
  * Navbar
  * Search
  * Car Index
    * Map
    * Car Item
    * Car Filter
  * Car Detail
    * Review Index
      * Review Item
    * Review Form
    * Map
    * Booking Form
  * Car Listing



## Routes

* **component:** `App` **path:** `/`
  * **component:** `CarIndex` **path:** index
  * **component:** `CarIndex` **path:** `cars`
    * **component:** `CarDetail` **path:** `cars/:carId`
  * **component:** `CarListing` **path:** `/newcarlisting`
