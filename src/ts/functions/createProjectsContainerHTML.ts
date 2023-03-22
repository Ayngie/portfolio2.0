export function createProjectsContainerHTML(): void {
  const projectsContainer: HTMLDivElement = document.getElementById("projectsContainer__heading") as HTMLDivElement;

  const projectsHeading = document.createElement("h4");
  projectsHeading.innerHTML = "My projects";
  const projParagraph1 = document.createElement("p");
  projParagraph1.innerHTML = "Here are some of my projects from my time at Medieinstitutet Stockholm.";

  projectsContainer.appendChild(projectsHeading);
  projectsContainer.appendChild(projParagraph1);
}
