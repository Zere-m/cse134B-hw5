class ProjectCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const projectName = this.getAttribute('project-name') || 'Untitled Project';
      const description = this.getAttribute('description') || 'No description provided.';
      const imageUrl = this.getAttribute('image-url') || '/Media/Images/picError.webp';
      const linkUrl = this.getAttribute('link-url') || '#';
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin: 1rem;
            padding: 1rem;
            border: 1px solid var(--card-border, #ccc);
            border-radius: 8px;
            background: var(--card-bg, #fff);
            font-family: Arial, sans-serif;
            max-width: 100%;
            height: 30vh; /* Adjust as needed */
          }
          .card-content {
            display: flex;
            height: 100%;
          }
          /* Left column for the image */
          .card-image {
            flex: 1;
            overflow: hidden;
            border-radius: 4px;
          }
          .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding: 20px;
          }
          /* Right column for the text */
          .card-details {
            flex: 1;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .card-details h2 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .card-details p {
            font-size: 1rem;
            color: #333;
            margin: 0.5rem 0;
          }
          .card-details a {
            text-decoration: none;
            color: var(--link-color, blue);
            font-weight: bold;
          }
        </style>
        <div class="card-content">
          <div class="card-image">
            <img src="${imageUrl}" alt="Screenshot of ${projectName}">
          </div>
          <div class="card-details">
            <h2>${projectName}</h2>
            <p>${description}</p>
            <a href="${linkUrl}" target="_blank">Learn more</a>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('project-card', ProjectCard);
  