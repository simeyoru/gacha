Rails.application.routes.draw do
  root "gachas#index"
  resource :gachas, only: [:index, :create, :show, :new]
  post  "/gachas/edit"  => "gachas#edit"
end
