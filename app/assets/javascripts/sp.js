$(function(){
  count_times = 1;
  times = 1;
  times2 = 2;
  $('#addForm').click(function(){
    $('.form_special_4').append(`
    ${1 + count_times}体目  欲しい数:
    <input name="times[]" class="rate" max="1000" onsubmit="special();" placeholder="0" required="required" type="number" id="time">
    体
    確率:
    <input name="probability[]" class="rate" max="1000" onsubmit="special();" placeholder="0" required="required" type="number" id="time1">
    %<br>
    </div>`
    );
    count_times +=1
    times += 2
    times2 +=2
  });
});