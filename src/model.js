class Todo {
    constructor(task, notes = "", dueDate = "", priority = "") {
        this.task = task;
        this.priority = priority;
        this.dueDate = dueDate;
        this.notes = notes;
    }
}

class Project {
    constructor(title = "New project", todoList = []) {
        this.title = title;
        this.todoList = todoList;
    }

    addTodo(newTodo) {
        this.todoList.push(newTodo);
    }

    removeTodo(index) {
        this.todoList.splice(index, 1);
    }
}

class ProjectList {
    constructor(projects = []) {
        this.projects = projects;
        this.current = 0;   //active project index
    }

    addProject(newProject) {
        this.projects.push(newProject)
        this.switchProject(this.projects.length - 1);
    }

    removeProject() {
        this.projects.splice(this.current, 1);
    }

    switchProject(index) {
        this.current = index;
    }
}

export {
    Project,
    ProjectList,
    Todo
}