import { createHTMLForExpandButton } from "./createHTMLForExpandButton";

export function createHTMLForCollapseButton(): void {
  const container = document.getElementById("projectsContainer__collapseBtn") as HTMLElement;

  container.innerHTML = "";
  const btn = document.createElement("button");

  btn.setAttribute("type", "button");
  btn.classList.add("btn", "btn-light");
  btn.setAttribute("aria-label", "Collapse");
  btn.innerHTML = "COLLAPSE";
  btn.addEventListener("click", createHTMLForExpandButton);

  const link = document.createElement("a");
  link.setAttribute("href", "#projectsContainer");
  link.appendChild(btn);

  container.appendChild(link);
}
