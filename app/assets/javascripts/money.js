$(function charges(){
	event.preventDefault();
		var val=$(".data").val();
				ssr = 0
				ssr1 = 0
				sr = 0
				r = 0
				money = Math.floor(val / 300)
			for (let time = 0; time < money; time++) {
				rarity =  Math.random()*100 ;  //1~100の範囲でランダムに数字を取得
				if(rarity <= 3){
						ssr = ssr + 1              
						if (rarity <= 0){
							ssr1 = ssr1 + 1
						}
				}else if (rarity <= 18){                //確率１５％
						sr = sr + 1
				}else{                                  //確率８２％
						r = r + 1
				}
			}
			//ガチャ結果の表示
			if(300 <= val){
			$('.result_form__3').append("result"+"<br>\n"); 
			$('.result_form__3').append("SSR:" + ssr + "<br>\n"); 
			$('.result_form__3').append("欲しいキャラ:" + ssr1 + "<br>\n"); 
			$('.result_form__3').append("SR:" + sr + "<br>\n"); 
			$('.result_form__3').append("R:" + r + "<br>\n"); 
			$('.result_form__3').append("確率" + "<br>\n"); 
			$('.result_form__3').append("あなたの狙うキャラは"+val+"円で"+money+"回引いて"+ssr1+"体出ました！"); 
			}else{
			$('.result_form__3').append("入力エラー"+ "<br>\n"+"あなたの入力した内容に誤りがあります"+ "<br>\n"+"300以上の値を入力してください");
			}
			})    