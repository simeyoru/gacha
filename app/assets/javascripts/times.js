$(function times(){
	event.preventDefault();
    var val  = $(".data_ssr").val();
		var val1 = $('.SSR').val();
		var val2 = $('.SR').val();
		var val3 = $('.R').val();
		var val4 = $('.picup_ssr').val();
		var val5 = $('.picup_sr').val();
		var val6 = $('.picup_r').val();
    var val7 = $('.price').val();	
    var val8  = $(".data_sr").val();
    var val9  = $(".data_r").val();
    val  = Number(val);
		val1 = Number(val1); 
		val2 = Number(val2);
		val3 = Number(val3);
		val4 = Number(val4);
		val5 = Number(val5);
		val6 = Number(val6);
    val7 = Number(val7);
    val8 = Number(val8);
    val9 = Number(val9);
    ssr = 0         //排出されたssrの総数
    sr = 0          //排出されたsrの総数
    r = 0           //排出されたrの総数
    count = 0       //回数のカウント
    count_ssr = 0   //ssrのカウント
    count_sr = 0    //srのカウント
    count_r = 0     //rのカウント
			for (let time = 0; time < 1000000; time++) {
        rarity =  Math.random() * 100 ;  //1~100の範囲でランダムに数字を取得
        if (count_ssr == 0){
          val == 0
        }else if(count_sr == 0){
          val8 == 0
        }else if (count_r == 0){
          val9 == 0
        }
        if (count_ssr >= val && count_sr >= val8 && count_r >= val9){
          break;
        }else{
          if(rarity <= val1){											//ssr
            ssr += 1
            if (rarity <= val4 && val != 0 ){
              count_ssr += 1
            }
          }else if (rarity <= val1 + val2){			//sr
              sr += 1
              if (rarity <= val1 + val5 && val8 != 0){
                count_sr += 1
              }       
          }else if(rarity <= val1 + val2 + val3){		//r
            r += 1
            if (rarity <= val1 + val2 + val6 && val9 != 0){
              count_r += 1
            }
          }
            count += 1
        }
      }
			$('.result_form__4').append("result" + "<br>\n"); 
			$('.result_form__4').append("SSR:" + Number(ssr).toLocaleString() + "<br>\n"); 
			$('.result_form__4').append("SR:" + Number(sr).toLocaleString() + "<br>\n"); 
      $('.result_form__4').append("R:" + Number(r).toLocaleString()+ "<br>\n"); 
      $('.result_form__4').append(Number(count).toLocaleString() + "回引くとあなたが欲しいキャラは全て当たるかも？" + "<br>\n"); 
      $('.result_form__4').append("課金する金額は" + Number(count * val7 ).toLocaleString()+ "円です" + "<br>\n"); 
			$('.result_form__4').append("欲しいSSR:" + Number(count_ssr).toLocaleString() + "<br>\n"); 
			$('.result_form__4').append("欲しいSR:" + Number(count_sr).toLocaleString() + "<br>\n"); 
      $('.result_form__4').append("欲しいR:" + Number(count_r).toLocaleString() + "<br>\n"); 
			})    