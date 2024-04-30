/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { IRepo } from "../../models/IRepo";
import { createHTMLForCollapseButton } from "./createHTMLForCollapseButton";
import { modifyIndividualProject } from "./modifyIndividualProject";

export function createHTMLForProjects(repos: IRepo[]): void {
  const container = document.getElementById("projectsContainer__repos") as HTMLElement;
  container.innerHTML = "";

  for (let i = 0; i < repos.length; i++) {
    const project = document.createElement("article");
    project.classList.add("repoBox");
    project.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");

    const title = document.createElement("p");
    title.classList.add("repo__title");
    title.innerHTML = repos[i].name;

    const titleLink = document.createElement("a");
    titleLink.classList.add("repo__link");
    titleLink.target = "_blank";
    titleLink.href = repos[i].html_url;

    const description = document.createElement("p");
    description.classList.add("repo__description");
    description.innerHTML = repos[i].description;

    const backgroundImgContainer = document.createElement("div");
    // backgroundImgContainer.classList.add("repoImages");

    const rowContainer = document.createElement("div");
    rowContainer.classList.add("rowContainer");

    const imgLink = document.createElement("a");
    addInfoToImageLink(imgLink);

    const gitHubLink = document.createElement("a");
    addInfoToGitHubLink(gitHubLink);

    // const tryItLink = document.createElement("a");
    // addInfoToTryItLink(tryItLink);

    if (repos[i].html_url === "https://github.com/Ayngie/project_setups") {
      continue;
    }

    if (
      // eslint-disable-next-line no-constant-condition
      repos[i].html_url === "https://github.com/Ayngie/assignment-API-graphQL_express-HiddenGems" ||
      "https://github.com/Ayngie/assignment-API-graphQL_standalone-Webshop" ||
      "https://github.com/Ayngie/assignment-API-mongoDB_RestAPI-Webshop" ||
      "https://github.com/Ayngie/gym-review-site-REST-API" ||
      "https://github.com/Ayngie/assignment-html_css-Ready-Design" ||
      "https://github.com/Ayngie/assignment-javascript-ToDo" ||
      "https://github.com/Ayngie/assignment-typescript-Webshop-VackraMaltiderAB" ||
      "https://github.com/Ayngie/assignments-testing" ||
      "https://github.com/Ayngie/portfolio2.0"
    ) {
      const receivedRepo = repos[i];
      modifyIndividualProject(
        receivedRepo,
        title,
        description,
        imgLink,
        backgroundImgContainer,
        //tryItLink,
        gitHubLink,
        rowContainer
      );
    }

    titleLink.appendChild(title);
    title.appendChild(description);
    rowContainer.appendChild(gitHubLink);

    project.appendChild(titleLink);
    imgLink.appendChild(backgroundImgContainer);
    project.appendChild(imgLink);
    project.appendChild(rowContainer);

    container.appendChild(project);
  }
  createHTMLForCollapseButton();
}

function addInfoToImageLink(imgLink: HTMLAnchorElement): HTMLAnchorElement {
  imgLink.target = "_blank";
  imgLink.classList.add("gitHubLink");

  return imgLink;
}

function addInfoToGitHubLink(gitHubLink: HTMLAnchorElement): HTMLAnchorElement {
  gitHubLink.innerHTML = "Click title to view on GitHub";
  gitHubLink.target = "_blank";
  gitHubLink.classList.add("gitHubLink");

  return gitHubLink;
}

// function addInfoToTryItLink(tryItLink: HTMLAnchorElement): HTMLAnchorElement {
//  tryItLink.target = "_blank";
//  tryItLink.innerHTML = "Try it!";
//  tryItLink.classList.add("tryItLink");
//
//  return tryItLink;
// }
