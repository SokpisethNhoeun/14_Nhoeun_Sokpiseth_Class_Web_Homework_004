const AddTask = document.getElementById('addTask');
const btnExits = document.getElementById('exits');
const btnAddNewTask = document.getElementById('btnAddNewTask');
const btnCancelDelete = document.getElementById('cancelDelete');
const btnCancelUpdate = document.getElementById('cancelUpdate');

//end element
let taskName = '';
let priority = 'medium';
let status = 'todo';
let id = -1;
//end declaration

btnCancelDelete.addEventListener('click', function () {
  document.getElementById('deleteTask').style.display = 'none';
});

function isDelete() {
  task = task.filter((item, i) => i !== id);
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  task.map((item, index) => {
    let taskItem = document.createElement('div');
    taskItem.innerHTML = `
<div class="m-auto w-4/5 px-10 py-10 bg-white rounded-bl-lg rounded-tr-lg grid grid-cols-12">
            <div class="font-extrabold text-2xl col-span-6">${item.taskName}</div>
            <div class="col-span-6 grid grid-cols-6">
                ${item.priority == 'high' ? '<p class="font-extrabold text-xl text-red-500 col-span-2">High</p>' : item.priority == 'medium' ? '<p class="font-extrabold col-span-2 text-xl text-yellow-500">Medium</p>' : '<p class="font-extrabold col-span-2 text-xl text-green-500">Low</p>'}
                ${item.status == 'todo' ? '<p class="font-extrabold text-xl text-blue-500 col-span-2">Todo</p>' : item.status == 'in progress' ? '<p class="font-extrabold text-xl col-span-2 text-blue-500">In Progress</p>' : '<p class="font-extrabold text-xl text-blue-500 col-span-2">Done</p>'}
                <div class="flex space-x-2 items-center justify-between">
                    <button class="text-purple-800 text-3xl" onclick="btnUpdate(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="text-red-500 text-3xl" onclick="deleteTask(${index})"><i class="fa-regular fa-trash-can "></i></button>

                </div>
            </div>
        </div>`;

    taskList.prepend(taskItem);
  });
  document.getElementById('deleteTask').style.display = 'none';
}

function deleteTask(index) {
  document.getElementById('deleteTask').style.display = 'flex';
  id = index;
}

btnExits.addEventListener('click', function () {
  document.getElementById('formAdd').style.display = 'none';
  //clear all
  document.getElementById('taskName').value = '';
  let buttons = document.querySelectorAll('.status');
  buttons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-blue-300');
  });
  let priorityButtons = document.querySelectorAll('.priority');
  priorityButtons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-red-600', 'bg-green-500', 'bg-yellow-400');
  });

  priority = 'medium';
  status = 'todo';
  //end all clear
});

AddTask.addEventListener('click', function () {
  document.getElementById('formAdd').style.display = 'flex';
});

// css
function selectedPriority(id) {
  const buttons = document.querySelectorAll('.priority');

  buttons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-red-600', 'bg-green-500', 'bg-yellow-400');
  });

  const selected = document.querySelector(`.${id}`);
  const selected1 = document.getElementById(`u${id}`);

  selected.classList.add('text-white');
  selected1.classList.add('text-white');

  if (id === 'high') {
    selected.classList.add('bg-red-600');
    selected1.classList.add('bg-red-600');
    priority = 'high';
  } else if (id === 'low') {
    selected.classList.add('bg-green-500');
    selected1.classList.add('bg-green-500');
    priority = 'low';
  } else {
    selected.classList.add('bg-yellow-400');
    selected1.classList.add('bg-yellow-400');
    priority = 'medium';
  }
}

function selectedStatus() {
  const buttons = document.querySelectorAll('.status');
  buttons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-blue-300');
  });

  const selected = document.getElementById(event.target.id);
  selected.classList.add('text-white', 'bg-blue-300');
  if (event.target.id === 'todo') {
    status = 'todo';
  } else if (event.target.id === 'progress') {
    status = 'in progress';
  } else {
    status = 'done';
  }
}

// item js

let task = [
  {
    taskName: 'java homework',
    priority: 'high',
    status: 'in progress',
  },
  {
    taskName: 'web homework',
    priority: 'medium',
    status: 'todo',
  },
];
task.map((item, index) => {
  const taskList = document.getElementById('taskList');
  let taskItem = document.createElement('div');
  taskItem.innerHTML = `
<div class="m-auto w-4/5 px-10 py-10 bg-white rounded-bl-lg rounded-tr-lg grid grid-cols-12">
            <div class="font-extrabold text-2xl col-span-6">${item.taskName}</div>
            <div class="col-span-6 grid grid-cols-6">
                
                ${item.priority == 'high' ? '<p class=" col-span-2 font-extrabold text-xl text-red-500">High</p>' : item.priority == 'medium' ? '<p class="col-span-2 font-extrabold text-xl text-yellow-500">Medium</p>' : '<p class="col-span-2 font-extrabold text-xl text-green-500">Low</p>'}
                ${item.status == 'todo' ? '<p class="font-extrabold text-xl text-blue-500 col-span-2">Todo</p>' : item.status == 'in progress' ? '<p class="font-extrabold text-xl col-span-2 text-blue-500">In Progress</p>' : '<p class="font-extrabold text-xl text-blue-500 col-span-2">Done</p>'}
                <div class="flex space-x-2 items-center justify-between">
                    <button class="text-purple-800 text-3xl" onclick="btnUpdate(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="text-red-500 text-3xl" onclick="deleteTask(${index})"><i class="fa-regular fa-trash-can "></i></button>

                </div>
            </div>
        </div>`;

  taskList.prepend(taskItem);
});

btnAddNewTask.addEventListener('click', () => {
  taskName = document.getElementById('taskName').value;

  if (taskName === '') {
    alert('Please enter task name');
    return;
  }
  document.getElementById('formAdd').style.display = 'none';
  let newTask = {
    taskName: taskName,
    priority: priority,
    status: status,
  };

  task = [...task, newTask];

  //clear all
  document.getElementById('taskName').value = '';
  let buttons = document.querySelectorAll('.status');
  buttons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-blue-300');
  });
  let priorityButtons = document.querySelectorAll('.priority');
  priorityButtons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-red-600', 'bg-green-500', 'bg-yellow-400');
  });
  priority = 'medium';
  status = 'todo';
  //end all clear

  //show new items
  const taskList = document.getElementById('taskList');

  let taskItem = document.createElement('div');
  task.map((item, index) => {
    taskItem.innerHTML = `
<div class="m-auto w-4/5 px-10 py-10 bg-white rounded-bl-lg rounded-tr-lg grid grid-cols-12">
            <div class="font-extrabold text-2xl col-span-6">${item.taskName}</div>
            <div class="col-span-6 grid grid-cols-6">
                ${item.priority == 'high' ? '<p class="font-extrabold text-xl text-red-500 col-span-2">High</p>' : item.priority == 'medium' ? '<p class="font-extrabold col-span-2 text-xl text-yellow-500">Medium</p>' : '<p class="font-extrabold col-span-2 text-xl text-green-500">Low</p>'}
                ${item.status == 'todo' ? '<p class="font-extrabold text-xl text-blue-500 col-span-2">Todo</p>' : item.status == 'in progress' ? '<p class="font-extrabold text-xl col-span-2 text-blue-500">In Progress</p>' : '<p class="font-extrabold text-xl text-blue-500 col-span-2">Done</p>'}
                <div class="flex space-x-2 items-center justify-between">
                    <button class="text-purple-800 text-3xl" onclick="btnUpdate(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="text-red-500 text-3xl" onclick="deleteTask(${index})"><i class="fa-regular fa-trash-can "></i></button>

                </div>
            </div>
        </div>`;

    taskList.prepend(taskItem);
  });
});

let btnUpdate = (index) => {
  document.getElementById('formUpdate').classList.remove('hidden');
  document.getElementById('formUpdate').classList.add('flex');
  document.getElementById('updateTaskName').value = task[index].taskName;
  id = index;
};

btnCancelUpdate.addEventListener('click', () => {
  document.getElementById('formUpdate').classList.add('hidden');
  //clear all
  document.getElementById('updateTaskName').value = '';
  let buttons = document.querySelectorAll('.status');
  buttons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-blue-300');
  });
  let priorityButtons = document.querySelectorAll('.priority');
  priorityButtons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-red-600', 'bg-green-500', 'bg-yellow-400');
  });

  priority = 'medium';
  status = 'todo';
  //end all clear
});

//update task
let updateTask = () => {
  taskName = document.getElementById('updateTaskName').value;
  if (taskName === '') {
    alert('Please enter task name');
    return;
  }

  let updatedTask = {
    taskName: taskName,
    priority: priority,
    status: status,
  };

  task[id] = updatedTask;

  //clear all
  document.getElementById('updateTaskName').value = '';
  let buttons = document.querySelectorAll('.status');
  buttons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-blue-300');
  });
  let priorityButtons = document.querySelectorAll('.priority');
  priorityButtons.forEach((btn) => {
    btn.classList.remove('text-white', 'bg-red-600', 'bg-green-500', 'bg-yellow-400');
  });

  priority = 'medium';
  status = 'todo';
  //end all clear

  //show new items
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  task.map((item, index) => {
    let taskItem = document.createElement('div');
    taskItem.innerHTML = `
<div class="m-auto w-4/5 px-10 py-10 bg-white rounded-bl-lg rounded-tr-lg grid grid-cols-12">
            <div class="font-extrabold text-2xl col-span-6">${item.taskName}</div>
            <div class="col-span-6 grid grid-cols-6">
                ${item.priority == 'high' ? '<p class="font-extrabold text-xl text-red-500 col-span-2">High</p>' : item.priority == 'medium' ? '<p class="font-extrabold col-span-2 text-xl text-yellow-500">Medium</p>' : '<p class="font-extrabold col-span-2 text-xl text-green-500">Low</p>'}
                ${item.status == 'todo' ? '<p class="font-extrabold text-xl text-blue-500 col-span-2">Todo</p>' : item.status == 'in progress' ? '<p class="font-extrabold text-xl col-span-2 text-blue-500">In Progress</p>' : '<p class="font-extrabold text-xl text-blue-500 col-span-2">Done</p>'}
                <div class="flex space-x-2 items-center justify-between">
                    <button class="text-purple-800 text-3xl" onclick="btnUpdate(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="text-red-500 text-3xl" onclick="deleteTask(${index})"><i class="fa-regular fa-trash-can "></i></button>
                </div>
            </div>
        </div>`;

    taskList.prepend(taskItem);
  });

  document.getElementById('formUpdate').classList.add('hidden');
};
