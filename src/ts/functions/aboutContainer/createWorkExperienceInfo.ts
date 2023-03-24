export function createWorkExperienceInfo(workExperience: HTMLDivElement): void {
  workExperience.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  workExperience.id = "workExperienceBox";

  const heading = document.createElement("h5");
  heading.innerHTML = "Work experience";
  const description = document.createElement("p");
  description.innerHTML =
    "I have run a private osteopathic clinic for over ten years, where I learned a lot about running a small business, gained much practice on taking a holistic approach to problem-solving, and worked with people to help them solve 'bugs' in other systems ;)";
  workExperience.appendChild(heading);
  workExperience.appendChild(description);
}
