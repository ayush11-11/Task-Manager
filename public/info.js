function fetchTasks (done) {
  $.get('/todos', function (data) {
      done(data)
  })
}

function addNewTasks (title, descr, priority, duedate) {
  $.post('/todos', {
      title:title ,
      description: descr,
      priority: priority,
      dueDate:duedate
  }, function (data) {
      done(data)
  })
}
function addNewNotes(id,note){
  $.post('/todos/note/?id=1',{
    notetxt:note,
    id:id
  },function(data){
    done(data)
  })
}
function sortTaskDate(done){
  $.get('/todos/sort/date',function(data){
    done(data);
  })
}
function sortTaskPrio(done){
  $.get('/todos/sort/prio',function(data){
    done(data);
  })
}

$(document).on("click",'#sortDate',function() {
   
  sortTaskDate(function(tasks){
    console.log(' 2nd called')
    let taskList = $('#taskList')
    taskList.empty()
  for (task of tasks) {
    taskList.append(createTask(task))
  
  }
  })
   
})
$(document).on("click",'#sortPrio',function() {
   
  sortTaskPrio(function(tasks){
    
    let taskList = $('#taskList')
    taskList.empty()
  for (task of tasks) {
    taskList.append(createTask(task))
  
  }
  })
   
})

function createTask (tasks) {
  let listItem = `<li class ="list-group-item " data-toggle="collapse" data-target="#note" >${tasks.title}
  <form >
  <div class="form-check float-right">
    <label class="form-check-label" for="check1">
      <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" checked>uncompleted
    </label>
  </div>
  <div class="form-check float-right">
    <label class="form-check-label" for="check2">
      <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">completed
    </label>
  </div>
</li>
  <div class="form-group collapse" id="note">
  <textarea class="form-control " rows="2" ></textarea>
  <button type="button" class="btn btn-primary" id="${tasks.id}" onClick="reply_click(this.id)">Add Note</button>
  <ul class="list-group" id="note">
</div>`
   
  $('#taskList').append(listItem)    
}

