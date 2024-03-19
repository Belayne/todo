import { Project, Todo, ProjectList } from "./model";
import Navbar from "./viewComponents/navbar/navbar";
import ProjectView from "./viewComponents/project/project";

const projectList = new ProjectList();
const navbar = Navbar();
const projectView = ProjectView();
const container = document.querySelector('#container');

function render(node) {
    container.appendChild(node)
}

render(navbar.view)
render(projectView.view)

const newProject = new Project("new Project", "need to complete this todo project");
const newTodo = new Todo("make form for create todo button", "" , "23/10/97")
const secondTodo = new Todo("make stuff");
newProject.addTodo(newTodo)
newProject.addTodo(secondTodo)
projectList.addProject(newProject);

navbar.populate(projectList);
projectView.populate(projectList);



