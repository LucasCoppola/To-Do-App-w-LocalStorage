const addBtn = document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn");
const input = document.querySelector("#input");
const icons = document.querySelector(".icons");
const listItems = document.querySelector(".list-items");

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

addBtn.addEventListener("click", () => {
   console.log(listItems.firstChild)
    tasks.push(input.value)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    createTask(input.value)
    input.value = ""
})

const createTask = (input) => {
    let task = document.createElement("div");
            
    let li = document.createElement("li")
    li.innerHTML = `${input}`
    task.appendChild(li)

    let checkBtn = document.createElement("i")
    checkBtn.innerHTML = `<i class="gg-check"></i>`
    li.appendChild(checkBtn)

    if(input === ""){
        alert("Please enter a task")
    }else {
        listItems.appendChild(task)
    }
    
    checkBtn.addEventListener("click", () => {
        checkBtn.parentElement.parentElement.style.textDecoration = "line-through"
    })

    clearBtn.addEventListener("click", () => {
        localStorage.clear()
        tasks = []  
        while (listItems.firstChild) { 
        listItems.removeChild(listItems.firstChild);
    }
    })
}

tasks.forEach(task => {
    createTask(task)
})

