function addTask(){
const input=document.getElementById('taskInput');
const text=input.value.trim();
if(!text) return;

const li=document.createElement('li');
li.innerHTML=`${text} <button onclick="completeTask(this)">Done</button>`;
document.getElementById('taskList').appendChild(li);
input.value='';
}

function completeTask(btn){
const item=btn.parentElement;
btn.remove();
document.getElementById('completedList').appendChild(item);
}