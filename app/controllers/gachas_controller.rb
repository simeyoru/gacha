class GachasController < ApplicationController
  before_action :form_params, only:[:show, :edit, :update, :form, :new, :result]
  # before_action :probability_params, only:[:result]
  def index
  end

  def show
    @selects = Rarity.order(updated_at: :desc).where(user_id:current_user).limit(5).offset(1)
    @button = Rarity.order(updated_at: :desc).where(user_id:current_user).limit(1)
  end

  def edit
    @rarity = Rarity.find(params[:id])
    @selects = Rarity.find(@rarity.id)
  end

  def update
    @selects = Rarity.order(updated_at: :desc).where(user_id:current_user).limit(5)
    @rarity = Rarity.find(params[:id])
    @rarity.touch
    redirect_to root_path, notice: 'ガチャ情報を変更しました'
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
    elsif @rarity.picup_ssr < 0 || @rarity.picup_sr< 0 || @rarity.picup_r< 0 
      flash.now[:alert] = "欲しいキャラの確率を0より小さくしないでください"
      render :new 
    elsif @rarity.price >= 100000
      flash.now[:alert] = "回すガチャの金額100,000よりも小さい値を入力してください"
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
    if @form == 4
      probability_params()
    end
    @rarity = Rarity.order(updated_at: :desc).find_by(user_id:current_user)
    if @form == 1
      if params[:times].to_i <= 0
        flash.now[:alert] ="0以下の値を入力しないでください"
        return render :form
      end
    elsif @form == 2
      if params[:times].to_i < @rarity.price
        flash.now[:alert] ="#{@rarity.price}より小さい値を入力しないでください"
        return render :form
      end
    elsif @form == 3
      if params[:times].to_i == 0 && params[:times1].to_i == 0 && params[:times2].to_i== 0
        flash.now[:alert] ="欲しいキャラクターの割合を全て０にしないでください"
        return render :form
      elsif params[:times].to_i < 0 || params[:times1].to_i < 0 || params[:times2].to_i < 0
        flash.now[:alert] = "0未満の値を入力しないでください"
        return render :form
      end
    end
    if @form == 3
      @val = params.require(:times)
      @val2 = params.require(:times1)
      @val3 = params.require(:times2)
      respond_to do |format|
        format.html
        format.json
      end
    elsif @form == 1 || @form == 2
      @val = params.require(:times)
      respond_to do |format|
        format.html
        format.json
      end
    end
    if request.path_info != session[:ref]
      session[:ref] = request.path_info
      if params[:times] == "" || nil 
        redirect_to form_path
      else
        @result_form = params['id'].to_i
      end
    else
      redirect_to root_path, alert:"ガチャ結果画面で再読み込みをしないでください"
      session[:ref] = nil
    end
  end

  private
  def rarity_params
    params.require(:rarity).permit(:ssr, :sr, :r, :picup_ssr, :picup_sr, :picup_r, :price).merge(user_id: current_user.id)
  end

  def form_params
    @form = params['id'].to_i
  end

  def probability_params
    i = 0
    @count = []                 #当たった数の配列
    @count_times = 0
    probability_next = []       #確率の配列
    params[:times].length.times do |times|
      @count.push(0)
    end
    @probability = 0
    params[:probability].length.times do |times|
      @probability += (params[:probability][i].to_i)
      probability_next.push(@probability)
      i += 1
    end
    if probability_next.last > 100
      redirect_to form_path ,alert:"確率の合計が100を超えています。"
    else
      @times = params[:times]
      judge = true
      i = 0
      while judge do
        probability = BigDecimal((rand(0.0..100.0)).to_s).ceil(1).to_f
        @count_times += 1
        probability_next.each_with_index do|probability1, j|
          if probability <= probability_next[j]
            @count[j] += 1
            break
          end
        end
        judge = false
        @times.each_with_index do |times, k|
          if @times[k].to_i > @count[k]
            judge = true
          end
        end
      end
    end
  end
end