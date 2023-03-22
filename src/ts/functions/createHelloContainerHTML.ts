export function createHelloContainerHTML(): void {
  const helloContainer: HTMLDivElement = document.getElementById("helloContainer") as HTMLDivElement;

  /* TEXT */
  const helloHeading = document.createElement("h4");
  helloHeading.innerHTML = "Hi! I'm Angelica!";

  const helloParagraph1 = document.createElement("p");
  helloParagraph1.innerHTML = "Welcome to my portfolio.";

  const helloParagraph2 = document.createElement("div");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  span1.innerHTML = "I love building things and seeing them come ";
  span2.innerHTML = "alive";
  span3.innerHTML = "!";
  span2.classList.add("alive");
  helloParagraph2.appendChild(span1);
  helloParagraph2.appendChild(span2);
  helloParagraph2.appendChild(span3);

  /* IMAGE */
  const profileImgBox = document.createElement("div");
  profileImgBox.classList.add("profileImgBox");

  const profileImg = document.createElement("img");
  profileImg.src = "https://angelicareutersward.se/assets/profilepic.jpeg";
  profileImg.alt = "Profile picture";
  profileImg.classList.add("profileImg");
  profileImgBox.appendChild(profileImg);

  /* MORE TEXT */

  const helloAboutParagraphs = document.createElement("div");
  helloAboutParagraphs.id = "helloAboutParagraphs";
  const myParagraph1 = document.createElement("p");
  myParagraph1.innerHTML =
    "Who am I? I'm an Osteopath turned Front End Developer. After a decade of working in manual medicine, I have discovered a new passion in frontend development. I never knew how much fun it was!";
  const myParagraph2 = document.createElement("p");
  myParagraph2.innerHTML =
    "Once I started learning more, I couldn't stop. Now I'm more than halfway through the first year at Medieinstitutet Sthlm, and we're searching for internships as we speak...";
  const myParagraph3 = document.createElement("p");
  myParagraph3.innerHTML =
    "If you have an internship opening, feel free to contact me. I'm so excited to get started in the tech world!";

  helloAboutParagraphs.appendChild(myParagraph1);
  helloAboutParagraphs.appendChild(myParagraph2);
  helloAboutParagraphs.appendChild(myParagraph3);
  /* HTML */
  helloContainer.appendChild(helloHeading);
  helloContainer.appendChild(helloParagraph1);
  helloContainer.appendChild(helloParagraph2);
  helloContainer.appendChild(profileImgBox);
  helloContainer.appendChild(helloAboutParagraphs);
}
