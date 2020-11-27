Rails.application.routes.draw do
  devise_for :users,controllers:{    
     registrations: "users/registrations"   
  }
  root "gachas#index"
  resources :gachas, only: [:index, :new, :create, :show, :update, :edit]
  post  "/gachas/edit" ,to: "gachas#edit"
  resources :users, only: [:edit, :update]
  get  "/gachas/form/:id" ,to: "gachas#form",as: "form"
  post  "/gachas/result/:id" ,to: "gachas#result",as: "result"
  get  "/gachas/result/:id" ,to: "gachas#index"
  
  get '404', to: 'application#render_404'
  get '422', to: 'application#render_422'
  get '500', to: 'application#render_500'
  
end
