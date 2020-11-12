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
    function append(rarity, count){
      return $('.result_form__4').append("欲しい" + `<span class= 'result_font_${rarity}'>`+`${rarity}`+ "</span>"+ ":" + Number(count).toLocaleString() + "<br>\n"); 
    }
    function append_count(rarity, count){
      return $('.result_form__4').append(`<span class= 'result_font_${rarity}'>`+`${rarity}`+ "</span>" + ":" + Number(count).toLocaleString() + "<br>\n"); 
    }

    for (let time = 0; time < 1000000; time++) {
      if (val4 == 0 && val5 == 0 && val6 == 0){
        break;
      }
      rarity =  Math.random() * 100 ;  //1~100の範囲でランダムに数字を取得
      if (count_ssr >= val && count_sr >= val8 && count_r >= val9 ){
        break;
      }else{
        if(rarity <= val1){											//ssr
          ssr += 1
          if (rarity <= val4 && val != 0){
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
      append_count("SSR",ssr)
			append_count("SR",sr)
      append_count("R",r)
      $('.result_form__4').append(Number(count).toLocaleString() + "回引くとあなたが欲しいキャラは全て当たるかも？" + "<br>\n"); 
      $('.result_form__4').append("課金する金額は" + Number(count * val7 ).toLocaleString()+ "円です" + "<br>\n");
      if (val != 0){
        append("SSR",count_ssr);
      }
      if (val8 != 0){
        append("SR",count_sr);
      }
      if (val9 != 0){
        append("R",count_sr);
      }
			})    