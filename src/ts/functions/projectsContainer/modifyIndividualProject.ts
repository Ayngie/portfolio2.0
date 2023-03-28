import type { IRepo } from "../../models/IRepo";

export function modifyIndividualProject(
  receivedRepo: IRepo,
  title: HTMLElement,
  description: HTMLElement,
  imgLink: HTMLAnchorElement,
  backgroundImgContainer: HTMLElement,
  tryItLink: HTMLAnchorElement,
  gitHubLink: HTMLAnchorElement,
  rowContainer: HTMLElement
): void {
  if (receivedRepo.html_url === "https://github.com/Ayngie/assignment-API-graphQL_express-HiddenGems") {
    title.innerHTML = "Hidden Gems API";
    description.innerHTML = "A graphQL API + html/scss/js. Basically an updated todo-list.";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "hiddenGemsImg";
    gitHubLink.href = receivedRepo.html_url;
  }

  if (receivedRepo.html_url === "https://github.com/Ayngie/assignment-API-graphQL_standalone-Webshop") {
    title.innerHTML = "Webshop API";
    description.innerHTML = "A graphQL apollo server API for a webshop shoppingcart.";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "graphqlWebshopImg";
    gitHubLink.href = receivedRepo.html_url;
  }

  if (receivedRepo.html_url === "https://github.com/Ayngie/assignment-API-mongoDB_express_Rest-api-ReviewApp") {
    title.innerHTML = "Review App API";
    description.innerHTML = "A mongoDB express REST-API for a review app.";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "mongodbReviewAppImg";
    gitHubLink.href = receivedRepo.html_url;
  }

  if (receivedRepo.html_url === "https://github.com/Ayngie/assignment-html_css-Ready-Design") {
    title.innerHTML = "Ready Design";
    description.innerHTML = "A 'copycat' website built solely with html/css";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "readyDesignImg";
    tryItLink.setAttribute("href", "https://angelicareutersward.se/ReadyDesign/index.html");
    gitHubLink.href = receivedRepo.html_url;
    rowContainer.appendChild(tryItLink);
  }

  if (receivedRepo.html_url === "https://github.com/Ayngie/assignment-javascript-ToDo") {
    title.innerHTML = "Todo";
    description.innerHTML = "An early and very basic html/scss/JS ToDo app.";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "toDoImg";
    gitHubLink.href = receivedRepo.html_url;
  }

  if (receivedRepo.html_url === "https://github.com/Ayngie/assignment-typescript-Webshop-VackraMaltiderAB") {
    title.innerHTML = "Vackra M\xe5ltider";
    description.innerHTML = "An agile group webshop project with html/scss/TS.";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "vackraMaltiderImg";
    tryItLink.setAttribute("href", "https://angelicareutersward.se/Webshop/index.html");
    gitHubLink.href = receivedRepo.html_url;
    rowContainer.appendChild(tryItLink);
  }

  if (receivedRepo.html_url === "https://github.com/Ayngie/assignments-testing") {
    title.innerHTML = "Testing code";
    description.innerHTML = "Unit-/integrationtest/E2E";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "testingCodeImg";
    gitHubLink.href = receivedRepo.html_url;
  }

  if (receivedRepo.html_url === "https://github.com/Ayngie/portfolio2.0") {
    title.innerHTML = "My Portfolio";
    description.innerHTML = "V.2.0 - with html/scss/TS";
    imgLink.href = receivedRepo.html_url;
    backgroundImgContainer.id = "portfolioImg";
    gitHubLink.href = receivedRepo.html_url;
  }
}
