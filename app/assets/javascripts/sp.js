$(function(){
  count_times = 1;
  times = 1;
  times2 = 2;
  $('#addForm').click(function(){
    let html =`<div class="p">${1 + count_times}体目  欲しい数:
    <input name="times[]" class="rate" max="1000" onsubmit="special();" placeholder="0" required="required" type="number" id="time">
    体
    確率:
    <input name="probability[]" class="rate" max="1000" onsubmit="special();" placeholder="0" required="required" type="number" id="time1" step="0.0001">
    %<br>
    </div>`
    $('.form_special_4').append(html)
    count_times +=1
    times += 2
    times2 +=2
  });
  $(document).on("click", "#existForm", function(){
    if (count_times != 1){
      $('.p').last().remove();
      count_times -=1
      times -= 2
      times2 -=2
    }
  }); 
});
