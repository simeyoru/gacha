class GachasController < ApplicationController
  def index
	end

  def form
    @form = params['id'].to_i
    if @form == 1
      render action: :form1
    else
      render action: :form2
    end
  end

  def result
    if params[:times] == "" || nil 
      if params['id'].to_i == 1
        redirect_to form_path
      else
        redirect_to form_path
      end
    else
      @val = params.require(:times)
      respond_to do |format|
        format.html
        format.json
      end
      @form = params['id'].to_i
      if @form == 1
        render action: :result1
      else
        render action: :result2
      end
    end
  end
end
