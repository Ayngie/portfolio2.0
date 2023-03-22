import { createGetReposButtonHTML } from "./createGetReposButtonHTML";
import type { IRepo } from "../models/IRepo";

export function createGitReposHTML(repos: IRepo[]): void {
  const reposContainer = document.getElementById(
    "projectsContainer__repos"
  ) as HTMLDivElement;
  const collapseBtnContainer = document.getElementById(
    "projectsContainer__collapseBtn"
  ) as HTMLDivElement;

  reposContainer.innerHTML = "";
  collapseBtnContainer.innerHTML = "";

  const collapseBtn = document.createElement("button");
  collapseBtn.setAttribute("type", "button");
  collapseBtn.classList.add("btn", "btn-light");
  collapseBtn.innerHTML = "COLLAPSE";
  collapseBtn.addEventListener("click", createGetReposButtonHTML);

  const collapseBtnALink = document.createElement("a");
  collapseBtnALink.setAttribute("href", "#projectsContainer");
  collapseBtnALink.appendChild(collapseBtn);

  for (let i = 0; i < repos.length; i++) {
    const container = document.createElement("div");
    container.classList.add("repoBox");
    container.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");

    const link = document.createElement("a");
    link.href = repos[i].html_url;
    link.target = "_blank";
    link.classList.add("repo__link");

    const title = document.createElement("p");
    title.classList.add("repo__title");
    title.innerHTML = repos[i].name;
    link.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("repo__description");
    description.innerHTML = repos[i].description;
    title.appendChild(description);

    container.appendChild(link);

    // Hidden gems
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-API-graphQL_express-HiddenGems"
    ) {
      title.innerHTML = "Hidden Gems";
      description.innerHTML = "A graphQL express API + html/scss/js";
      title.appendChild(description);
      const backgroundImgContainer = document.createElement("div");
      backgroundImgContainer.id = "hiddenGemsImg";
      const rowContainer = document.createElement("div");
      rowContainer.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      const gitHubLink = document.createElement("a");
      gitHubLink.href = repos[i].html_url;
      gitHubLink.innerHTML = "GitHub";
      gitHubLink.target = "_blank";
      gitHubLink.classList.add("gitHubLink");
      rowContainer.appendChild(gitHubLink);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer);
      container.appendChild(rowContainer);
    }

    // GraphQL Webshop
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-API-graphQL_standalone-Webshop"
    ) {
      title.innerHTML = "GraphQL Webshop";
      description.innerHTML = "A graphQL apollo server API";
      title.appendChild(description);
      const backgroundImgContainer1 = document.createElement("div");
      backgroundImgContainer1.id = "graphqlWebshopImg";
      const rowContainer1 = document.createElement("div");
      rowContainer1.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      const gitHubLink1 = document.createElement("a");
      gitHubLink1.href = repos[i].html_url;
      gitHubLink1.innerHTML = "GitHub";
      gitHubLink1.target = "_blank";
      gitHubLink1.classList.add("gitHubLink");
      rowContainer1.appendChild(gitHubLink1);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer1);
      container.appendChild(rowContainer1);
    }

    // MongoDB Review App
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-API-mongoDB_express_Rest-api-ReviewApp"
    ) {
      title.innerHTML = "MongoDB Review App";
      description.innerHTML = "A mongoDB express REST-API";
      title.appendChild(description);
      const backgroundImgContainer2 = document.createElement("div");
      backgroundImgContainer2.id = "mongodbReviewAppImg";
      const rowContainer2 = document.createElement("div");
      rowContainer2.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      const gitHubLink2 = document.createElement("a");
      gitHubLink2.href = repos[i].html_url;
      gitHubLink2.innerHTML = "GitHub";
      gitHubLink2.target = "_blank";
      gitHubLink2.classList.add("gitHubLink");
      rowContainer2.appendChild(gitHubLink2);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer2);
      container.appendChild(rowContainer2);
    }

    // Ready Design
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-html_css-Ready-Design"
    ) {
      title.innerHTML = "Ready Design";
      description.innerHTML = "A website built solely with html/css";
      title.appendChild(description);
      const backgroundImgContainer3 = document.createElement("div");
      backgroundImgContainer3.id = "readyDesignImg";
      const rowContainer3 = document.createElement("div");
      rowContainer3.classList.add("rowContainer");
      const tryItLink = document.createElement("a");
      tryItLink.setAttribute(
        "href",
        "https://angelicareutersward.se/ReadyDesign/index.html"
      );
      tryItLink.target = "_blank";
      tryItLink.innerHTML = "Try it!";
      tryItLink.classList.add("tryItLink");
      const gitHubLink3 = document.createElement("a");
      gitHubLink3.href = repos[i].html_url;
      gitHubLink3.innerHTML = "GitHub";
      gitHubLink3.target = "_blank";
      gitHubLink3.classList.add("gitHubLink");
      rowContainer3.appendChild(gitHubLink3);
      rowContainer3.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer3);
      container.appendChild(rowContainer3);
    }

    // ToDo
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-javascript-ToDo"
    ) {
      title.innerHTML = "Todo";
      description.innerHTML = "A very basic html/scss/JS ToDo app";
      title.appendChild(description);
      const backgroundImgContainer4 = document.createElement("div");
      backgroundImgContainer4.id = "toDoImg";
      const rowContainer4 = document.createElement("div");
      rowContainer4.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      const gitHubLink4 = document.createElement("a");
      gitHubLink4.href = repos[i].html_url;
      gitHubLink4.innerHTML = "GitHub";
      gitHubLink4.target = "_blank";
      gitHubLink4.classList.add("gitHubLink");
      rowContainer4.appendChild(gitHubLink4);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer4);
      container.appendChild(rowContainer4);
    }

    // Webshop Vackra Måltider
    // (under projektarbetet hette det DukafintAB)
    if (
      repos[i].html_url ==
      "https://github.com/Ayngie/assignment-typescript-Webshop-VackraMaltiderAB"
    ) {
      title.innerHTML = "Webshop Vackra M\xe5ltider";
      description.innerHTML = "An agile group project html/scss/TS";
      title.appendChild(description);
      const backgroundImgContainer5 = document.createElement("div");
      backgroundImgContainer5.id = "vackraMaltiderImg";
      const rowContainer5 = document.createElement("div");
      rowContainer5.classList.add("rowContainer");
      const tryItLink1 = document.createElement("a");
      tryItLink1.setAttribute(
        "href",
        "https://angelicareutersward.se/Webshop/index.html"
      );
      tryItLink1.target = "_blank";
      tryItLink1.innerHTML = "Try it!";
      tryItLink1.classList.add("tryItLink");
      const gitHubLink5 = document.createElement("a");
      gitHubLink5.href = repos[i].html_url;
      gitHubLink5.innerHTML = "GitHub";
      gitHubLink5.target = "_blank";
      gitHubLink5.classList.add("gitHubLink");
      rowContainer5.appendChild(gitHubLink5);
      rowContainer5.appendChild(tryItLink1);
      container.appendChild(backgroundImgContainer5);
      container.appendChild(rowContainer5);
    }

    // Testning
    if (repos[i].html_url == "https://github.com/Ayngie/assignments-testing") {
      title.innerHTML = "Testing code";
      description.innerHTML = "Unit-/integration-/and E2E-testing";
      title.appendChild(description);
      const backgroundImgContainer6 = document.createElement("div");
      backgroundImgContainer6.id = "testingCodeImg";
      const rowContainer6 = document.createElement("div");
      rowContainer6.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute(
      //   "href",
      //   "https://angelicareutersward.se/Webshop/index.html"
      // );
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      const gitHubLink6 = document.createElement("a");
      gitHubLink6.href = repos[i].html_url;
      gitHubLink6.innerHTML = "GitHub";
      gitHubLink6.target = "_blank";
      gitHubLink6.classList.add("gitHubLink");
      rowContainer6.appendChild(gitHubLink6);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer6);
      container.appendChild(rowContainer6);
    }

    // Try it Portfolio
    if (repos[i].html_url == "https://github.com/Ayngie/portfolio2.0") {
      title.innerHTML = "My Portfolio";
      description.innerHTML = "V.2.0 - with html/scss/TS";
      title.appendChild(description);
      const backgroundImgContainer7 = document.createElement("div");
      backgroundImgContainer7.id = "portfolioImg";
      const rowContainer7 = document.createElement("div");
      rowContainer7.classList.add("rowContainer");
      // let tryItLink = document.createElement("a");
      // tryItLink.setAttribute("href", "https://angelicareutersward.se/");
      // tryItLink.target = "_blank";
      // tryItLink.innerHTML = "Try it!";
      // tryItLink.classList.add("tryItLink");
      const gitHubLink7 = document.createElement("a");
      gitHubLink7.href = repos[i].html_url;
      gitHubLink7.innerHTML = "GitHub";
      gitHubLink7.target = "_blank";
      gitHubLink7.classList.add("gitHubLink");
      rowContainer7.appendChild(gitHubLink7);
      // rowContainer.appendChild(tryItLink);
      container.appendChild(backgroundImgContainer7);
      container.appendChild(rowContainer7);
    }

    reposContainer.appendChild(container);
  }
  collapseBtnContainer.appendChild(collapseBtnALink);
}
