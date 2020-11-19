$(function charges(){
	event.preventDefault();
		var val  = $(".data").val();	//課金する金額
		var val1 = $('.SSR').val();
		var val2 = $('.SR').val();
		var val3 = $('.R').val();
		var val4 = $('.picup_ssr').val();
		var val5 = $('.picup_sr').val();
		var val6 = $('.picup_r').val();
		var val7 = $('.price').val();		//一回あたりの値段
		val1 = Number(val1); 
		val2 = Number(val2);
		val3 = Number(val3);
		val4 = Number(val4);
		val5 = Number(val5);
		val6 = Number(val6);
		val7 = Number(val7);
		ssr = 0
		sr = 0
		r = 0
		picup_ssr = 0
		picup_sr = 0
		picup_r = 0
		money = Math.floor(val / val7)

		function append_count(rarity, count){
			return $('.result_form__3').append(`<span class= 'result_font_${rarity}'>`+`${rarity}`+ "</span>" + ":" + Number(count).toLocaleString() + "<br>\n"); 
		}
		function append(rarity, count){
			return $('.result_form__3').append("欲しい" + `<span class= 'result_font_${rarity}'>`+`${rarity}`+ "</span>"+ ":" + Number(count).toLocaleString() + "<br>\n"); 
		}
			for (let time = 0; time < money; time++) {
				rarity =  Math.random() * 100 ;  //1~100の範囲でランダムに数字を取得
				if(rarity <= val1){											//ssr
					ssr = ssr + 1              
					if (rarity <= val4){
						picup_ssr += 1
					}
				}else if (rarity <= (val1 + val2)){			//sr
					sr = sr + 1
					if (rarity <= (val1 + val5)) {
						picup_sr += 1
					}
				}else if((rarity <= (val1 + val2 + val3))){		//r
					r = r + 1
					if (rarity <= (val1 + val2 + val6)) {
						picup_r += 1
					}
				}
			}
			//ガチャ結果の表示
			$('.result_form__3').append("result" + "<br>\n"); 
			append_count("SSR", ssr);
			append_count("SR", sr);
			append_count("R", r);
			if (val4 != 0){
				append("SSR", picup_ssr);
			}
			if (val5 != 0){
				append("SR", picup_sr);
			}
			if (val6 != 0){
				append("R", picup_r);
			}
			$('.result_form__3').append(Number(val).toLocaleString() + "円課金して"+ "</span>" + money + "回引きました" + "<br>\n");
				if (val4 == 0 && val5 == 0 && val6 == 0) {
					$('.result_form__3').append("欲しいキャラの確率を設定すると"+"<br>\n"+"何体欲しいキャラが当たったか分かるようになるぞ！")
				}
				else if(picup_ssr + picup_sr + picup_r == 0) {
					$('.result_form__3').append("あなたの欲しいキャラは出ませんでした" +  "<br>\n" + "もう一度挑戦しよう!!")
				}else{
					$('.result_form__3').append("あなたが欲しいキャラは合計で" + Number(picup_ssr + picup_sr + picup_r).toLocaleString() + "体出ました!!"); 
				}
			})    