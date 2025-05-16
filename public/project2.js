// Get the form and grid container
const form = document.getElementById('project-form');
const projectGrid = document.getElementById('project-grid');

// Handle the form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the input values
  const title = document.getElementById('project-title').value;
  const description = document.getElementById('project-description').value;
  

  // Create a new project card element
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  projectCard.innerHTML = `
   
    <div class="content">
      <h3>${title}</h3>
      <p>${description}</p>
     
    </div>
  `;

  // Append the new project card to the project grid
  projectGrid.appendChild(projectCard);

  // Reset the form
  form.reset();
});
