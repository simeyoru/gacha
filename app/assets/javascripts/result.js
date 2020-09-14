$(function result(){
  event.preventDefault();
  var val=$(".data").val();
      ssr = 0
      sr = 0
      r = 0
    for (let time = 0; time < val; time++) {
      rarity = Math.ceil( Math.random()*100 );  //1~100の範囲でランダムに数字を取得
        if (rarity <= 3){                       //確率３％
            ssr = ssr + 1
        }else if (rarity <= 18){                //確率１５％
            sr = sr + 1
        }else{                                  //確率８２％
            r = r + 1
      }
    }
  if(1 <= val){
    $('.result_form__2').append("result"+"<br>\n").fadeIn(2000); 
    //ガチャ結果の表示
    $('.result_form__2').append("SSR:" + ssr + "<br>\n").fadeIn(2000); 
    $('.result_form__2').append("SR:" + sr + "<br>\n").fadeIn(2000); 
    $('.result_form__2').append("R:" + r + "<br>\n").fadeIn(2000); 

    $('.result_form__2').append("確率" + "<br>\n").fadeIn(2000); 
    //ガチャ結果の確率の計算
    SSR = ((ssr / val) * 100).toFixed(1);
    SR =  ((sr / val) * 100).toFixed(1);
    R =   ((r / val) * 100).toFixed(1);

    //ガチャ結果の確率の表示
    $('.result_form__2').append("SSR:" + SSR+ "%<br>\n").fadeIn(2000); 
    $('.result_form__2').append("SR:" + SR+ "%<br>\n").fadeIn(2000); 
    $('.result_form__2').append("R:" + R+ "%<br>\n").fadeIn(2000); 
  }else{
    $('.result_form__2').append("入力エラー"+ "<br>\n"+"あなたの入力した内容に誤りがあります"+ "<br>\n"+"0より大きい値を入力してください");
  }
  })