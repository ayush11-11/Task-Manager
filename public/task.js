
$(function () {
let inpTitle=$('#inpTitle');
let inpDesc=$('#inpDescription');
var radioValue = $("input[name='gridRadios']:checked");
let dueDate=$("#dueDate");
let status=$("input[type='checkbox']").val();


function reply_click(clicked_id)
{
    console.log(clicked_id);
} 
  

$(document).on("click",'input:checkbox',function() {
    $('input:checkbox').not(this).prop('checked', false);
  });

$('#addTask').click(function () {
    addNewTasks(
    inpTitle.val(), 
    inpDesc.val(),
    radioValue.val(),
    dueDate.val()
,
      function (addedTask) {
          window.alert("Added " + addedTask.title + " to Database")
      }
  )
    })

})