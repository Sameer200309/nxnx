let editIndex = null; // Keep track of the project to edit

function addOrUpdateProject() {
    const projectTitle = document.getElementById('projectTitle').value;
    const projectUpdate = document.getElementById('projectUpdate').value;

    const project = {
        title: projectTitle,
        update: projectUpdate
    };

    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    if (editIndex !== null) {
        // Update existing project
        projects[editIndex] = project;
        editIndex = null; // Reset editIndex
    } else {
        // Add new project
        projects.push(project);
    }

    localStorage.setItem('projects', JSON.stringify(projects));
    displayProjects();
    clearForm();
}

function clearForm() {
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectUpdate').value = '';
}

function displayProjects() {
    const projectList = document.getElementById('studentProjectList');
    projectList.innerHTML = '';

    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.forEach((project, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `${project.title}: ${project.update}
            <button class="btn btn-sm btn-warning float-end" onclick="editProject(${index})">Edit</button>`;
        projectList.appendChild(listItem);
    });
}

function editProject(index) {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const project = projects[index];

    document.getElementById('projectTitle').value = project.title;
    document.getElementById('projectUpdate').value = project.update;

    editIndex = index; // Set the edit index
}

// Display projects when the page loads
displayProjects();
