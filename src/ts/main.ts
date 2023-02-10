function createHtml() {
  helloContainer();
  aboutContainer();
  projectsContainer();
  contactContainer();
}

function helloContainer() {
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
  profileImg.src =
    "https://previews.dropbox.com/p/thumb/AByTpw0aa09HSlg8HM1b1MGjonkkJrXcq3OHnexo7TPotl6mPbsItK3_ZaJsDhVIBLbkWwu5SPJZe6-YCGw7x3538GwVm1eM55AbF1YYFq8ltGDx_Es6NCUN27Ze0wAJoTf1p0EjPFgno_jgMY89gJuMY1gBF9O7drGPjdOErqqDKBOu15R02-L9UGPaD2RU5_Mb4AFgrSowARUTJsGVapjFPdCcFwkDm_2tVG45VE9tJtMmP36HTzc2gWvX_V7jZD-MmTLNXKm4AhPJumgWzG16oI4RDH0qxiKsaMDP-HzaesZysgcOMGaPy8MOYmnEedYhvSrLmivO_wQbJj9YrDtq01jzxjc__7-Hp6ooIxV3ZEfz3lZVriJFRs2KNzI1fpA/p.jpeg";
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

function aboutContainer() {
  let aboutContainer: HTMLDivElement = document.getElementById(
    "aboutContainer"
  ) as HTMLDivElement;

  /* TEXT */
  let aboutHeading = document.createElement("h4");
  aboutHeading.innerHTML = "About me";

  let container = document.createElement("div");
  container.classList.add("aboutBoxes");

  //Tech Stack
  let techStack = document.createElement("div");
  techStack.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  techStack.id = "techStackBox";

  let techHeading = document.createElement("h5");
  techHeading.innerHTML = "Tech Stack";

  let techImgBox = document.createElement("div");
  techImgBox.classList.add("techImgBox");
  let techImg = document.createElement("img");
  techImg.src =
    "https://previews.dropbox.com/p/thumb/AByejo6LZKZ2uVVtZ45Mt3Zt7jqjuO5KyLM5C1jv4C0d0ANAIcrOCF_68axgpm-AZdbiC3kwANAdHy8NcOp2CIbhRsN4PBrB4jfVassgLWFVx0PWtcNlZ18gZU2w2VjyALO6RVI6ECxHS1t3Cc0Sb-JcfURhzIVKgqVt6gHdtuGFsXYu5pvMyZBsr2bx9Pe0u9xTKqyitnKH4cJYVmaPkIOEWz_lASFmFc-6W_L7UDitH19vBhtCKbGRHgds-ftUqNpqKmg1BkBnKOxJHLY7XH2yQS06Wl-PhvyYOnFmpLwsIwFKjuDoefNuZL9laOJ8MgnHt60jNX5JhKWW0XTEcT50mlx7ziAnS7EWE3jnOUQFCQ4Vnb0PSlg1SlfFgCq24mP555BHFdgiq4tZNQseIYbuyLEmGTP8wCFMJD37S-D6wZxCtO9rUTkAW7mUFvgz4T8/p.jpeg";
  techImg.alt = "Tech stack / Turtle";
  techImg.classList.add("techImg");
  techImgBox.appendChild(techImg);

  techStack.appendChild(techHeading);
  techStack.appendChild(techImgBox);
  container.appendChild(techStack);

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
    "https://www.dropbox.com/s/ms1pg4pjfu2ydlb/AngelicaReuterswardResume.pdf?dl=0";
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

function projectsContainer() {
  let projectsContainer: HTMLDivElement = document.getElementById(
    "projectsContainer"
  ) as HTMLDivElement;

  let projectsHeading = document.createElement("h4");
  projectsHeading.innerHTML = "My projects";
  let projParagraph1 = document.createElement("p");
  projParagraph1.innerHTML = "Coming soon...";
  projectsContainer.appendChild(projectsHeading);
  projectsContainer.appendChild(projParagraph1);
}

function contactContainer() {
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

createHtml();
