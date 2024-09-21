
let tasks = [
  { text: 'Complete UI/UX Design Course Module', completed: false },
  { text: "Prepare for 'Talk to Temi' Instagram Live", completed: true }
];


function updateTaskList() {
  let taskTable = document.querySelector('.tsk-table');
  taskTable.innerHTML = ''; 
  
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    
    
    let taskIcon = '';
    let taskStyle = '';
    let buttonStyle = '';
    let buttonText = '';
    let buttonClass = '';
    
    if (task.completed) {
      taskIcon = 'tick-circle.png';
      taskStyle = 'text-decoration: line-through; color: #959595;';
      buttonStyle = 'background-color: #137F3F; color: white;';
      buttonText = 'Completed';
      
    } else {
      taskIcon = 'record.png';
      taskStyle = '';
      buttonStyle = '';
      buttonText = 'Delete Task';
      buttonClass = 'btnn1';
    }
    
    let taskHtml = '<div class="one">' +
      '<div class="tsk-sec">' +
      '<img src="' + taskIcon + '" alt="An icon" class="icon2" data-position="' + i + '">' +
      '<p style="' + taskStyle + '">' + task.text + '</p>' +
      '</div>' +
      '<button class="'+ buttonClass +'" data-position ="' + i + '" style="' + buttonStyle + '">' + buttonText + '</button>' +
      '</div>';
    
    taskTable.innerHTML = taskTable.innerHTML + taskHtml;
  }

  document.getElementById('totalCount').textContent = tasks.length;
  let completedCount = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completedCount++;
    }
  }
  document.getElementById('completedCount').textContent = completedCount;
}

updateTaskList();

document.getElementById('btnAdd').onclick = function () {
  let taskAdded = document.getElementById('newTask').value;
  if (taskAdded === '') {
    alert('Invalid input. Please write a task you want to add.');
    return;
  }
  
  tasks.push({ text: taskAdded, completed: false });
  
  updateTaskList();
  
  document.getElementById('newTask').value = '';
};

document.querySelector('.tsk-table').addEventListener('click', function (event) {
  if (event.target.classList.contains('icon2')) {
    let index = event.target.getAttribute('data-position');
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
  }
  
  if (event.target.classList.contains('btnn1')) {
    let index = event.target.getAttribute('data-position');
    tasks.splice(index, 1);
    updateTaskList();
  }
});

