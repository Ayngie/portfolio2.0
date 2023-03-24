import "../scss/main.scss";
import { createHTMLForHelloContainer } from "./functions/helloContainer/createHTMLForHelloContainer";
import { createHTMLForProjectsContainer } from "./functions/projectsContainer/createHTMLForProjectsContainer";
import { createHTMLForExpandButton } from "./functions/projectsContainer/createHTMLForExpandButton";
import { createHTMLForAboutContainer } from "./functions/aboutContainer/createHTMLForAboutContainer";
import { createHTMLForContactContainer } from "./functions/contactContainer/createHTMLForContactContainer";

function createHTML(): void {
  createHTMLForHelloContainer();
  createHTMLForProjectsContainer();
  createHTMLForExpandButton();
  createHTMLForAboutContainer();
  createHTMLForContactContainer();
}
createHTML();
