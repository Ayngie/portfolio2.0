import { createCVInfo } from "./createCVInfo";
import { createRelevantEducationInfo } from "./createRelevantEducationInfo";
import { createTechSkillsInfo } from "./createTechSkillsInfo";
import { createWorkExperienceInfo } from "./createWorkExperienceInfo";

export function createHTMLForAboutContainer(): void {
  const container: HTMLElement = document.getElementById("aboutContainer") as HTMLElement;

  /* TEXT */
  const heading = document.createElement("h4");
  heading.innerHTML = "About me";

  const subcontainers = document.createElement("section");
  subcontainers.classList.add("aboutBoxes");

  // Tech Stack
  const techSkills = document.createElement("article");
  createTechSkillsInfo(techSkills);
  subcontainers.appendChild(techSkills);

  // Relevant Education
  const relevantEducation = document.createElement("article");
  createRelevantEducationInfo(relevantEducation);
  subcontainers.appendChild(relevantEducation);

  // Work Experience
  const workExperience = document.createElement("article");
  createWorkExperienceInfo(workExperience);
  subcontainers.appendChild(workExperience);

  // CV
  // const CV = document.createElement("article");
  // createCVInfo(CV);
  // subcontainers.appendChild(CV);

  /* HTML */
  container.appendChild(heading);
  container.appendChild(subcontainers);
}
