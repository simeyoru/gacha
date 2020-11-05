// $(function(){
//   function buildHTML(message){
//     if ( message.image ) {
//       let html = 
//       `<div class="gacha_main__rate">
//       <button class="btn btn--orange btn--radius" onclick="rate()" type="button">
//       提供割合<br>
//       </button>
//       </div>`
//       let html =
//       `<div class="gacha_main__rate">
//       <button class="btn btn--orange btn--radius" onclick="rate()" type="button">
//       提供割合<br>
//       </button>
//       <div class="ddd">SSR:${val1}}<br>
//       </div><div class="ddd">SR:${val2}<br>
//       </div><div class="ddd">R:${val3}<br>
//       </div></div>`
//     };
//   }
  // var rate = function () {
  //   var val1 = $('.SSR').val();
  //   var val2 = $('.SR').val();
  //   var val3 = $('.R').val();
  //   console.log("111")
  //   $(this).toggleClass("clicked");
  //   $('.ddd').remove();
  //   $('.gacha_main__rate').append("<div class= 'ddd'>"+"SSR:"+val1+"%<br>\n</div>"); 
  //   $('.gacha_main__rate').append("<div class= 'ddd'>"+"SR:"+val2+"%<br>\n</div>"); 
  //   $('.gacha_main__rate').append("<div class= 'ddd'>"+"R:"+val3+"%<br>\n</div>"); 
  // }
// });


  var rate = function () {
    var val1 = $('.SSR').val();
    var val2 = $('.SR').val();
    var val3 = $('.R').val();

    $('.ddd').remove();
    $('.gacha_main__rate').append("<div class= 'ddd'>"+"SSR:"+val1+"%<br>\n</div>"); 
    $('.gacha_main__rate').append("<div class= 'ddd'>"+"SR:"+val2+"%<br>\n</div>"); 
    $('.gacha_main__rate').append("<div class= 'ddd'>"+"R:"+val3+"%<br>\n</div>"); 
  }

  var pic = function () {
    var val1 = $('.picup_ssr').val();
    var val2 = $('.picup_sr').val();
    var val3 = $('.picup_r').val();

    $('.ddd').remove();
    $('.gacha_main__rate').append("<div class= 'ddd'>"+"SSR:"+val1+"%<br>\n</div>"); 
    $('.gacha_main__rate').append("<div class= 'ddd'>"+"SR:"+val2+"%<br>\n</div>"); 
    $('.gacha_main__rate').append("<div class= 'ddd'>"+"R:"+val3+"%<br>\n</div>"); 
  }
  // });