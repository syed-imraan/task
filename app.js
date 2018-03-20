// Background Color
const card = document.querySelector('.card-content');
card.addEventListener('mousemove', runEvent)
function runEvent(e) {

    document.querySelector('body').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listners
loadEventListners();

//Load all event istners
function loadEventListners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask)
    // Clear task event
    clearBtn.addEventListener('click', clearTasks)
}

// Add Task 
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

// Create li element
const li = document.createElement('li');
// Add class
li.className = 'collection-item';
// Create Text Node and append child
li.appendChild(document.createTextNode(taskInput.value))
// Create new link element
const link = document.createElement('a');
//Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append the link to li
li.appendChild(link);

// Append li to ul
taskList.appendChild(li);
li.style="color: #26a69a;"
// Clear input
taskInput.value = '';

e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
      }  
        
    }
    
}

// Clear Tasks
function clearTasks() {
    //taskList.innerHTML = '';
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}
