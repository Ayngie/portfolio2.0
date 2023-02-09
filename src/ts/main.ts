import { url } from "inspector";

function createHtml() {
  let helloContainer: HTMLDivElement = document.getElementById(
    "helloContainer"
  ) as HTMLDivElement;
  let aboutContainer: HTMLDivElement = document.getElementById(
    "aboutContainer"
  ) as HTMLDivElement;
  let techStackContainer: HTMLDivElement = document.getElementById(
    "techStack"
  ) as HTMLDivElement;
  let projectsContainer: HTMLDivElement = document.getElementById(
    "projectsContainer"
  ) as HTMLDivElement;
  let contactContainer: HTMLDivElement = document.getElementById(
    "contactContainer"
  ) as HTMLDivElement;

  //helloContainer
  let helloHeading = document.createElement("h4");
  helloHeading.innerHTML = "Hi! I'm Angie!";

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

  //let profilePic = document.createElement("img") as HTMLImageElement;
  //profilePic.setAttribute("src", "/src/assets/profilepic.jpeg"); //VARFÖR BRUTEN BILD?!
  //profilePic.setAttribute("alt", "Profile picture");
  //profilePic.classList.add("profilePic");

  helloContainer.appendChild(helloHeading);
  helloContainer.appendChild(helloParagraph1);
  helloContainer.appendChild(helloParagraph2);
  //helloContainer.appendChild(profilePic);

  //techStackContainer
  // let techStackPic = document.createElement("img") as HTMLImageElement;
  // techStackPic.setAttribute("src", "/src/assets/busybee.JPG"); //VARFÖR BRUTEN BILD?!
  // techStackPic.setAttribute("alt", "Tech stack");
  // techStackPic.classList.add("techStack");

  // techStackContainer.appendChild(techStackPic);

  //aboutContainer
  let aboutHeading = document.createElement("h4");
  aboutHeading.innerHTML = "About me";

  let container = document.createElement("div");

  let relevantEducation = document.createElement("div");
  relevantEducation.classList.add(
    "shadow",
    "p-3",
    "mb-5",
    "bg-body",
    "rounded"
  );
  let eduHeading = document.createElement("h5");
  eduHeading.innerHTML = "Relevant education";
  let eduParagraph1 = document.createElement("p");
  eduParagraph1.innerHTML = "Coming soon...";
  relevantEducation.appendChild(eduHeading);
  relevantEducation.appendChild(eduParagraph1);
  container.appendChild(relevantEducation);

  let workExperience = document.createElement("div");
  workExperience.classList.add("shadow", "p-3", "mb-5", "bg-body", "rounded");
  let workHeading = document.createElement("h5");
  workHeading.innerHTML = "Work experience";
  let workParagraph1 = document.createElement("p");
  workParagraph1.innerHTML = "Coming soon...";
  workExperience.appendChild(workHeading);
  workExperience.appendChild(workParagraph1);
  container.appendChild(workExperience);

  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(container);

  //projectsContainer
  let projectsHeading = document.createElement("h4");
  projectsHeading.innerHTML = "My projects";
  let projParagraph1 = document.createElement("p");
  projParagraph1.innerHTML = "Coming soon...";
  projectsContainer.appendChild(projectsHeading);
  projectsContainer.appendChild(projParagraph1);

  //contactContainer
  let contactsHeading = document.createElement("h4");
  contactsHeading.innerHTML = "Contact";

  let contactParagraph1 = document.createElement("p");
  contactParagraph1.innerHTML =
    "I am currently looking for an internship for fall of 2023. Feel free to contact me if you have openings!";

  let contactParagraph2 = document.createElement("p");
  contactParagraph2.innerHTML = "Find me via my socials below!";

  contactContainer.appendChild(contactsHeading);
  contactContainer.appendChild(contactParagraph1);
  contactContainer.appendChild(contactParagraph2);
}

createHtml();
