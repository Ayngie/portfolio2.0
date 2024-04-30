export function createHTMLForProjectsContainer(): void {
  const container: HTMLElement = document.getElementById("projectsContainer__heading") as HTMLElement;

  const heading = document.createElement("h4");
  heading.innerHTML = "My projects";
  const descriptionP1 = document.createElement("p");
  const descriptionP2 = document.createElement("p");
  descriptionP1.innerHTML = "Here are some of my projects from my time at Medieinstitutet Stockholm.";
  descriptionP2.innerHTML = "Click the title to view the repo on GitHub!";

  container.appendChild(heading);
  container.appendChild(descriptionP1);
  container.appendChild(descriptionP2);
}
