import { getRepos } from "./getRepos";

export function createHTMLForExpandButton(): void {
  const reposContainer = document.getElementById("projectsContainer__repos") as HTMLDivElement;
  reposContainer.innerHTML = "";

  const collapseBtnContainer = document.getElementById("projectsContainer__collapseBtn") as HTMLDivElement;
  collapseBtnContainer.innerHTML = "";

  const link = document.createElement("a");
  link.setAttribute("href", "#projectsContainer");

  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("aria-label", "Expand");
  btn.classList.add("btn", "btn-light");
  btn.innerHTML = "EXPAND";
  // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/no-unsafe-argument
  btn.addEventListener("click", getRepos);

  link.appendChild(btn);
  reposContainer.appendChild(link);
}
