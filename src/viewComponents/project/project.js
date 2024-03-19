import "./project.css"
import deleteIcon from "./delete_FILL0_wght400_GRAD0_opsz24.svg"

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
    
    //Gets the active project and populates the current project view
    function populate(projectList) {
        const currentProject = projectList.projects[projectList.current];

        titleView.textContent = currentProject.title;
        descriptionView.textContent = currentProject.description;

        currentProject.todoList.forEach((todo, index) => {
            const todoView = createTodoView(todo, index);
            todoView.querySelector("img").addEventListener("click", e => (handleDelete(e, projectList)))

            todoListView.appendChild(todoView);
        })
;
        view.addEventListener("change",e => handleCheck(e, currentProject));
    }

    function update(projectList) {
        todoListView.textContent = "";
        populate(projectList)
    }

    function handleDelete(e, projectList) {
        const currentPrj = projectList.projects[projectList.current]
        const id = e.target.parentElement.getAttribute("data-todoID");
        currentPrj.removeTodo(id);
        update(projectList)
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
                    <p class="task">${todo.task}</label>
                    <p class="dueDate">${todo.dueDate}</p>
                    <img src=${deleteIcon}>
                `
    if(todo.isDone) {
        view.classList.add('completed')
    }
    return view;
}

function handleCheck(e, currentPrj) {
    const checkbox = e.target;
    const id = checkbox.parentElement.getAttribute("data-todoID");

    if(checkbox.checked) {
        currentPrj.todoList[id].isDone = true;
        checkbox.parentElement.classList.toggle("completed");
    }
    else {
        currentPrj.todoList[id].isDone = false;
        checkbox.parentElement.classList.toggle("completed");
    }
}



