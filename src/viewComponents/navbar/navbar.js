import "./navbar.css"
import weekIcon from "./calendar_month_FILL0_wght400_GRAD0_opsz24.svg";
import dayIcon from "./calendar_today_FILL0_wght400_GRAD0_opsz24.svg";
import tomorrowIcon from "./date_range_FILL0_wght400_GRAD0_opsz24.svg";

export default function Navbar() {
    const view = document.createElement('nav');
    view.id = "navbar";

    view.innerHTML = `
            <h1 id="navTitle">TaskMaster</h1>
            <button id="createButton">NEW PROJECT</button>
            <div id="dateNavigation">
                <a class="dateLink" href="#"><img src=${dayIcon} alt="calendar today icon">Today</a>
                <a class="dateLink" href="#"><img src=${tomorrowIcon} alt="calendar tomorrow icon">Tomorrow</a>
                <a class="dateLink" href="#"><img src=${weekIcon} alt="calendar week icon">This week</a>
            </div>
            <div id="projectNavigation">
            </div>`

    const projectNavigation = view.querySelector('#projectNavigation');

    function populate(projectList) {
        console.log(projectList)
        projectList.projects.forEach((project, index) => {
            const newLink = createProjectLink(project.title, index);
            projectNavigation.appendChild(newLink)
        })
    }

    function update(projectList) {
        projectNavigation.textContent = ""
        populate(projectList);
    }

    return {
        view,
        populate,
        update
    }
}

function createProjectLink(projTitle, id) {
    const link = document.createElement('a');
    link.classList.add('projectLink');
    link.setAttribute('data-id', id);
    link.textContent = projTitle;
    return link;
}