function displayProjects() {
    const projectList = document.getElementById('teacherProjectList');
    projectList.innerHTML = '';

    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.forEach((project) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${project.title}: ${project.update}`;
        projectList.appendChild(listItem);
    });
}

// Display projects when the page loads
displayProjects();
