export function createRelevantEducationInfo(relevantEducation: HTMLElement): void {
  relevantEducation.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  relevantEducation.id = "relevantEducationBox";

  const eduHeading = document.createElement("h5");
  eduHeading.innerHTML = "Relevant education";
  const educationsBox = document.createElement("div");
  educationsBox.classList.add("educationsBox");

  const medieinstitutet = document.createElement("p");
  const textBeforeLink = document.createElement("span");
  textBeforeLink.innerHTML = "Front-end developer på ";
  const MILink = document.createElement("a");
  MILink.href = "https://medieinstitutet.se/utbildningar/front-end-developer/";
  MILink.target = "_blank";
  MILink.innerHTML = "Medieinstitutet";
  const textAfterLink = document.createElement("span");
  textAfterLink.innerHTML = " Stockholm (2022-2024)";
  MILink.id = "medieinstitutetURL";

  const programmering1 = document.createElement("p");
  programmering1.innerHTML = "Programmering 1, Jensen Komvux (11/2020 - 01/2021)";

  const webbutveckling1 = document.createElement("p");
  webbutveckling1.innerHTML = "Webbutveckling 1, Jensen Komvux (09/2020 - 11/2020)";

  medieinstitutet.appendChild(textBeforeLink);
  medieinstitutet.appendChild(MILink);
  medieinstitutet.appendChild(textAfterLink);

  educationsBox.appendChild(medieinstitutet);
  educationsBox.appendChild(programmering1);
  educationsBox.appendChild(webbutveckling1);

  relevantEducation.appendChild(eduHeading);
  relevantEducation.appendChild(educationsBox);
}
