import { getPlayerData, updatePlayerData } from "../utils/storage.js";
const avatarOptions = document.querySelector(".container-wrapper");
const currentPictureUser = getPlayerData("avatar");

function renderCharacterData(currentPictureUser) {
  const currentAvatarImg = document.querySelector(".current-avatar-picture");
  currentAvatarImg.src = currentPictureUser;

  const nameField = document.querySelector(".character-name");
  nameField.textContent = getPlayerData("name");

  const winsField = document.querySelector(".wins-number");
  winsField.textContent = getPlayerData("stats", "wins");

  const lossesFiled = document.querySelector(".losses-number");
  lossesFiled.textContent = getPlayerData("stats", "losses");
}

renderCharacterData(currentPictureUser);

function markCurrentAvatar(currentPictureUser) {
  const currentPictureUserDOM = document.querySelector(
    `img.avatar-picture[src="${currentPictureUser}"]`
  );
  const imageContainer = currentPictureUserDOM.parentElement;
  imageContainer.classList.add("marked");
  const imageSelector = imageContainer.previousElementSibling;
  imageSelector.disabled = true;
  imageContainer.insertAdjacentHTML(
    "beforeend",
    `
        <svg class="selected-mark" xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 24 24" fill="white"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
    `
  );
}

markCurrentAvatar(currentPictureUser);

const saveButton = document.querySelector(".confirmation-button");

saveButton.addEventListener("click", () => {
  const newSelection = document.querySelector(
    ".avatar-selector:checked + .image-wrapper .avatar-picture"
  );
  const newAddress = newSelection.getAttribute("src");
  updatePlayerData("avatar", newAddress);
  avatarOptions.style.display = "none";
});

document
  .querySelector(".control-icon.edit-icon")
  .addEventListener("click", () => {
    avatarOptions.style.display = "block";
  });

document.querySelector(".close-button").addEventListener("click", () => {
  avatarOptions.style.display = "none";
});
