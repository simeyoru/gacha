$(function charges(){
	event.preventDefault();
		var val  = $(".data").val();
		var val1 = $('.SSR').val();
		var val2 = $('.SR').val();
		var val3 = $('.R').val();
		var val4 = $('.picup').val();
		var val5 = $('.price').val();
		val1 = Number(val1); 
		val2 = Number(val2);
		val3 = Number(val3);
		val4 = Number(val4);
		val5 = Number(val5);
		console.log(val4);
		console.log(val5);
				ssr = 0
				ssr1 = 0
				sr = 0
				r = 0
				money = Math.floor(val / val5)
			for (let time = 0; time < money; time++) {
				rarity =  Math.random()*100 ;  //1~100の範囲でランダムに数字を取得
				if(rarity <= val1){
						ssr = ssr + 1              
						if (rarity <= val4){
							ssr1 = ssr1 + 1
						}
				}else if (rarity <= (val1 + val2)){                //確率１５％
						sr = sr + 1
				}else{                                  //確率８２％
						r = r + 1
				}
			}
			//ガチャ結果の表示
			if(val5 <= val){
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