class Task {
    constructor() {
        this.id = 2;
    }

    addTask(event) {
        if(event.keyCode === 13) {
        //    create new <div></div> element
            let newDiv = document.createElement("div");
        //    add class="task" onsubmit="addTask()" id="task2" attributes to <div></div>
            newDiv.setAttribute("class", "task");
            newDiv.setAttribute("onsubmit", "addTask()");
            newDiv.setAttribute("id", "task" + this.id);
        //    append to "tasks" <div></div>
            document.getElementById("tasks").appendChild(newDiv);
        //    increment id number
        //    create new <div></div> element
        //    add class="radio-button" onclick="complete" id="cmplt2" attributes to <div></div>
        //    append to id="task2" <div></div>
        //    create new <i></i> element
        //    add class="fa fa-check" aria-hidden="true" attributes to <i></i>
        //    append to id="task2" <div></div>
        //    create new <div></div> element
        //    add class="
        //    append "task" to
        //    create new <div></div> element
        //    add class="radio-button"
        //    add <input></input> to <div></div>
        //    add type="text" attribute to <input></input>

        }
    }
}

let task = new Task();