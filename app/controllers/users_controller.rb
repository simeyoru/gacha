class UsersController < ApplicationController
  
  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to root_path,notice: "ユーザ情報を編集しました"
    else
      if @user.name == ""
        redirect_to edit_user_path, alert:"Nameを入力してください"
      elsif @user[:name].length >= 9
        redirect_to edit_user_path, alert:"Nameは8文字以内で入力してください"
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
