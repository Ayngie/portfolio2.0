import type { IRepo } from "../../models/IRepo";
import { createHTMLForCollapseButton } from "./createHTMLForCollapseButton";

export function createHTMLForGitRepos(repos: IRepo[]): void {
  const reposContainer = document.getElementById("projectsContainer__repos") as HTMLElement;
  reposContainer.innerHTML = "";

  for (let i = 0; i < repos.length; i++) {
    const repoBox = document.createElement("div");
    repoBox.classList.add("repoBox");
    repoBox.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");

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
    backgroundImgContainer.classList.add("repoImages");
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("rowContainer");

    const gitHubLink = document.createElement("a");
    addInfoToGitHubLink(gitHubLink);

    const tryItLink = document.createElement("a");
    addInfoToTryItLink(tryItLink);

    // Hidden gems
    if (repos[i].html_url === "https://github.com/Ayngie/assignment-API-graphQL_express-HiddenGems") {
      title.innerHTML = "Hidden Gems";
      description.innerHTML = "A graphQL express API + html/scss/js";
      backgroundImgContainer.id = "hiddenGemsImg";
      gitHubLink.href = repos[i].html_url;
    }

    // GraphQL Webshop
    if (repos[i].html_url === "https://github.com/Ayngie/assignment-API-graphQL_standalone-Webshop") {
      title.innerHTML = "GraphQL Webshop";
      description.innerHTML = "A graphQL apollo server API";
      backgroundImgContainer.id = "graphqlWebshopImg";
      gitHubLink.href = repos[i].html_url;
    }

    // MongoDB Review App
    if (repos[i].html_url === "https://github.com/Ayngie/assignment-API-mongoDB_express_Rest-api-ReviewApp") {
      title.innerHTML = "MongoDB Review App";
      description.innerHTML = "A mongoDB express REST-API";
      backgroundImgContainer.id = "mongodbReviewAppImg";
      gitHubLink.href = repos[i].html_url;
    }

    // Ready Design
    if (repos[i].html_url === "https://github.com/Ayngie/assignment-html_css-Ready-Design") {
      title.innerHTML = "Ready Design";
      description.innerHTML = "A website built solely with html/css";
      backgroundImgContainer.id = "readyDesignImg";
      tryItLink.setAttribute("href", "https://angelicareutersward.se/ReadyDesign/index.html");
      gitHubLink.href = repos[i].html_url;
      rowContainer.appendChild(tryItLink);
    }

    // ToDo
    if (repos[i].html_url === "https://github.com/Ayngie/assignment-javascript-ToDo") {
      title.innerHTML = "Todo";
      description.innerHTML = "A very basic html/scss/JS ToDo app";
      backgroundImgContainer.id = "toDoImg";
      gitHubLink.href = repos[i].html_url;
    }

    // Webshop Vackra Måltider
    // (under projektarbetet hette det DukafintAB)
    if (repos[i].html_url === "https://github.com/Ayngie/assignment-typescript-Webshop-VackraMaltiderAB") {
      title.innerHTML = "Webshop Vackra M\xe5ltider";
      description.innerHTML = "An agile group project html/scss/TS";
      backgroundImgContainer.id = "vackraMaltiderImg";
      tryItLink.setAttribute("href", "https://angelicareutersward.se/Webshop/index.html");
      gitHubLink.href = repos[i].html_url;
      rowContainer.appendChild(tryItLink);
    }

    // Testning
    if (repos[i].html_url === "https://github.com/Ayngie/assignments-testing") {
      title.innerHTML = "Testing code";
      description.innerHTML = "Unit-/integration-/and E2E-testing";
      backgroundImgContainer.id = "testingCodeImg";
      gitHubLink.href = repos[i].html_url;
    }

    // Portfolio
    if (repos[i].html_url === "https://github.com/Ayngie/portfolio2.0") {
      title.innerHTML = "My Portfolio";
      description.innerHTML = "V.2.0 - with html/scss/TS";
      backgroundImgContainer.id = "portfolioImg";
      gitHubLink.href = repos[i].html_url;
    }

    titleLink.appendChild(title);
    title.appendChild(description);
    rowContainer.appendChild(gitHubLink);

    repoBox.appendChild(titleLink);
    repoBox.appendChild(backgroundImgContainer);
    repoBox.appendChild(rowContainer);

    reposContainer.appendChild(repoBox);
  }
  createHTMLForCollapseButton();
}

function addInfoToGitHubLink(gitHubLink: HTMLAnchorElement): HTMLAnchorElement {
  gitHubLink.innerHTML = "GitHub";
  gitHubLink.target = "_blank";
  gitHubLink.classList.add("gitHubLink");

  return gitHubLink;
}

function addInfoToTryItLink(tryItLink: HTMLAnchorElement): HTMLAnchorElement {
  tryItLink.target = "_blank";
  tryItLink.innerHTML = "Try it!";
  tryItLink.classList.add("tryItLink");

  return tryItLink;
}
