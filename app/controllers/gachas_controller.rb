class GachasController < ApplicationController
  def index
  end
  
  def form
    @result = Rarity.order(updated_at: :desc).limit(1).find_by(params[:user_id])
    @form = params['id'].to_i
    session[:ref] = nil
  end

  def rarity_create
    @result = Rarity.create(user_id:current_user.id, ssr:params[:ssr], sr:params[:sr], r:params[:r], 
      picup_ssr:params[:picup_ssr], picup_sr:params[:picup_sr], picup_r:params[:picup_r], price:params[:price])
    if !@result.save
      if @result.ssr + @result.sr  + @result.r  != 100
        flash.now[:alert] ="回すガチャの排出率の合計を100にしてください"
        render gachas_rate_path
      end
      if @result.ssr < @result.picup_ssr || @result.sr < @result.picup_sr || @result.r < @result.picup_r
        flash.now[:alert] ="欲しいキャラの排出率が回すガチャより大きいです"
        render gachas_rate_path
      end
    else
      redirect_to root_path, notice: 'ガチャ情報が保存されました'
    end
  end

  def result
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
      end
    else
      redirect_to root_path
      session[:ref] = nil
    end
  end
end


