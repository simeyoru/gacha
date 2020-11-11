var rate = function () {
  if($(".gacha_main__rate").find(".ddd").length){
    $('.ddd').remove();
  }else{
  var val1 = $('.SSR').val();
  var val2 = $('.SR').val();
  var val3 = $('.R').val();
  
  $('.btn--radius').append("<div class= 'ddd'>"+"SSR:"+val1+"%<br>\n</div>"); 
  $('.btn--radius').append("<div class= 'ddd'>"+"SR:"+val2+"%<br>\n</div>"); 
  $('.btn--radius').append("<div class= 'ddd'>"+"R:"+val3+"%<br>\n</div>"); 
  }
}

var pic = function () {
  if($(".gacha_main__rate").find(".add").length){
    $('.add').remove();
  }else{
  var val1 = $('.picup_ssr').val();
  var val2 = $('.picup_sr').val();
  var val3 = $('.picup_r').val();

  $('.btn--radius').append("<div class= 'add'>"+"SSR:"+val1+"%<br>\n</div>"); 
  $('.btn--radius').append("<div class= 'add'>"+"SR:"+val2+"%<br>\n</div>"); 
  $('.btn--radius').append("<div class= 'add'>"+"R:"+val3+"%<br>\n</div>"); 
  }
}