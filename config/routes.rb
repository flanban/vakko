Vakko::Application.routes.draw do
  root to: 'StaticPages#index' 
  
  match '/home' => 'StaticPages#home'

  match '/collection' => 'StaticPages#collection'

  match '/collection-grid' => 'StaticPages#collection_grid', :as => 'collection_grid'
  
    match '/lookbook_b' => 'StaticPages#lookbook_b', :as => 'lookbook_b'

  match '/wedding' => 'StaticPages#wedding'

  match "/cruise" => 'StaticPages#cruise'

  match '/espace_by_sky' => 'StaticPages#espace_by_sky'

  match '/perfume' => 'StaticPages#perfume'

  match '/chocolate' => 'StaticPages#chocolate'

  match '/library' => 'StaticPages#library'

  match '/heritage' => 'StaticPages#heritage'

  match '/fashion_center' => 'StaticPages#fashion_center'

  match '/vakkorama' => 'StaticPages#vakkorama'

  match '/v2k' => 'StaticPages#v2k'

  match '/wcollection' => 'StaticPages#wcollection'

  match '/power_fm' => 'StaticPages#power_fm'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
