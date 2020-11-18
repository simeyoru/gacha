$(function(){
  count = 1;
  times = 1;
  times2 = 2;
  $('#addForm').click(function(){
    $('.form_special_4').append(`
    ${1 + count}体目  欲しい数:
    <input name="times[]" class="rate" max="1000" onsubmit="special();" placeholder="0" required="required" type="number" id="time">
    体
    確率:
    <input name="probability[]" class="rate" max="1000" onsubmit="special();" placeholder="0" required="required" type="number" id="time1">
    %<br>
    </div>`
    );
    count +=1
    times += 2
    times2 +=2
  });
});
$(function(){
var arrJson = $('.arr_json').val();
// arr_jsonをパースし配列にする
var arr = JSON.parse(arrJson);
// 確認用のログ出力
console.log(arr);
})