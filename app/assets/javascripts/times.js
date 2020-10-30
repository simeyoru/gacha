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
    count = 0
    count_ssr = 0
    count_sr = 0
    count_r = 0
    console.log(val4)
    console.log(val5)
    console.log(val6)
			for (let time = 0; time < 1000000; time++) {
				rarity =  Math.random() * 100 ;  //1~100の範囲でランダムに数字を取得
        if (count_ssr != val) {
          if(rarity <= val1){											//ssr
            ssr = ssr + 1
            if (rarity <= val4){
              count_ssr += 1
            }
          }
          }else if(count_sr != val8){
            if (rarity <= (val1 + val2)){			//sr
              sr = sr + 1
              if (rarity <= (val1 + val5)) {
                count_sr += 1
              }
            }
          }else if (count_r != val9){
            if((rarity <= (val1 + val2 + val3))){		//r
              r = r + 1
              if (rarity <= (val1 + val2 + val6)) {
                count_r += 1
              }
            }
        }else{
          break;
        }
        count += 1
      }
			$('.result_form__4').append("result" + "<br>\n"); 
			$('.result_form__4').append("SSR:" + Number(ssr).toLocaleString() + "<br>\n"); 
			$('.result_form__4').append("SR:" + Number(sr).toLocaleString() + "<br>\n"); 
      $('.result_form__4').append("R:" + Number(r).toLocaleString()+ "<br>\n"); 
      $('.result_form__4').append(count + "回引くとあなたが欲しいキャラは全て当たります" + "<br>\n"); 
			$('.result_form__4').append("欲しいSSR:" + Number(count_ssr).toLocaleString() + "<br>\n"); 
			$('.result_form__4').append("欲しいSR:" + Number(count_sr).toLocaleString() + "<br>\n"); 
      $('.result_form__4').append("欲しいR:" + Number(count_r).toLocaleString() + "<br>\n"); 
			})    