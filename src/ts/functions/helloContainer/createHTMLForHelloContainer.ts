import { createProfileImage } from "./createProfileImage";
import { createTextAbovePicture } from "./createTextAbovePicture";
import { createTextBelowPicture } from "./createTextBelowPicture";

export function createHTMLForHelloContainer(): void {
  const container: HTMLElement = document.getElementById("helloContainer") as HTMLElement;

  const heading = document.createElement("h4");
  heading.innerHTML = "Hi! I'm Angelica!";

  const welcome = document.createElement("p");
  welcome.innerHTML = "Welcome to my portfolio.";

  const textAbovePicture = document.createElement("div");
  createTextAbovePicture(textAbovePicture);

  // const profileImgBox = document.createElement("div");
  // createProfileImage(profileImgBox);

  const textBelowPicture = document.createElement("div");
  createTextBelowPicture(textBelowPicture);

  container.appendChild(heading);
  container.appendChild(welcome);
  container.appendChild(textAbovePicture);
  // container.appendChild(profileImgBox);
  container.appendChild(textBelowPicture);
}
