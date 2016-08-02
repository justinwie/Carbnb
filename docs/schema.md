# Schema Information

## cars
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
lat         | float     | not null
lng         | float     | not null
manufacturer| string    | not null
model       | string    | not null
year        | integer   | not null
style       | string    | not null
color       | string    | not null
price       | integer   | not null
image_url   | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
car_id      | integer   | not null, foreign key (references cars), indexed
title       | string    | not null
description | string    | not null
rating      | integer   | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
renter_id   | integer   | not null, foreign key (references users), indexed
car_id      | integer   | not null, foreign key (references cars), indexed
start_date  | datetime  | not null
end_date    | datetime  | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null
profile_img_url | string    | not null
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
