var today = new Date();
var yesterday = new Date(today.setDate(today.getDate() - 1)); 
$(document).ready(function(){

  ///Date time
  $('#datepicker').datepicker({
language: 'en',
format: 'yyyy-MM-dd',
defaultDate:yesterday
  });

  $('#dueDate').value=yesterday

 });