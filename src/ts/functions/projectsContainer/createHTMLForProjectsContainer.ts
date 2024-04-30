export function createHTMLForProjectsContainer(): void {
  const container: HTMLElement = document.getElementById("projectsContainer__heading") as HTMLElement;

  const heading = document.createElement("h4");
  heading.innerHTML = "My projects";
  const description = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.innerHTML = "Here are some of my projects from my time at Medieinstitutet Stockholm.";
  p2.innerHTML = "Click the title to view the repo on GitHub!";

  description.appendChild(p1);
  description.appendChild(p2);
  container.appendChild(heading);
  container.appendChild(description);
}
