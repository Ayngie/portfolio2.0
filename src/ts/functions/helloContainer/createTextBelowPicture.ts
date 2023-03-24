export function createTextBelowPicture(textBelowPicture: HTMLDivElement): HTMLElement {
  textBelowPicture.id = "helloAboutParagraphs";
  const paragraph1 = document.createElement("p");
  paragraph1.innerHTML =
    "Who am I? I'm an Osteopath turned Front End Developer. After a decade of working in manual medicine, I have discovered a new passion in frontend development. I never knew how much fun it was!";
  const paragraph2 = document.createElement("p");
  paragraph2.innerHTML =
    "Once I started learning more, I couldn't stop. Now I'm more than halfway through the first year at Medieinstitutet Sthlm, and we're searching for internships as we speak...";
  const paragraph3 = document.createElement("p");
  paragraph3.innerHTML =
    "If you have an internship opening, feel free to contact me. I'm so excited to get started in the tech world!";

  textBelowPicture.appendChild(paragraph1);
  textBelowPicture.appendChild(paragraph2);
  textBelowPicture.appendChild(paragraph3);

  return textBelowPicture;
}
