Vakko::Application.routes.draw do
  root to: 'StaticPages#index' 
  
  get "couture/elie_saab"
  get "couture/gabriela_cadena"
  get "couture/georges_hobeika"
  get "couture/jay_ahr"
  get "couture/jenny_packham"
  get "couture/kaufmanfranco"
  get "couture/leonard"
  get "couture/lorena_sarbu"
  get "couture/marchesa_couture"
  get "couture/monique_lhuillier"
  get "couture/naeem_khan"
  get "couture/paule_ka"
  get "couture/romona_kaveza"
  get "couture/temperley"
  get "couture/vera_wang"
  get "couture/zac_posen"
  get "couture/alberto_makali"
  get "couture/alexis"
  get "couture/alice_by_temperley"
  get "couture/basiz"
  get "couture/camilla"
  get "couture/carmen_marc_valvo"
  get "couture/david_meister"
  get "couture/gemy_maalouf"
  get "couture/gh_by_georges_hobeika"
  get "couture/halston_heritage"
  get "couture/herve_leger"
  get "couture/marchesa_notte"
  get "couture/theia"
  get "couture/badgley_mishcka"
  
  get "wedding/vera_wang"
  get "wedding/monique_lhuillier"
  get "wedding/oscar_de_la_renta"
  get "wedding/zuhair_murad"
  get "wedding/marchesa"
  get "wedding/reem_acra"
  get "wedding/elie_by_elie_saab"
  get "wedding/romona_keveza"
  get "wedding/kenneth_pool"
  get "wedding/temperley"
  get "wedding/jenny_packham"
  get "wedding/inbal_dror"
  get "wedding/berta"
  get "wedding/roland_mouret"
  get "wedding/naeem_khan"
  get "wedding/bliss"
  get "wedding/legends_by_romona_keveza"
  get "wedding/lusan_mandongus"
  get "wedding/tadashi"
  get "wedding/theia"
  get "wedding/la_sposa"
  get "wedding/san_patrick"
  get "wedding/vakko_wedding"

  get 'bags/alberto_moretti'
  get 'bags/anya_hindmarch'
  get 'bags/balmain'
  get 'bags/brian_atwood'
  get 'bags/casadei'
  get 'bags/charlotte_olympia'
  get 'bags/coccinelle'
  get 'bags/elie_saab'
  get 'bags/emilio_pucci'
  get 'bags/emporio_armani'
  get 'bags/ermanno_scervino'
  get 'bags/fratelli_rossetti'
  get 'bags/fratelli_rossetti_one'
  get 'bags/giambattista_valli'
  get 'bags/gina'
  get 'bags/giorgio_armani'
  get 'bags/jm_cazabat'
  get 'bags/lancel'
  get 'bags/mary_katrantzou'
  get 'bags/monique_lhuillier'
  get 'bags/o_jour'
  get 'bags/oscar_de_la_renta'
  get 'bags/paule_ka'
  get 'bags/pedro_garcia'
  get 'bags/philipp_plein'
  get 'bags/pollini'
  get 'bags/pollini_studio'
  get 'bags/roberto_cavalli'
  get 'bags/rocio'
  get 'bags/santoni'
  get 'bags/serapian'
  get 'bags/sophia_webster'
  get 'bags/stuart_weitzman'
  get 'bags/v_73'
  get 'bags/versace'
  get 'bags/vicini'
  get 'bags/walter_steiger'

  get 'womens_shoes/alberto_moretti'
  get 'womens_shoes/anya_hindmarch'
  get 'womens_shoes/balmain'
  get 'womens_shoes/brian_atwood'
  get 'womens_shoes/casadei'
  get 'womens_shoes/charlotte_olympia'
  get 'womens_shoes/coccinelle'
  get 'womens_shoes/elie_saab'
  get 'womens_shoes/emilio_pucci'
  get 'womens_shoes/emporio_armani'
  get 'womens_shoes/ermanno_scervino'
  get 'womens_shoes/fratelli_rossetti'
  get 'womens_shoes/fratelli_rossetti_one'
  get 'womens_shoes/giambattista_valli'
  get 'womens_shoes/gina'
  get 'womens_shoes/giorgio_armani'
  get 'womens_shoes/jm_cazabat'
  get 'womens_shoes/lancel'
  get 'womens_shoes/mary_katrantzou'
  get 'womens_shoes/monique_lhuillier'
  get 'womens_shoes/o_jour'
  get 'womens_shoes/oscar_de_la_renta'
  get 'womens_shoes/paule_ka'
  get 'womens_shoes/pedro_garcia'
  get 'womens_shoes/philipp_plein'
  get 'womens_shoes/pollini'
  get 'womens_shoes/pollini_studio'
  get 'womens_shoes/roberto_cavalli'
  get 'womens_shoes/rocio'
  get 'womens_shoes/santoni'
  get 'womens_shoes/serapian'
  get 'womens_shoes/sophia_webster'
  get 'womens_shoes/stuart_weitzman'
  get 'womens_shoes/v_73'
  get 'womens_shoes/versace'
  get 'womens_shoes/vicini'
  get 'womens_shoes/walter_steiger'
  
  match '/bags' => 'StaticPages#bags', :as => 'bags'
  match '/chocolate' => 'StaticPages#chocolate'
  match '/collection' => 'StaticPages#collection'
  match '/collection-grid' => 'StaticPages#collection_grid', :as => 'collection_grid'
  match '/collection-men' => 'StaticPages#collection_men', :as => 'collection_men'
  match '/collection-woman' => 'StaticPages#collection_woman', :as => 'collection_woman'
  match '/corporate-book' => 'StaticPages#corporate_book', :as => 'corporate_book'
  match '/couture' => 'StaticPages#couture', :as => 'couture'
  match '/creative-industries-library' => 'StaticPages#creative_industries_library', :as => 'creative_industries_library'
  match "/cruise" => 'StaticPages#cruise'
  match '/espace_by_sky' => 'StaticPages#espace_by_sky'
  match '/fashion_center' => 'StaticPages#fashion_center'
  match '/group' => 'StaticPages#group', :as => 'group'
  match '/handkerchiefs' => 'StaticPages#handkerchiefs', :as => 'handkerchiefs'
  match '/heritage' => 'StaticPages#heritage'
  match '/home' => 'StaticPages#home'
  match '/library' => 'StaticPages#library'
  match '/lookbook_b' => 'StaticPages#lookbook_b', :as => 'lookbook_b'
  match '/lookbook-men' => 'StaticPages#lookbook_men', :as => 'lookbook_men'
  match '/made-to-measure' => 'StaticPages#made_to_measure', :as => 'made_to_measure'
  match '/mens-perfume' => 'StaticPages#mens_perfume', :as => 'mens_perfume'
  match '/mens-shoes' => 'StaticPages#mens_shoes', :as => 'mens_shoes'
  match '/monogram' => 'StaticPages#monogram', :as => 'monogram'
  match '/perfume' => 'StaticPages#perfume'
  match '/production-center' => 'StaticPages#production_center', :as => 'production_center'
  match '/scarves' => 'StaticPages#scarves', :as => 'scarves'
  match '/shirts-and-ties' => 'StaticPages#shirts_and_ties', :as => 'shirts_and_ties'
  match '/wedding' => 'StaticPages#wedding', :as => 'wedding'
  match '/womens-perfume' => 'StaticPages#womens_perfume', :as => 'womens_perfume'
  match '/womens-shoes' => 'StaticPages#womens_shoes', :as => 'womens_shoes'





  match '/templates' => 'StaticPages#templates', :as => 'templates'

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
