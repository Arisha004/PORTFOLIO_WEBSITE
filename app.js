document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    
    // Example project data (ensure images exist in the assets folder)
    const projects = [
        { 
            title: "Project 1", 
            description: "A responsive website showcasing my skills.", 
            image: "assets/project1.png" 
        },
        { 
            title: "Project 2", 
            description: "An interactive web app with dynamic features.", 
            image: "assets/project2.jpeg" 
        },
        { 
            title: "Project 3", 
            description: "A modern design for a business website.", 
            image: "assets/project3.jpeg" 
        },
        { 
            title: "Project 4", 
            description: "A responsive website showcasing my skills.", 
            image: "assets/project4.png" 
        },
        { 
            title: "Project 5", 
            description: "An interactive web app with dynamic features.", 
            image: "assets/GCR.PNG" 
        },
        { 
            title: "Project 6", 
            description: "A modern design for a business website.", 
            image: "assets/JFD.PNG" 
        },
        { 
            title: "Project 7", 
            description: "A modern design for a business website.", 
            image: "assets/MYPORTFOLIO.PNG" 
        },
        { 
            title: "Project 7", 
            description: "A modern design for a business website.", 
            image: "assets/PORTFOLIO2.PNG" 
        },
        { 
            title: "Project 7", 
            description: "A modern design for a business website.", 
            image: "assets/T-SHIRT.PNG" 
        },
        { 
            title: "Project 7", 
            description: "A modern design for a business website.", 
            image: "assets/T-SHIRT2.PNG" 
        },
        { 
            title: "Project 7", 
            description: "A modern design for a business website.", 
            image: "assets/T-SHIRT4.PNG" 
        },
        { 
            title: "Project 7", 
            description: "A modern design for a business website.", 
            image: "assets/TSHIRT2.PNG" 
        }
    
    ];

    // Clear existing cards and load dynamically
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
});
