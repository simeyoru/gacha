class ApplicationController < ActionController::Base
def index
  @gachas = Gacha.all
end

end
