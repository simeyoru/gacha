$(function result(){
  event.preventDefault();
  var val=$('.data').val();
  var val1 = $('.SSR').val();
  var val2 = $('.SR').val();
  var val3 = $('.R').val();
  val1 = Number(val1); 
  val2 = Number(val2);
  val3 = Number(val3);
  ssr = 0
  sr = 0
  r = 0
  function append_count(rarity, count){
    return $('.result_form__2').append(`<span class= 'result_font_${rarity}'>`+`${rarity}`+ "</span>" + ":" + (count) + "<br>\n"); 
  }
  function append(rarity, probability){
    return $('.result_form__2').append(`<span class= 'result_font_${rarity}'>`+`${rarity}`+ "</span>"+ ":" + (probability) + "%<br>\n"); 
  }
    for (let time = 0; time < val; time++) {
      rarity = (Math.random()*100).toFixed(1);  //1~100の範囲でランダムに数字を取得
        if (rarity <= val1){                     
            ssr = ssr + 1
        }else if (rarity <= (val1 + val2)){             
            sr = sr + 1
        }else{                                 
            r = r + 1
      }
    }
    $('.result_form__2').append("result"+"<br>\n");
    //ガチャ結果の表示
    append_count("SSR", ssr);
    append_count("SR", sr);
    append_count("R", r);
    $('.result_form__2').append("確率" + "<br>\n"); 
    //ガチャ結果の確率の計算
    SSR = ((ssr / val) * 100).toFixed(1);
    SR =  ((sr / val) * 100).toFixed(1);
    R =   ((r / val) * 100).toFixed(1);
    append("SSR", SSR);
    append("SR", SR);
    append("R", R);
  })