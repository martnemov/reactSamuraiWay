const tasks = [
    { title: "Купить продукты на неделю", isDone: false },
    { title: "Полить цветы", isDone: true },
    { title: "Сходить на тренировку", isDone: false },
]

const rootEl= document.getElementById('root');
const headerEl = document.createElement('h1');
headerEl.append('Список дел');

rootEl.append(headerEl);

const tasksEl = document.createElement('ul');

tasks.forEach(task => {
   const taskEl = document.createElement('li');
  
   const taskTitleEl = document.createElement('div');
    taskTitleEl.append(task.title);
    taskEl.append(taskTitleEl);
    tasksEl.append(taskEl);
   
   const taskStatusEL = document.createElement('input');
    taskStatusEL.type = 'checkbox';
    taskStatusEL.checked = task.isDone;
    taskEl.append(taskStatusEL);
})


rootEl.append(tasksEl);