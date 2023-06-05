document.getElementById("add").addEventListener("click", addTask);
let output = document.getElementById('output');

var task_lists = [];

function addTask(){
    let task = document.getElementById('tasks-input');
    if(task.value === ''){
        alert("add task");
        console.log("if");
    }else if(task_lists.length === 0){
        task_lists.push(task.value);
        output.innerHTML += `<li>${task.value}  <a onclick="removeT(this)" href="#">x</a></li>`;
        console.log("else if");
    }else{
        var len = task_lists.length;
        task_lists.push(task.value);
        for(let i = 0; i<len;++i){
            console.log("i: "+i);
            if(task_lists[i] == task.value){
                alert("existing task entered. Add new task...");
                task_lists.pop();
                break;
            }
        }
    }
    let res = "";
    for (let i = 0; i<task_lists.length;++i){
        res += `<li>${task_lists[i]}  <a onclick="removeT(this)" href="#">x</a></li>`;
    }
    output.innerHTML = res;
    console.log(task_lists);
    task.value = '';
}

function removeT(e){
    if (confirm("Are you sure?")) {
        let del = e.parentNode.textContent;
        del = del.slice(0,(del.length-1));
        del = del.trim();
        for(let i = 0; i<task_lists.length;++i){
            if (task_lists[i] == del){
                task_lists.splice(i,i);
                break;
            }
        }
        console.log(task_lists);
        e.parentNode.remove();

    }
}
document.getElementById("filter").addEventListener("keyup",filterTask);
function filterTask(){
    // var output = document.getElementById('output');
    // console.log(filter);
    var target = document.getElementById("filter").value;
    var element = "";
    for(let i = 0;i<task_lists.length;++i){
        element += `<li>${task_lists[i]}</li>`;
    }
    var result = ""
    for(let i = 0;i<task_lists.length;++i){
        if(task_lists[i].includes(target)){
            // output.innerHTML = "";
            result += `<li>${task_lists[i]} <a onclick="removeT(this)" href="#">x</a></li>`;
            

        }
        else{
            output.innerHTML = "";
            
        }
    }
    output.innerHTML = result;
}



document.getElementById("clear").addEventListener("click", clearTask);

function clearTask(){
    output.innerHTML = '';
}