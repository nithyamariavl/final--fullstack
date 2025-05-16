
// script.js

// Grab references to form and project list container
const form = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from refreshing the page
  
  // Get form values
  const projectName = document.getElementById('projectName').value;
  const projectDescription = document.getElementById('projectDescription').value;
  const projectDate = document.getElementById('projectDate').value;

  if (projectName && projectDescription && projectDate) {
    // Create a new project item
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    projectItem.innerHTML = `
      <h3>${projectName}</h3>
      <p>${projectDescription}</p>
      <span>Start Date: ${new Date(projectDate).toLocaleDateString()}</span>
    `;

    // Append the new project item to the project list
    projectList.appendChild(projectItem);

    // Clear form fields
    form.reset();
  } else {
    alert("Please fill out all fields.");
  }
});
