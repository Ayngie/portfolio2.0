import { getRepos } from "./getRepos";

export function createGetReposButtonHTML(): void {
  const reposContainer = document.getElementById("projectsContainer__repos") as HTMLDivElement;
  const collapseBtnContainer = document.getElementById("projectsContainer__collapseBtn") as HTMLDivElement;

  reposContainer.innerHTML = "";
  collapseBtnContainer.innerHTML = "";

  const expandBtn = document.createElement("button");
  expandBtn.setAttribute("type", "button");
  expandBtn.classList.add("btn", "btn-light");
  expandBtn.innerHTML = "EXPAND";
  expandBtn.addEventListener("click", getRepos);

  const expandBtnALink = document.createElement("a");
  expandBtnALink.setAttribute("href", "#projectsContainer");

  expandBtnALink.appendChild(expandBtn);

  reposContainer.appendChild(expandBtnALink);
}
