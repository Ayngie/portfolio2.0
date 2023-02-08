function createHtml() {
  let mainContainer: HTMLDivElement = document.getElementById(
    "mainContainer"
  ) as HTMLDivElement;

  let aboutContainer = document.createElement("div");
  let projectsContainer = document.createElement("div");
  let contactContainer = document.createElement("div");

  aboutContainer.classList.add("shadow-sm p-3 mb-5 bg-body rounded");
  projectsContainer.classList.add("shadow-sm p-3 mb-5 bg-body rounded");
  contactContainer.classList.add("shadow-sm p-3 mb-5 bg-body rounded");

  //aboutContainer
  let heading = document.createElement("h4");
  heading.innerHTML = "Hi! I'm Angie!";

  let paragraph1 = document.createElement("p");
  paragraph1.innerHTML = "Welcome to my portfolio.";

  let paragraph2 = document.createElement("div");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  span1.innerHTML = "I love building things and seeing them come ";
  span2.innerHTML = "alive";
  span3.innerHTML = "!";
  span2.classList.add("alive");
  paragraph2.appendChild(span1);
  paragraph2.appendChild(span2);
  paragraph2.appendChild(span3);

  aboutContainer.appendChild(heading);
  aboutContainer.appendChild(paragraph1);
  aboutContainer.appendChild(paragraph2);

  //projectsContainer

  //contactContainer

  //append
  mainContainer.appendChild(aboutContainer);
  mainContainer.appendChild(projectsContainer);
  mainContainer.appendChild(contactContainer);
}

createHtml();
