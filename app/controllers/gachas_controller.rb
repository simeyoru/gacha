class GachasController < ApplicationController
  def index
  end
  
  def form
    @result = Rarity.order(updated_at: :desc).limit(1).find_by(params[:user_id])
    @form = params['id'].to_i
    if @form == 1
      render action: :form1
    else
      render action: :form2
    end
    session[:ref] = nil
  end

  def rarity_create
    @result = Rarity.create(user_id:current_user.id, ssr:params[:ssr],sr:params[:sr],r:params[:r],picup:params[:picup],price:params[:price])
    if @result.save
      redirect_to root_path
    else
      render gachas_rate_path
    end
  end

  def result
    # binding.pry
    @result = Rarity.order(updated_at: :desc).limit(1).find_by(params[:user_id])
    if request.path_info != session[:ref]
      session[:ref] = request.path_info
      if params[:times] == "" || nil 
        redirect_to form_path
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
    else
      redirect_to root_path
      session[:ref] = nil
    end
  end
end


