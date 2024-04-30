export function createTechSkillsInfo(techSkills: HTMLElement): void {
  techSkills.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  techSkills.id = "techSkillsBox";

  const heading = document.createElement("h5");
  heading.innerHTML = "Technical Skills";

  const description = document.createElement("p");
  description.innerHTML = `<p>Technical skills I have acquired (so far):
      </p>`;
  description.id = "techSkillsComment";

  const skills = document.createElement("div");
  skills.classList.add("skillsIconsBox");
  skills.innerHTML = `
      <i class="devicon-typescript-plain">TypeScript </i>
      <i class="devicon-javascript-plain">JavaScript </i>
      <i class="devicon-react-original">React.js </i>
      <i class="devicon-vuejs-plain">Vue.js </i>
      <span>Next.js </span>
      <span>Stencil.js </span>
      <span>Storybook </span>
      <i class="devicon-nodejs-plain">Node.js </i>
      <span>CI/CD </span>
      <span>DevOps </span>
      <span>SwaggerHub </span>
      <span>Postman </span>
      <span>Agile Development </span>
      <i class="devicon-html5-plain-wordmark">HTML5 </i>
      <i class="devicon-sass-original">SCSS </i>
      <i class="devicon-css3-plain">CSS3 </i>
      <i class="devicon-bootstrap-plain">Bootstrap </i>
      <span>Vite </span>
      <span>Parcel.js </span>
      <i class="devicon-jest-plain">Jest</i>
      <span>Cypress </span>
      <i class="devicon-git-plain">Git </i>
      <i class="devicon-github-original">GitHub </i>
      <span>BitBucket </span>
      <i class="devicon-graphql-plain">GraphQL </i>
      <span>REST-Api </span>
      <i class="devicon-mongodb-plain">MongoDB </i>
      <span>NoSQL </span>
      <span>SQL </span>
      <span>SCRUM </span>
      <span>Jira </span>
      `;

  techSkills.appendChild(heading);
  techSkills.appendChild(description);
  techSkills.appendChild(skills);
}
