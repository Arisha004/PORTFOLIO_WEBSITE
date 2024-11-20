document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    
    // Fetch the project data from the JSON file
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            projectsContainer.innerHTML = '';
            projects.forEach(project => {
                const projectCard = `
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                `;
                projectsContainer.innerHTML += projectCard;
            });
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });
});
