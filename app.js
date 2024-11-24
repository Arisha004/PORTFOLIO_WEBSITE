
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', 
        navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
});


const projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        image: "https://via.placeholder.com/300x200",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "Real-time weather application using OpenWeather API",
        image: "https://via.placeholder.com/300x200",
        tags: ["JavaScript", "API", "CSS"]
    },
    {
        id: 3,
        title: "Task Manager",
        description: "A productivity app with drag-and-drop features",
        image: "https://via.placeholder.com/300x200",
        tags: ["Vue.js", "Firebase"]
    }
];


const createProjectCard = (project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('aria-labelledby', `project-${project.id}`);

    card.innerHTML = `
        <img 
            class="project-image" 
            src="${project.image}" 
            alt="${project.title} project screenshot"
        >
        <div class="project-content">
            <h3 id="project-${project.id}">${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
};

const loadProjects = async () => {
    const projectsGrid = document.querySelector('.projects-grid');
    const loadingSpinner = document.querySelector('.loading-spinner');

    try {
       
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        

        loadingSpinner.style.display = 'none';
        
        projectsData.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });

    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });

    } catch (error) {
        console.error('Error loading projects:', error);
        loadingSpinner.style.display = 'none';
        projectsGrid.innerHTML = `
            <p class="error-message">
                Failed to load projects. Please try again later.
            </p>
        `;
    }
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});