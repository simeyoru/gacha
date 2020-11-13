require 'rails_helper'
describe Rarity do
  describe '#new' do

    it "全ての項目の入力が存在すれば登録できること" do
      rarity = build(:rarity)
      expect(rarity).to be_valid
    end

    it "ssrがない場合は登録できないこと" do
      rarity = build(:rarity, ssr: nil)
      rarity.valid?
      expect(rarity.errors[:ssr]).to include("を入力してください")
    end

    it "srがない場合は登録できないこと" do
      rarity = build(:rarity, sr: nil)
      rarity.valid?
      expect(rarity.errors[:sr]).to include("を入力してください")
    end

    it "rがない場合は登録できないこと" do
      rarity = build(:rarity, r: nil)
      rarity.valid?
      expect(rarity.errors[:r]).to include("を入力してください")
    end

    it "picup_ssrがない場合は登録できないこと" do
      rarity = build(:rarity, picup_ssr: nil)
      rarity.valid?
      expect(rarity.errors[:picup_ssr]).to include("を入力してください")
    end

    it "picup_srがない場合は登録できないこと" do
      rarity = build(:rarity, picup_sr: nil)
      rarity.valid?
      expect(rarity.errors[:picup_sr]).to include("を入力してください")
    end

    it "picup_rがない場合は登録できないこと" do
      rarity = build(:rarity, picup_r: nil)
      rarity.valid?
      expect(rarity.errors[:picup_r]).to include("を入力してください")
    end

    it "priceがない場合は登録できないこと" do
      rarity = build(:rarity, price: nil)
      rarity.valid?
      expect(rarity.errors[:price]).to include("を入力してください")
    end

    it "priceが0以下は登録できないこと" do
      rarity = build(:rarity, price: "0")
      rarity.valid?
      expect(rarity.errors[:price]).to include("は1以上の値にしてください")
    end

    it "priceが1000以上は登録できないこと" do
      rarity = build(:rarity, price: "1000")
      rarity.valid?
      expect(rarity.errors[:price]).to include("は999以下の値にしてください")
    end
  end
end