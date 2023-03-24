export function createCVInfo(CV: HTMLDivElement): void {
  CV.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  CV.id = "CVBox";

  const heading = document.createElement("h5");
  heading.innerHTML = "CV";

  const link = document.createElement("a");
  link.href = "https://angelicareutersward.se/CV/AngelicaReuterswardResume2023.pdf";
  link.target = "_blank";
  link.innerHTML = "Click here to see my CV!";
  link.id = "CVLink";

  CV.appendChild(heading);
  CV.appendChild(link);
}
