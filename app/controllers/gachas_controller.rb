class GachasController < ApplicationController
  def index

	end

  def create
    @val = params.require(:times)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
    @val = params.require(:times)
    respond_to do |format|
      format.html
      format.json
    end
  end

end
