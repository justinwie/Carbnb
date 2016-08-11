# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160811011606) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "renter_id",  null: false
    t.integer  "car_id",     null: false
    t.datetime "start_date", null: false
    t.datetime "end_date",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bookings", ["car_id"], name: "index_bookings_on_car_id", using: :btree
  add_index "bookings", ["renter_id"], name: "index_bookings_on_renter_id", using: :btree

  create_table "cars", force: :cascade do |t|
    t.float    "lat",          null: false
    t.float    "lng",          null: false
    t.string   "manufacturer", null: false
    t.string   "model",        null: false
    t.integer  "year",         null: false
    t.string   "style",        null: false
    t.string   "color",        null: false
    t.integer  "price",        null: false
    t.text     "description",  null: false
    t.string   "image_url"
    t.integer  "owner_id",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "cars", ["owner_id"], name: "index_cars_on_owner_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "car_id",      null: false
    t.text     "description", null: false
    t.integer  "rating",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["car_id"], name: "index_reviews_on_car_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email",           null: false
    t.string   "profile_img_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
