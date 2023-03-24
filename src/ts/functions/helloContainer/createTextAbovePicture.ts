export function createTextAbovePicture(textAbovePicture: HTMLDivElement): HTMLElement {
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  span1.innerHTML = "I love building things and seeing them come ";
  span2.innerHTML = "alive";
  span3.innerHTML = "!";
  span2.classList.add("alive");
  textAbovePicture.appendChild(span1);
  textAbovePicture.appendChild(span2);
  textAbovePicture.appendChild(span3);

  return textAbovePicture;
}
