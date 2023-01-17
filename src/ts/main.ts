function init() {
  createHtml();
}

function createHtml() {
  //hämta container
  let main = document.getElementById("main-container") as HTMLDivElement;

  //skapa element för att kunna animatea i scss
  let heading = document.createElement("div");
  heading.innerHTML = "<h1>Welcome to my portfolio!</h1>";
  let heartContainer = document.createElement("div");
  let heartAnimation = document.createElement("div");
  heartContainer.classList.add("heart-container");
  heartAnimation.classList.add("heart");
  heartContainer.appendChild(heartAnimation);
  main.appendChild(heading);
  main.appendChild(heartContainer);
}
init();
