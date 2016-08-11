Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :cars
    resources :bookings
    resources :reviews
    resource :session
  end

  root "static_pages#root"
end
