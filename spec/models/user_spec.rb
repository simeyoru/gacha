require 'rails_helper'
describe User do
  describe '#create' do
    it "全ての項目の入力が存在すれば登録できること" do
      user = build(:user)
      expect(user).to be_valid
    end

    it "nameがない場合は登録できないこと" do
      user = build(:user, name: nil)
      user.valid?
      expect(user.errors[:name]).to include("を入力してください")
    end

    it "nameは9文字以上は登録できない" do
      user = build(:user, name: "111111111")
      user.valid?
      expect(user.errors[:name]).to include("は8文字以内で入力してください")
    end

    it "nameは8文字以下は登録できる" do
      user = build(:user, name: "111111111")
      user.valid?
      expect(user.errors[:name]).to include("は8文字以内で入力してください")
    end

    it "存在するnameは登録できない" do
      user = create(:user)
      another_user = build(:user, name: user.name)
      another_user.valid?
      expect(another_user.errors[:name]).to include("はすでに存在します")
    end

    it "emailがない場合は登録できないこと" do
      user = build(:user, email: nil)
      user.valid?
      expect(user.errors[:email]).to include("を入力してください")
    end

    it "存在するemailは登録できない" do
      user = create(:user)
      another_user = build(:user, email: user.email)
      another_user.valid?
      expect(another_user.errors[:email]).to include("はすでに存在します")
    end

    it "passwordがない場合は登録できないこと" do
      user = build(:user, password: nil)
      user.valid?
      expect(user.errors[:password]).to include("を入力してください")
    end

    it "password_confirmationがpasswordと一致しなければ登録できない" do
      user = build(:user, password_confirmation: "")
      user.valid?
      expect(user.errors[:password_confirmation]).to include("とパスワードの入力が一致しません")
    end

    it "passwordが6文字以上であれば登録できること" do
      user = build(:user, password: "123456", password_confirmation: "123456")
      expect(user).to be_valid
    end

    it "パスワードが5文字以下は登録できない " do
      user = build(:user, password: "00000", password_confirmation: "00000")
      user.valid?
      expect(user.errors[:password]).to include("は6文字以上で入力してください")
    end

  end
end