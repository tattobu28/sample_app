Rails.application.routes.draw do
  get "/test", to: 'statics#test'
  post "/test", to: 'statics#test'
end