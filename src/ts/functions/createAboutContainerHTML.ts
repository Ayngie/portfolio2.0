export function createAboutContainerHTML(): void {
  const aboutContainer: HTMLDivElement = document.getElementById("aboutContainer") as HTMLDivElement;

  /* TEXT */
  const aboutHeading = document.createElement("h4");
  aboutHeading.innerHTML = "About me";

  const container = document.createElement("aboutBoxes");
  container.classList.add("aboutBoxes");

  // Tech Stack
  const techSkills = document.createElement("div");
  techSkills.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  techSkills.id = "techSkillsBox";

  const techHeading = document.createElement("h5");
  techHeading.innerHTML = "Technical Skills";

  const techSkillsComment = document.createElement("p");
  techSkillsComment.innerHTML = `<p>Skills I will have aquired by the time of my LIA are:
    </p>`;
  techSkillsComment.id = "techSkillsComment";

  const skillsIconsBox = document.createElement("div");
  skillsIconsBox.classList.add("skillsIconsBox");
  skillsIconsBox.innerHTML = `
    <i class="devicon-typescript-plain">TypeScript </i>
    <i class="devicon-javascript-plain">JavaScript </i>
    <i class="devicon-react-original">React.js </i>
    <i class="devicon-vuejs-plain">Vue.js </i>
    <i class="devicon-html5-plain-wordmark">HTML5 </i>
    <i class="devicon-sass-original">SCSS </i>
    <i class="devicon-css3-plain">CSS3 </i>
    <i class="devicon-bootstrap-plain">Bootstrap </i>
    <span>Parcel.js </span>
    <i class="devicon-jest-plain">Jest</i>
    <span>Cypress </span>
    <i class="devicon-git-plain">Git </i>
    <i class="devicon-github-original">GitHub </i>
    <i class="devicon-nodejs-plain">Node.js </i>
    <i class="devicon-graphql-plain">GraphQL </i>
    <span>REST-Api </span>
    <i class="devicon-mongodb-plain">MongoDB </i>
    <span>NoSQL </span>
    <span>SQL </span>
    <span>SCRUM </span>
    <span>Jira </span>
    `;

  techSkills.appendChild(techHeading);
  techSkills.appendChild(techSkillsComment);
  techSkills.appendChild(skillsIconsBox);

  container.appendChild(techSkills);

  // Relevant Education
  const relevantEducation = document.createElement("div");
  relevantEducation.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  relevantEducation.id = "relevantEducationBox";

  const eduHeading = document.createElement("h5");
  eduHeading.innerHTML = "Relevant education";
  const educationsBox = document.createElement("div");
  educationsBox.classList.add("educationsBox");

  const medieinstitutet = document.createElement("p");
  const textBeforeLink = document.createElement("span");
  textBeforeLink.innerHTML = "Front-end developer på ";
  const MILink = document.createElement("a");
  MILink.href = "https://medieinstitutet.se/utbildningar/front-end-developer/";
  MILink.target = "_blank";
  MILink.innerHTML = "Medieinstitutet";
  const textAfterLink = document.createElement("span");
  textAfterLink.innerHTML = " Stockholm (2022-2024)";
  MILink.id = "medieinstitutetURL";

  const programmering1 = document.createElement("p");
  programmering1.innerHTML = "Programmering 1, Jensen Komvux (11/2020 - 01/2021)";

  const webbutveckling1 = document.createElement("p");
  webbutveckling1.innerHTML = "Webbutveckling 1, Jensen Komvux (09/2020 - 11/2020)";

  medieinstitutet.appendChild(textBeforeLink);
  medieinstitutet.appendChild(MILink);
  medieinstitutet.appendChild(textAfterLink);

  educationsBox.appendChild(medieinstitutet);
  educationsBox.appendChild(programmering1);
  educationsBox.appendChild(webbutveckling1);

  relevantEducation.appendChild(eduHeading);
  relevantEducation.appendChild(educationsBox);
  container.appendChild(relevantEducation);

  // Work Experience
  const workExperience = document.createElement("div");
  workExperience.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  workExperience.id = "workExperienceBox";

  const workHeading = document.createElement("h5");
  workHeading.innerHTML = "Work experience";
  const workParagraph1 = document.createElement("p");
  workParagraph1.innerHTML =
    "I have run a private osteopathic clinic for over ten years, where I learned a lot about running a small business, gained much practice on taking a holistic approach to problem-solving, and worked with people to help them solve 'bugs' in other systems ;)";
  workExperience.appendChild(workHeading);
  workExperience.appendChild(workParagraph1);
  container.appendChild(workExperience);

  // CV
  const CV = document.createElement("div");
  CV.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  CV.id = "CVBox";

  const CVHeading = document.createElement("h5");
  CVHeading.innerHTML = "CV";

  const CVParagraph1 = document.createElement("p");
  const CVLink = document.createElement("a");
  CVLink.href = "https://angelicareutersward.se/CV/AngelicaReuterswardResume2023.pdf";
  CVLink.target = "_blank";
  CVLink.innerHTML = "Click here to see my CV!";
  CVLink.id = "CVLink";
  CVParagraph1.appendChild(CVLink);

  CV.appendChild(CVHeading);
  CV.appendChild(CVParagraph1);
  container.appendChild(CV);

  /* HTML */
  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(container);
}
