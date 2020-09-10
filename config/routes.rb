Rails.application.routes.draw do
  devise_for :users
  root "gachas#index"
  resources :gachas, only: [:index]
  post  "/gachas/edit" ,to: "gachas#edit"
  resources :users, only: [:edit, :update]
  get  "/gachas/form/:id" ,to: "gachas#form",as: "form"
  post  "/gachas/result/:id" ,to: "gachas#result",as: "result"
  get  "/gachas/result/:id" ,to: "gachas#index"
end
