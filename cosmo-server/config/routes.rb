Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :events
  root 'events#index'
  # #GET
  # get 'events/:id', to: 'events#show'
  # #POST
  # post 'events', to: 'events#create'
  # #PATCH
  # patch 'events/:id', to: 'events#update'
  # #DELETE



end
