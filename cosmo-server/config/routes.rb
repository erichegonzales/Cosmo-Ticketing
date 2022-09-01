Rails.application.routes.draw do
  resources :bought_tickets
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :events
  resources :users
  resources :bought_tickets
  root 'events#index'
  get 'images', to: 'images#show_image'
  # #GET
  # get 'events/:id', to: 'events#show'
  # #POST
  # post 'events', to: 'events#create'
  # #PATCH
  # patch 'events/:id', to: 'events#update'
  # #DELETE



end
