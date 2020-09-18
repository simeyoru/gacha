var rate = function () {
  var val1 = $('.SSR').val();
  var val2 = $('.SR').val();
  var val3 = $('.R').val();

  $('.ddd').remove();
  $('.gacha_main__rate').append("<div class= 'ddd'>"+"SSR:"+val1+"%<br>\n</div>"); 
  $('.gacha_main__rate').append("<div class= 'ddd'>"+"SR:"+val2+"%<br>\n</div>"); 
  $('.gacha_main__rate').append("<div class= 'ddd'>"+"R:"+val3+"%<br>\n</div>"); 
}
