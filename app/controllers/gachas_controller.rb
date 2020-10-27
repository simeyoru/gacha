class GachasController < ApplicationController
  def index
  end
  
  def form
    @rarity = Rarity.order(updated_at: :desc).find_by(id:current_user)
    binding.pry
    if @rarity.user_id == current_user.id
      if @rarity.present?
        @form = params['id'].to_i
        session[:ref] = nil
      else
        redirect_to root_path, alert:"ガチャ情報を入力してください"
      end
    else
      redirect_to root_path, alert:"ガチャ情報を入力してください"
    end
  end

  def new
    @rarity = Rarity.new
  end

  def create
    @rarity = Rarity.new(rarity_params)
    if @rarity.ssr + @rarity.sr + @rarity.r != 100
      flash.now[:alert] = "回すガチャの排出率の合計を100にしてください"
      render :new and return
    elsif @rarity.ssr <= @rarity.picup_ssr && @rarity.sr <= @rarity.picup_sr && @rarity.r <= @rarity.picup_r
      flash.now[:alert] = "欲しいキャラの排出率が回すガチャより大きいです"
      render :new and return
    else
      @rarity.save
      redirect_to root_path, notice: 'ガチャ情報が保存されました'
    end
  end


  def result
    @rarity = Rarity.order(updated_at: :desc).limit(1).find_by(params[:user_id])
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
        @result_form = params['id'].to_i
      end
    else
      redirect_to root_path, alert:"ガチャ結果画面で再読み込みをしないでください"
      session[:ref] = nil
    end
  end

  private
  def rarity_params
    params.permit(:ssr, :sr, :r, :picup_ssr, :picup_sr, :picup_r, :price).merge(user_id: current_user.id)
  end
end


