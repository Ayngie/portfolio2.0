export function createProfileImage(profileImgBox: HTMLDivElement): HTMLDivElement {
  profileImgBox.classList.add("profileImgBox");

  const profileImg = document.createElement("img");
  profileImg.src = "https://angelicareutersward.se/Images/ProfilePic.jpeg";
  profileImg.alt = "Profile picture";
  profileImg.classList.add("profileImg");
  profileImgBox.appendChild(profileImg);

  return profileImgBox;
}
