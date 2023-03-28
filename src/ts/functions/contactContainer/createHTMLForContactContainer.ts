export function createHTMLForContactContainer(): void {
  const container = document.getElementById("contactContainerJS") as HTMLElement;

  const heading = document.createElement("h4");
  heading.innerHTML = "Contact";

  const paragraph1 = document.createElement("p");
  paragraph1.innerHTML =
    "I am currently looking for an internship for fall of 2023. Feel free to contact me if you have openings!";

  const paragraph2 = document.createElement("p");
  paragraph2.innerHTML = "Click an icon to get in touch with me!";

  container.appendChild(heading);
  container.appendChild(paragraph1);
  container.appendChild(paragraph2);
}
