export function createHTMLForContactContainer(): void {
  const contactContainer = document.getElementById("contactContainerJS") as HTMLElement;

  const contactsHeading = document.createElement("h4");
  contactsHeading.innerHTML = "Contact";

  const contactParagraph1 = document.createElement("p");
  contactParagraph1.innerHTML =
    "I am currently looking for an internship for fall of 2023. Feel free to contact me if you have openings!";

  const contactParagraph2 = document.createElement("p");
  contactParagraph2.innerHTML = "Click an icon to get in touch with me!";

  contactContainer.appendChild(contactsHeading);
  contactContainer.appendChild(contactParagraph1);
  contactContainer.appendChild(contactParagraph2);
}
