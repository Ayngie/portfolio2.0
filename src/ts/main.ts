// import { appendFile } from "fs";
import { IRepo } from "./models/iRepo";
import { getData } from "./services/gitrepos";

let repos: IRepo[] = [];

function init() {
  createHelloContainerHTML();
  initProjectsContainerHTML();
  createAboutContainerHTML();
  createContactContainerHTML();
}

/* --------------------- HELLO --------------------- */
//CREATE HTML FOR HELLOCONTAINER
function createHelloContainerHTML() {
  let helloContainer: HTMLDivElement = document.getElementById(
    "helloContainer"
  ) as HTMLDivElement;

  /* TEXT */
  let helloHeading = document.createElement("h4");
  helloHeading.innerHTML = "Hi! I'm Angelica!";

  let helloParagraph1 = document.createElement("p");
  helloParagraph1.innerHTML = "Welcome to my portfolio.";

  let helloParagraph2 = document.createElement("div");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  span1.innerHTML = "I love building things and seeing them come ";
  span2.innerHTML = "alive";
  span3.innerHTML = "!";
  span2.classList.add("alive");
  helloParagraph2.appendChild(span1);
  helloParagraph2.appendChild(span2);
  helloParagraph2.appendChild(span3);

  /* IMAGE */
  let profileImgBox = document.createElement("div");
  profileImgBox.classList.add("profileImgBox");

  let profileImg = document.createElement("img");
  profileImg.src = "https://angelicareutersward.se/assets/profilepic.jpeg";
  profileImg.alt = "Profile picture";
  profileImg.classList.add("profileImg");
  profileImgBox.appendChild(profileImg);

  /* MORE TEXT */

  let helloAboutParagraphs = document.createElement("div");
  helloAboutParagraphs.id = "helloAboutParagraphs";
  let myParagraph1 = document.createElement("p");
  myParagraph1.innerHTML =
    "Who am I? I'm an Osteopath turned Front End Developer. After a decade of working in manual medicine, I have discovered a new passion in frontend development. I never knew how much fun it was!";
  let myParagraph2 = document.createElement("p");
  myParagraph2.innerHTML =
    "Once I started learning more, I couldn't stop. Now I'm more than halfway through the first year at Medieinstitutet Sthlm, and we're searching for internships as we speak...";
  let myParagraph3 = document.createElement("p");
  myParagraph3.innerHTML =
    "If you have an internship opening, feel free to contact me. I'm so excited to get started in the tech world!";

  helloAboutParagraphs.appendChild(myParagraph1);
  helloAboutParagraphs.appendChild(myParagraph2);
  helloAboutParagraphs.appendChild(myParagraph3);
  /* HTML */
  helloContainer.appendChild(helloHeading);
  helloContainer.appendChild(helloParagraph1);
  helloContainer.appendChild(helloParagraph2);
  helloContainer.appendChild(profileImgBox);
  helloContainer.appendChild(helloAboutParagraphs);
}

/* --------------------- PROJECTS --------------------- */
//INIT CREATE HTML FOR PROJECTSCONTAINER
function initProjectsContainerHTML() {
  let projectsContainer: HTMLDivElement = document.getElementById(
    "projectsContainer__heading"
  ) as HTMLDivElement;

  let projectsHeading = document.createElement("h4");
  projectsHeading.innerHTML = "My projects";
  let projParagraph1 = document.createElement("p");
  projParagraph1.innerHTML =
    "Here are some of my projects from my time at Medieinstitutet Stockholm.";

  // let projectsImgBox = document.createElement("div");
  // projectsImgBox.classList.add("projectsImgBox");
  // let projectsImg = document.createElement("img");
  // projectsImg.src = "https://angelicareutersward.se/assets/ComingSoonBee.jpg";
  // projectsImg.alt = "Projects / Bumblebee";
  // projectsImg.classList.add("projectsImg");
  // projectsImgBox.appendChild(projectsImg);
  projectsContainer.appendChild(projectsHeading);
  projectsContainer.appendChild(projParagraph1);
  // projectsContainer.appendChild(projectsImgBox);

  createHtmlForGetReposButton();
}

//CREATE HTML FOR EXPAND BUTTON
function createHtmlForGetReposButton() {
  let reposContainer = document.getElementById(
    "projectsContainer__repos"
  ) as HTMLDivElement;
  let collapseBtnContainer = document.getElementById(
    "projectsContainer__collapseBtn"
  ) as HTMLDivElement;

  reposContainer.innerHTML = "";
  collapseBtnContainer.innerHTML = "";

  let expandBtn = document.createElement("button");
  expandBtn.setAttribute("type", "button");
  expandBtn.classList.add("showcasebtn");
  expandBtn.classList.add("btn", "btn-light");
  expandBtn.innerHTML = "EXPAND";
  expandBtn.addEventListener("click", getRepos); //GET REPOS

  reposContainer.appendChild(expandBtn);
}

//GET REPOS
async function getRepos() {
  repos = await getData();
  console.log(repos);
  createReposContainerHTML(repos);
}

//CREATE HTML FOR REPOSITORIES
function createReposContainerHTML(repos: IRepo[]) {
  let reposContainer = document.getElementById(
    "projectsContainer__repos"
  ) as HTMLDivElement;
  let collapseBtnContainer = document.getElementById(
    "projectsContainer__collapseBtn"
  ) as HTMLDivElement;

  reposContainer.innerHTML = "";
  collapseBtnContainer.innerHTML = "";

  let collapseBtn = document.createElement("button");
  collapseBtn.setAttribute("type", "button");
  collapseBtn.classList.add("showcasebtn");
  collapseBtn.classList.add("btn", "btn-light");
  collapseBtn.setAttribute("href", "#projectsContainer");
  collapseBtn.innerHTML = "COLLAPSE";
  collapseBtn.addEventListener("click", createHtmlForGetReposButton);

  let collapseBtnALink = document.createElement("a");
  collapseBtnALink.setAttribute("href", "#projectsContainer");
  collapseBtnALink.appendChild(collapseBtn);

  for (let i = 0; i < repos.length; i++) {
    let container = document.createElement("div");
    container.classList.add("repoBox");
    container.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");

    let link = document.createElement("a");
    link.href = repos[i].html_url;
    link.target = "_blank";
    link.classList.add("repo__link");

    let title = document.createElement("p");
    title.classList.add("repo__title");
    title.innerHTML = repos[i].name;
    link.appendChild(title);

    let description = document.createElement("p");
    description.classList.add("repo__description");
    description.innerHTML = repos[i].description;
    title.appendChild(description);

    container.appendChild(link);

    reposContainer.appendChild(container);
  }
  collapseBtnContainer.appendChild(collapseBtnALink);
}

/* --------------------- ABOUT --------------------- */
// CREATE HTML FOR ABOUTCONTAINER
function createAboutContainerHTML() {
  let aboutContainer: HTMLDivElement = document.getElementById(
    "aboutContainer"
  ) as HTMLDivElement;

  /* TEXT */
  let aboutHeading = document.createElement("h4");
  aboutHeading.innerHTML = "About me";

  let container = document.createElement("aboutBoxes");
  container.classList.add("aboutBoxes");

  //Tech Stack
  let techSkills = document.createElement("div");
  techSkills.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  techSkills.id = "techSkillsBox";

  let techHeading = document.createElement("h5");
  techHeading.innerHTML = "Technical Skills";

  // let techImgBox = document.createElement("div");
  // techImgBox.classList.add("techImgBox");
  // let techImg = document.createElement("img");
  // techImg.src = "https://angelicareutersward.se/assets/ComingSoon.jpg";
  // techImg.alt = "Tech stack / Turtle";
  // techImg.classList.add("techImg");
  // techImgBox.appendChild(techImg);

  let skillsIconsBox = document.createElement("div");
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
  <span>Test automation </span>
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
  `;

  techSkills.appendChild(techHeading);
  // techSkills.appendChild(techImgBox);
  techSkills.appendChild(skillsIconsBox);

  container.appendChild(techSkills);

  //Relevant Education
  let relevantEducation = document.createElement("div");
  relevantEducation.classList.add(
    "shadow-sm",
    "p-3",
    "mb-5",
    "bg-body",
    "rounded"
  );
  relevantEducation.id = "relevantEducationBox";

  let eduHeading = document.createElement("h5");
  eduHeading.innerHTML = "Relevant education";
  let educationsBox = document.createElement("div");
  educationsBox.classList.add("educationsBox");

  let medieinstitutet = document.createElement("p");
  let textBeforeLink = document.createElement("span");
  textBeforeLink.innerHTML = "Front-end developer på ";
  let MILink = document.createElement("a");
  MILink.href = "https://medieinstitutet.se/utbildningar/front-end-developer/";
  MILink.target = "_blank";
  MILink.innerHTML = "Medieinstitutet";
  let textAfterLink = document.createElement("span");
  textAfterLink.innerHTML = " Stockholm (2022-2024)";
  MILink.id = "medieinstitutetURL";

  let programmering1 = document.createElement("p");
  programmering1.innerHTML =
    "Programmering 1, Jensen Komvux (11/2020 - 01/2021)";

  let webbutveckling1 = document.createElement("p");
  webbutveckling1.innerHTML =
    "Webbutveckling 1, Jensen Komvux (09/2020 - 11/2020)";

  medieinstitutet.appendChild(textBeforeLink);
  medieinstitutet.appendChild(MILink);
  medieinstitutet.appendChild(textAfterLink);

  educationsBox.appendChild(medieinstitutet);
  educationsBox.appendChild(programmering1);
  educationsBox.appendChild(webbutveckling1);

  relevantEducation.appendChild(eduHeading);
  relevantEducation.appendChild(educationsBox);
  container.appendChild(relevantEducation);

  //Work Experience
  let workExperience = document.createElement("div");
  workExperience.classList.add(
    "shadow-sm",
    "p-3",
    "mb-5",
    "bg-body",
    "rounded"
  );
  workExperience.id = "workExperienceBox";

  let workHeading = document.createElement("h5");
  workHeading.innerHTML = "Work experience";
  let workParagraph1 = document.createElement("p");
  workParagraph1.innerHTML =
    "I have run a private osteopathic clinic for over ten years, where i've been working with people to help them solve 'bugs' in other systems ;)";
  workExperience.appendChild(workHeading);
  workExperience.appendChild(workParagraph1);
  container.appendChild(workExperience);

  //CV
  let CV = document.createElement("div");
  CV.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  CV.id = "CVBox";

  let CVHeading = document.createElement("h5");
  CVHeading.innerHTML = "CV";

  let CVParagraph1 = document.createElement("p");
  let CVLink = document.createElement("a");
  CVLink.href =
    "https://angelicareutersward.se/CV/AngelicaReuterswardResume.pdf";
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

/* --------------------- CONTACT --------------------- */
//CREATE HTML FOR CONTACTCONTAINER
function createContactContainerHTML() {
  let contactContainer: HTMLDivElement = document.getElementById(
    "contactContainerJS"
  ) as HTMLDivElement;

  let contactsHeading = document.createElement("h4");
  contactsHeading.innerHTML = "Contact";

  let contactParagraph1 = document.createElement("p");
  contactParagraph1.innerHTML =
    "I am currently looking for an internship for fall of 2023. Feel free to contact me if you have openings!";

  let contactParagraph2 = document.createElement("p");
  contactParagraph2.innerHTML = "Click an icon to get in touch with me!";

  contactContainer.appendChild(contactsHeading);
  contactContainer.appendChild(contactParagraph1);
  contactContainer.appendChild(contactParagraph2);
}

init();
