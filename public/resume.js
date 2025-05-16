document.addEventListener('DOMContentLoaded', function() {
  const jobSections = document.querySelectorAll('.job');

  jobSections.forEach(job => {
    const showMoreButton = document.createElement('button');
    showMoreButton.textContent = 'Show more';
    job.appendChild(showMoreButton);

    const jobDetails = job.querySelector('ul');
    jobDetails.style.display = 'none'; // Hide details initially

    showMoreButton.addEventListener('click', function() {
      if (jobDetails.style.display === 'none') {
        jobDetails.style.display = 'block';
        showMoreButton.textContent = 'Show less';
      } else {
        jobDetails.style.display = 'none';
        showMoreButton.textContent = 'Show more';
      }
    });
  });
});
