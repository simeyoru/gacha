class GachasController < ApplicationController
  before_action :form_params, only:[:show, :edit, :update, :form, :new, :result]
  def index
  end

  def show
    @selects = Rarity.order(updated_at: :desc).where(user_id:current_user).limit(5)
    @button = Rarity.order(updated_at: :desc).where(user_id:current_user).limit(1)
  end

  def edit
    @rarity = Rarity.find(params[:id])
    @selects = Rarity.find(@rarity.id)
  end

  def update
    @selects = Rarity.order(updated_at: :desc).where(user_id:current_user).limit(5)
    @rarity = Rarity.find(params[:id])
    @rarity_basic = @rarity.ssr
    @rarity.ssr = 200              #一旦ssrを10に変更
    if @rarity.update(rarity_params) 
      @rarity.ssr = @rarity_basic     #元の値に変更
      @rarity.update(rarity_params) 
      redirect_to root_path, notice: 'ガチャ情報を変更しました'
    else
      render :show
    end
  end
  
  def form
    @rarity = Rarity.order(updated_at: :desc).find_by(user_id:current_user)
    if @rarity.present?
      if @rarity.user_id == current_user.id
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
    if @rarity.price <= 0
      flash.now[:alert] = "回すガチャの金額は0よりも大きい値を入力してください"
      render :new 
    elsif @rarity.ssr < 0 || @rarity.sr< 0 || @rarity.r< 0 
      flash.now[:alert] = "排出率を0より小さくしないでください"
      render :new 
    elsif @rarity.price >= 1000
      flash.now[:alert] = "回すガチャの金額1000よりも小さい値を入力してください"
      render :new 
    elsif (@rarity.ssr + @rarity.sr + @rarity.r).round(3) != 100
      flash.now[:alert] = "回すガチャの排出率の合計を100にしてください"
      render :new
    elsif @rarity.ssr < @rarity.picup_ssr 
      flash.now[:alert] = "欲しいキャラの排出率が回すガチャより大きいです"
      render :new 
    elsif @rarity.sr < @rarity.picup_sr
      flash.now[:alert] = "欲しいキャラの排出率が回すガチャより大きいです"
      render :new
    elsif @rarity.r < @rarity.picup_r
      flash.now[:alert] = "欲しいキャラの排出率が回すガチャより大きいです"
      render :new
    else
      @rarity.save
      redirect_to root_path, notice: 'ガチャ情報が保存されました'
    end
  end

  def result
    @rarity = Rarity.order(updated_at: :desc).find_by(user_id:current_user)
    if request.path_info != session[:ref]
      session[:ref] = request.path_info
      if params[:times] == "" || nil 
        redirect_to form_path
      else
        if @form == 3
          @val = params.require(:times)
          @val2 = params.require(:times1)
          @val3 = params.require(:times2)
          respond_to do |format|
            format.html
            format.json
          end
        else
          @val = params.require(:times)
          respond_to do |format|
            format.html
            format.json
          end
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

  def form_params
    @form = params['id'].to_i
  end

end