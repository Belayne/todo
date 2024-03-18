import "./project.css"

export default function ProjectView() {
    const view = document.createElement('div');
    view.id = "projectContainer";

    view.innerHTML = `
    <div id="projectContainer">
            <div id="titleContainer">
                <h2 id="projectTitle"></h2>
                <p id="projectDescription"></p>
            </div>
            <div id="todoListContainer">
            </div>
            <button id="createTodoButton">CREATE TODO</button>
        </div>`

    const todoListView = view.querySelector('#todoListContainer');
    const titleView = view.querySelector('#projectTitle');
    const descriptionView = view.querySelector('#projectDescription');
    
    function populate(projectList) {
        const currentProject = projectList.projects[projectList.current];

        titleView.textContent = currentProject.title;
        descriptionView.textContent = currentProject.description;

        currentProject.todoList.forEach((todo, index) => {
            todoListView.appendChild(createTodoView(todo, index))
        })
    }

    function update(projectList) {
        todoListView.textContent = "";
        populate(projectList)
    }

    return {
        view,
        update,
        populate
    }
}

function createTodoView(todo, index) {
    const view = document.createElement('div');
    view.classList.add('todoItem');
    view.setAttribute('data-todoID', index);

    view.innerHTML = `
                    <input type="checkbox" id="todoCheck-${index}">
                    <label for="todoCheck-${index}" class="task">${todo.task}</label>
                    <p class="dueDate">${todo.dueDate}</p>
                `
    if(todo.isDone) {
        view.classList.add('completed')
    }
    
    return view;
}