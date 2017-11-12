class List {
    constructor() {
        this.tasks = [];
        this.id = 2;
    }

    addList(event) {
        if(event.keyCode === 13) {
            let newList = "<div class=\"list-pink\" id=\"list_" + this.id + "\" onkeyup=\"list.addList(event)\"><div class=\"task-input\" id=\"inpt_" + this.id + "\"><input type=\"text\"></div><div class=\"delete-list\" id=\"dlt-list" + this.id + "\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></div></div>";
            $("#lists").append(newList);
            this.id++;
        }
    }

    changeList() {

    }

}

class Task {
    constructor() {
        this.id = 2;
    }

    addTask(event) {
        if(event.keyCode === 13) {
            let newTask = "<div class=\"task\" id=\"task_" + this.id + "\"onkeyup=\"task.addTask(event)\"><div class=\"radio-button\" id=\"cmplt_" + this.id + "\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></div><div class=\"task-input\" id=\"inpt_" + this.id + "\"><input type=\"text\"/></div><div class=\"delete-task\" onclick=\"task.deleteTask(this)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></div></div>";
            $("#tasks").append(newTask);
            this.id++;
        }

    }

    deleteTask(taskID) {
        let target = $(taskID).parent().attr("id");
        if(target !== "primary-task") {
            $(taskID).parent().remove();
        }
        else {
            $(taskID).parent().find("input").val("");
        }
    }
}

let list = new List();
let task = new Task();