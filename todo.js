// Existing tasks with an added completed property for demonstration
let tasks = [
  { text: 'Complete UI/UX Design Course Module', completed: false },
  { text: "Prepare for 'Talk to Temi' Instagram Live", completed: true }
];

// Function to update the task list
function updateTaskList() {
  let taskTable = document.querySelector('.tsk-table');
  taskTable.innerHTML = ''; // Clear existing tasks
  
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    
    // Set task icon and text styles based on the completion status
    let taskIcon = '';
    let taskStyle = '';
    let buttonStyle = '';
    let buttonText = '';
    
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
    }
    
    // Build the task HTML string
    let taskHtml = '<div class="one">' +
      '<div class="tsk-sec">' +
      '<img src="' + taskIcon + '" alt="An icon" class="icon2" data-position="' + i + '">' +
      '<p style="' + taskStyle + '">' + task.text + '</p>' +
      '</div>' +
      '<button class="btnn1" data-index="' + i + '" style="' + buttonStyle + '">' + buttonText + '</button>' +
      '</div>';
    
    // Append new task HTML
    taskTable.innerHTML += taskHtml;
  }

  // Update total and completed count
  document.getElementById('totalCount').textContent = tasks.length;
  let completedCount = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completedCount++;
    }
  }
  document.getElementById('completedCount').textContent = completedCount;
}

// Initialize the task list on page load
updateTaskList();

// Add task button click handler
document.getElementById('btnAdd').onclick = function () {
  let taskAdded = document.getElementById('newTask').value;
  if (taskAdded === '') {
    alert('Invalid input. Please write a task you want to add.');
    return;
  }
  
  // Add new task to the array
  tasks.push({ text: taskAdded, completed: false });
  
  // Update the task list
  updateTaskList();
  
  // Clear input field
  document.getElementById('newTask').value = '';
};

// Event delegation for task completion and deletion
document.querySelector('.tsk-table').addEventListener('click', function (e) {
  if (e.target.classList.contains('icon2')) {
    // Toggle task completion
    let index = e.target.getAttribute('data-index');
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
  }
  
  if (e.target.classList.contains('btnn1')) {
    // Delete task
    let index = e.target.getAttribute('data-index');
    tasks.splice(index, 1);
    updateTaskList();
  }
});




// // Existing tasks with an added completed property for demonstration
// let tasks = [
//   { text: 'Complete UI/UX Design Course Module', completed: false },
//   { text: "Prepare for 'Talk to Temi' Instagram Live", completed: false }
// ];

// // Function to update the task list
// function updateTaskList() {
//   let taskTable = document.querySelector('.tsk-table');
//   taskTable.innerHTML = ''; // Clear existing tasks
  
//   for (let i = 0; i < tasks.length; i++) {
//     let task = tasks[i];
//     let taskHtml = '<div class="one">' +
//       '<div class="tsk-sec">' +
//       '<img src="' + (task.completed ? 'tick-circle.png' : 'record.png') + '" alt="An icon" class="icon2" data-index="' + i + '">' +
//       '<p style="' + (task.completed ? 'text-decoration: line-through; color: #959595;' : '') + '">' + task.text + '</p>' +
//       '</div>' +
//       '<button class="btnn1" data-index="' + i + '" style="' + (task.completed ? 'background-color: #137F3F; color: white;' : '') + '">' + (task.completed ? 'Completed' : 'Delete Task') + '</button>' +
//       '</div>';
    
//     taskTable.innerHTML += taskHtml; // Append new task HTML
//   }

//   // Update total and completed count
//   document.getElementById('totalCount').textContent = tasks.length;
//   let completedCount = tasks.filter(task => task.completed).length;
//   document.getElementById('completedCount').textContent = completedCount;
// }

// // Initialize the task list on page load
// updateTaskList();

// // Add task button click handler
// document.getElementById('btnAdd').onclick = function () {
//   let taskAdded = document.getElementById('newTask').value;
//   if (taskAdded === '') {
//     alert('Invalid input. Please write a task you want to add.');
//     return;
//   }
  
//   // Add new task to the array
//   tasks.push({ text: taskAdded, completed: false });
  
//   // Update the task list
//   updateTaskList();
  
//   // Clear input field
//   document.getElementById('newTask').value = '';
// };

// // Event delegation for task completion and deletion
// document.querySelector('.tsk-table').addEventListener('click', function (e) {
//   if (e.target.classList.contains('icon2')) {
//     // Toggle task completion
//     let index = e.target.getAttribute('data-index');
//     tasks[index].completed = !tasks[index].completed;
//     updateTaskList();
//   }
  
//   if (e.target.classList.contains('btnn1')) {
//     // Delete task
//     let index = e.target.getAttribute('data-index');
//     tasks.splice(index, 1);
//     updateTaskList();
//   }
// });




// document.getElementById('btnAdd').onclick = function () {

//   let taskAdded = document.getElementById('newTask').value;
//   let message;
//   if (taskAdded === '') {
//     message = 'Invalid input. Please write a task you want to add.'
//   }

//   alert(message);
// }


// let icons = document.getElementsByClassName('icon2');
// // console.log('icons', icons[0])

// for (let i = 0; i < icons.length; i++) {
//   icons[i].onclick = function () {

//     this.src = 'tick-circle.png';

//     let text = this.nextElementSibling;
//     text.style.textDecoration = 'line-through';
//     text.style.color = '#959595';

//     let button = this.parentElement.parentElement.querySelector('.btnn1');
//     button.style.backgroundColor = '#137F3F';
//     button.style.color = 'white';
//     button.textContent = 'Completed';
//   }
// }



