export function createProfileImage(profileImgBox: HTMLDivElement): HTMLDivElement {
  profileImgBox.classList.add("profileImgBox");

  const profileImg = document.createElement("img");
  // profileImg.src = "../../../assets/ProfilePic.jpeg";
  // profileImg.src = "https://angelicareutersward.se/Images/ProfilePic.jpeg";
  profileImg.src = "  https://raw.githubusercontent.com/Ayngie/portfolio2.0/main/src/assets/ProfilePic.jpeg";
  profileImg.alt = "Profile picture";
  profileImg.classList.add("profileImg");
  profileImgBox.appendChild(profileImg);

  return profileImgBox;
}
