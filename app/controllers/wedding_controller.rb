class WeddingController < ApplicationController

  layout proc {|controller| controller.request.xhr? ? false: "application" }

end
