export default function createProject(title = "Untitled") {
    const todoList = [];

    function addTodo(todo) {
        todoList.push(todo);
    }

    function removeTodo(todo) {
        todoList.splice(todoList.indexOf(todo), 1);
    }

    function changeTitle(newTitle) {
        title = newTitle;
    }

    const getProject = () => ({
        title,
        todoList: [...todoList]
    })

    return {
        getProject,
        addTodo,
        removeTodo,
        changeTitle
    }
}