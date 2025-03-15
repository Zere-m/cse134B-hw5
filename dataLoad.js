// redering 
function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; 
  
    projects.forEach(project => {
      const card = document.createElement('project-card');
      card.setAttribute('project-name', project.name);
      card.setAttribute('description', project.description);
      card.setAttribute('image-url', project.image);
      card.setAttribute('link-url', project.link);
      container.appendChild(card);
    });
  }
  
  // local data loading 
  function loadLocalData() {
    const data = localStorage.getItem('projectsData');
    if (data){
      const projects = JSON.parse(data);
      renderProjects(projects);
    } else {
      console.error('No local data found.');
    }
  }
  
//remote data loading using json
  function loadRemoteData() {
    fetch('https://my-json-server.typicode.com/Zere-m/cse134B-hw5/projects')
      .then(response => response.json())
    .then(data => {
        //for future use just in case
        localStorage.setItem('projectsData', JSON.stringify(data));
        renderProjects(data);
      })
      .catch(error => console.error('Error fetching data from remote:', error));
  }
  
// connected to buttons
  document.getElementById('load-local').addEventListener('click', loadLocalData);
  document.getElementById('load-remote').addEventListener('click', loadRemoteData);
  