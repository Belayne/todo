class Todo {
    constructor(task, notes = "", dueDate = "", priority = "", isDone = false) {
        this.task = task;
        this.priority = priority;
        this.dueDate = dueDate;
        this.notes = notes;
        this.isDone = isDone;
    }
}

class Project {
    constructor(title = "New project", description = "",todoList = []) {
        this.title = title;
        this.description = description;
        this.todoList = todoList;
    }

    addTodo(newTodo) {
        this.todoList.unshift(newTodo);
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
        this.projects.unshift(newProject)
        this.switchProject(0);
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