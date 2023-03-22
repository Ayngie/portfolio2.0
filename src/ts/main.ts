import { createHelloContainerHTML } from "./functions/createHelloContainerHTML";
import { createProjectsContainerHTML } from "./functions/createProjectsContainerHTML";
import { createGetReposButtonHTML } from "./functions/createGetReposButtonHTML";
import { createAboutContainerHTML } from "./functions/createAboutContainerHTML";
import { createContactContainerHTML } from "./functions/createContactContainerHTML";

function createHTML(): void {
  createHelloContainerHTML();
  createProjectsContainerHTML();
  createGetReposButtonHTML();
  createAboutContainerHTML();
  createContactContainerHTML();
}
createHTML();
