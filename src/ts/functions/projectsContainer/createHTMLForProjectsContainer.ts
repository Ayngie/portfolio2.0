export function createHTMLForProjectsContainer(): void {
  const container: HTMLElement = document.getElementById("projectsContainer__heading") as HTMLElement;

  const heading = document.createElement("h4");
  heading.innerHTML = "My projects";
  const description = document.createElement("p");
  description.innerHTML = "Here are some of my projects from my time at Medieinstitutet Stockholm.";

  container.appendChild(heading);
  container.appendChild(description);
}
