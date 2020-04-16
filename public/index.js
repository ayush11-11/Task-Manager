$(function () {

  let taskList = $('#taskList')

  fetchTasks(function (tasks) {
      taskList.empty()
      
      for (task of tasks) {
          taskList.append(createTask(task))
      }
      
  })

   

})