export default function createTodo(task, notes = "", priority = 0, dueDate = "") {
    function changeTask(newTask){
        task = newTask
    }

    function changeNotes(newNotes){
        notes = newNotes;
    }

    function changePriority(newPriority){
        priority = newPriority;
    }

    function changeDate(newDate){
        dueDate = newDate;
    }

    const getTodo = () => ({
        task,
        notes,
        priority,
        dueDate
        }
    )

    return {
        getTodo,
        changeTask,
        changeDate,
        changeNotes,
        changePriority
    }
}

