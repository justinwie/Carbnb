Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :cars
    resource :session
  end

  root "static_pages#root"
end
