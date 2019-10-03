Rails.application.routes.draw do
  resources :favorites
  resources :cities
  resources :users
  get '/main', to: 'users#main', as: 'main'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
