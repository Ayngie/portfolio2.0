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

  projectsContainer.appendChild(projectsHeading);
  projectsContainer.appendChild(projParagraph1);

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
  expandBtn.classList.add("btn", "btn-light");
  expandBtn.innerHTML = "EXPAND";
  expandBtn.addEventListener("click", getRepos); //GET REPOS

  let expandBtnALink = document.createElement("a");
  expandBtnALink.setAttribute("href", "#projectsContainer");

  expandBtnALink.appendChild(expandBtn);

  reposContainer.appendChild(expandBtnALink);
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
  collapseBtn.classList.add("btn", "btn-light");
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

    //Hidden gems
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-API-graphQL_express-HiddenGems"
    ) {
      title.innerHTML = "Hidden Gems";
      description.innerHTML = "A graphQL express API + html/scss/js";
      title.appendChild(description);
      let backgroundImgContainer = document.createElement("div");
      backgroundImgContainer.id = "hiddenGemsImg";
      let rowContainer = document.createElement("div");
      rowContainer.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      let gitHubLink = document.createElement("a");
      gitHubLink.href = repos[i].html_url;
      gitHubLink.innerHTML = "GitHub";
      gitHubLink.target = "_blank";
      gitHubLink.classList.add("gitHubLink");
      rowContainer.appendChild(gitHubLink);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer);
      container.appendChild(rowContainer);
    }

    //GraphQL Webshop
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-API-graphQL_standalone-Webshop"
    ) {
      title.innerHTML = "GraphQL Webshop";
      description.innerHTML = "A graphQL apollo server API";
      title.appendChild(description);
      let backgroundImgContainer1 = document.createElement("div");
      backgroundImgContainer1.id = "graphqlWebshopImg";
      let rowContainer1 = document.createElement("div");
      rowContainer1.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      let gitHubLink1 = document.createElement("a");
      gitHubLink1.href = repos[i].html_url;
      gitHubLink1.innerHTML = "GitHub";
      gitHubLink1.target = "_blank";
      gitHubLink1.classList.add("gitHubLink");
      rowContainer1.appendChild(gitHubLink1);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer1);
      container.appendChild(rowContainer1);
    }

    //MongoDB Review App
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-API-mongoDB_express_Rest-api-ReviewApp"
    ) {
      title.innerHTML = "MongoDB Review App";
      description.innerHTML = "A mongoDB express REST-API";
      title.appendChild(description);
      let backgroundImgContainer2 = document.createElement("div");
      backgroundImgContainer2.id = "mongodbReviewAppImg";
      let rowContainer2 = document.createElement("div");
      rowContainer2.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      let gitHubLink2 = document.createElement("a");
      gitHubLink2.href = repos[i].html_url;
      gitHubLink2.innerHTML = "GitHub";
      gitHubLink2.target = "_blank";
      gitHubLink2.classList.add("gitHubLink");
      rowContainer2.appendChild(gitHubLink2);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer2);
      container.appendChild(rowContainer2);
    }

    //Ready Design
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-html_css-Ready-Design"
    ) {
      title.innerHTML = "Ready Design";
      description.innerHTML = "A website built solely with html/css";
      title.appendChild(description);
      let backgroundImgContainer3 = document.createElement("div");
      backgroundImgContainer3.id = "readyDesignImg";
      let rowContainer3 = document.createElement("div");
      rowContainer3.classList.add("rowContainer");
      let tryItLink = document.createElement("a");
      tryItLink.setAttribute(
        "href",
        "https://angelicareutersward.se/ReadyDesign/index.html"
      );
      tryItLink.target = "_blank";
      tryItLink.innerHTML = "Try it!";
      tryItLink.classList.add("tryItLink");
      let gitHubLink3 = document.createElement("a");
      gitHubLink3.href = repos[i].html_url;
      gitHubLink3.innerHTML = "GitHub";
      gitHubLink3.target = "_blank";
      gitHubLink3.classList.add("gitHubLink");
      rowContainer3.appendChild(gitHubLink3);
      rowContainer3.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer3);
      container.appendChild(rowContainer3);
    }

    //ToDo
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-javascript-ToDo"
    ) {
      title.innerHTML = "Todo";
      description.innerHTML = "A very basic html/scss/JS ToDo app";
      title.appendChild(description);
      let backgroundImgContainer4 = document.createElement("div");
      backgroundImgContainer4.id = "toDoImg";
      let rowContainer4 = document.createElement("div");
      rowContainer4.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      let gitHubLink4 = document.createElement("a");
      gitHubLink4.href = repos[i].html_url;
      gitHubLink4.innerHTML = "GitHub";
      gitHubLink4.target = "_blank";
      gitHubLink4.classList.add("gitHubLink");
      rowContainer4.appendChild(gitHubLink4);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer4);
      container.appendChild(rowContainer4);
    }

    //Webshop Vackra M??ltider
    //(under projektarbetet hette det DukafintAB)
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-typescript-Webshop-VackraMaltiderAB"
    ) {
      title.innerHTML = "Webshop Vackra M\xe5ltider";
      description.innerHTML = "An agile group project html/scss/TS";
      title.appendChild(description);
      let backgroundImgContainer5 = document.createElement("div");
      backgroundImgContainer5.id = "vackraMaltiderImg";
      let rowContainer5 = document.createElement("div");
      rowContainer5.classList.add("rowContainer");
      let tryItLink1 = document.createElement("a");
      tryItLink1.setAttribute(
        "href",
        "https://angelicareutersward.se/Webshop/index.html"
      );
      tryItLink1.target = "_blank";
      tryItLink1.innerHTML = "Try it!";
      tryItLink1.classList.add("tryItLink");
      let gitHubLink5 = document.createElement("a");
      gitHubLink5.href = repos[i].html_url;
      gitHubLink5.innerHTML = "GitHub";
      gitHubLink5.target = "_blank";
      gitHubLink5.classList.add("gitHubLink");
      rowContainer5.appendChild(gitHubLink5);
      rowContainer5.appendChild(tryItLink1);
      container.appendChild(backgroundImgContainer5);
      container.appendChild(rowContainer5);
    }

    //Testning
    if (repos[i].html_url == "https://github.com/Ayngie/assignments-testing") {
      title.innerHTML = "Testing code";
      description.innerHTML = "Unit-/integration-/and E2E-testing";
      title.appendChild(description);
      let backgroundImgContainer6 = document.createElement("div");
      backgroundImgContainer6.id = "testingCodeImg";
      let rowContainer6 = document.createElement("div");
      rowContainer6.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      let gitHubLink6 = document.createElement("a");
      gitHubLink6.href = repos[i].html_url;
      gitHubLink6.innerHTML = "GitHub";
      gitHubLink6.target = "_blank";
      gitHubLink6.classList.add("gitHubLink");
      rowContainer6.appendChild(gitHubLink6);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer6);
      container.appendChild(rowContainer6);
    }

    //Try it Portfolio
    if (repos[i].html_url == "https://github.com/Ayngie/portfolio2.0") {
      title.innerHTML = "My Portfolio";
      description.innerHTML = "V.2.0 - with html/scss/TS";
      title.appendChild(description);
      let backgroundImgContainer7 = document.createElement("div");
      backgroundImgContainer7.id = "portfolioImg";
      let rowContainer7 = document.createElement("div");
      rowContainer7.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute("href", "https://angelicareutersward.se/");
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      let gitHubLink7 = document.createElement("a");
      gitHubLink7.href = repos[i].html_url;
      gitHubLink7.innerHTML = "GitHub";
      gitHubLink7.target = "_blank";
      gitHubLink7.classList.add("gitHubLink");
      rowContainer7.appendChild(gitHubLink7);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer7);
      container.appendChild(rowContainer7);
    }

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

  let techSkillsComment = document.createElement("p");
  techSkillsComment.innerHTML = `<p>Skills I will have aquired by the time of my LIA are:
  </p>`;
  techSkillsComment.id = "techSkillsComment";

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
  textBeforeLink.innerHTML = "Front-end developer p?? ";
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
    "I have run a private osteopathic clinic for over ten years, where I learned a lot about running a small business, gained much practice on taking a holistic approach to problem-solving, and worked with people to help them solve 'bugs' in other systems ;)";
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
    "https://angelicareutersward.se/CV/AngelicaReuterswardResume2023.pdf";
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
