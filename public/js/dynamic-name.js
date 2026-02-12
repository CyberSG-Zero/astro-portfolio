// Opción 2: Si usas Astro, envuélvelo en el script
// document.addEventListener('DOMContentLoaded', () => {
//     const projectName = document.querySelector(".display_text h1");
//     const namePlace = document.querySelector(".navbar.project span");
    
//     if (projectName && namePlace) {
//         namePlace.textContent = projectName.textContent;
//     }
// });

// let projectName = document.querySelector(".display_text")
// const namePlace = document.querySelector(".navbar.project span")


// namePlace.textContent = projectName.textContent;

function updateProjectName() {
    const projectName = document.querySelector(".display_text");
    const namePlace = document.querySelector(".navbar.project span");
    
    if (projectName && namePlace) {
        namePlace.textContent = projectName.textContent;
    }
}

// Carga inicial
document.addEventListener('astro:page-load', updateProjectName);

// También puedes usar astro:after-swap si necesitas ejecutar después del swap de contenido