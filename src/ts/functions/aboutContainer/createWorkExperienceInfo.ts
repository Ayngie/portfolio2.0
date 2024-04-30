export function createWorkExperienceInfo(workExperience: HTMLElement): void {
  workExperience.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
  workExperience.id = "workExperienceBox";

  const heading = document.createElement("h5");
  heading.innerHTML = "Work experience";
  const description1 = document.createElement("p");
  description1.innerHTML =
    "Second frontend internship (LIA 2) at PostNord Group IT. Back in team System Components, this time around I was also able to contribute to team Web Components and to team Access & Login, broadening my technical skills with new frameworks and being part of the development of a new PN feature. Amazingly educational and fun times!";
  const description2 = document.createElement("p");
  description2.innerHTML =
    "First frontend internship (LIA 1) at PostNord Group IT. Getting to convert academical knowledge to practical expertise as well as gain lots of new skills in the highly talented System Components team!";
  const description3 = document.createElement("p");
  description3.innerHTML =
    "I have run a private osteopathic clinic for over ten years, where I learned a lot about running a small business, gained much practice on taking a holistic approach to problem-solving, and worked with people to help them solve 'bugs' in other systems ;)";
  
  workExperience.appendChild(heading);
  workExperience.appendChild(description1);
  workExperience.appendChild(description2);
  workExperience.appendChild(description3);
}
