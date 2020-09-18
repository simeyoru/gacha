Rails.application.routes.draw do
  devise_for :users
  root "gachas#index"
  resources :gachas, only: [:index, :create]
  post  "/gachas/edit" ,to: "gachas#edit"
  resources :users, only: [:edit, :update]
  get  "/gachas/form/:id" ,to: "gachas#form",as: "form"
  post  "/gachas/result/:id" ,to: "gachas#result",as: "result"
  get  "/gachas/result/:id" ,to: "gachas#index"
  get  "/gachas/rate" ,to: "gachas#rate"
  post  "/gachas/rarity-create" ,to: "gachas#rarity_create"

end
