export function createTextBelowPicture(textBelowPicture: HTMLDivElement): HTMLElement {
  textBelowPicture.id = "helloAboutParagraphs";
  const paragraph1 = document.createElement("p");
  paragraph1.innerHTML =
    "Who am I? I'm an Osteopath turned Front End Developer. After a decade of working in manual medicine, I discovered a new passion in frontend development. I never knew how much fun it was - I'm so excited to get to join the tech world!";
  const paragraph2 = document.createElement("p");
  paragraph2.innerHTML =
    "Once I started learning more, I couldn't stop. I enrolled at Medieinstitutet, Stockholm, and halfway through my first year I created this portfolio (with techniques: Vanilla JS, TypeScript, HTML, SCSS).";
  const paragraph3 = document.createElement("p");
  paragraph3.innerHTML =
    "I've since then advanced in my technical skills, gained knowledge in various frameworks and libraries, and spent two internships at PostNord Group IT learning heaps and developing even more skills. This portfolio however lives on :)";
  const paragraph4 = document.createElement("p");
  paragraph4.innerHTML =
    "To see my most recent project (showingcasing more advanced skills and techniques), why don't you view my degree project about Gestational Diabetes (you can find it under my projects below)!";

  textBelowPicture.appendChild(paragraph1);
  textBelowPicture.appendChild(paragraph2);
  textBelowPicture.appendChild(paragraph3);
  textBelowPicture.appendChild(paragraph4);

  return textBelowPicture;
}
