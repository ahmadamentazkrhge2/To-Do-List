const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");

let arr=[]

getdata()
if(localStorage.getItem("tasks")){
  arr=JSON.parse(localStorage.getItem("tasks"))
}

function addtask() {
  if (input.value !== "") {
    addToArray(input.value);
    input.value = "";
  }
}

function addToArray(tasktext) {
  const task={
    id:Date.now(),
    title:tasktext,
    complete:false,
  }



  arr.push(task)
  console.log(arr)

  create(arr)

  // local storage
save(arr)
}

function create(arr) {
  list.innerHTML=""
  arr.forEach((task) => {
    let li=document.createElement("li")
    li.className="task"
  li.setAttribute("data-id",task.id)
  li.appendChild(document.createTextNode(task.title))

  let del=document.createElement("button")
  del.className="del"
  del.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del")){
      e.target.parentElement.remove();
      deletetask(e.target.parentElement.getAttribute("data-id"))
    }

  })
  del.appendChild(document.createTextNode("Delete"))
  li.appendChild(del)
  console.log(li)

  list.appendChild(li)
});
}

function save(arr) {
  localStorage.setItem("tasks",JSON.stringify(arr))
  
}


function getdata() {
  let data=window.localStorage.getItem("tasks")
  if(data){
    let tasks=JSON.parse(data)
   create(tasks)
   }

}

function deletetask(taskid) {
 
  arr=arr.filter((task)=>task.id!=taskid)
  save(arr)
}


console.log("Finally done")




