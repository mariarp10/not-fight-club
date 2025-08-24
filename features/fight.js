import { getPlayerData } from "../utils/storage.js";

const currentPictureUser = getPlayerData("avatar");

function displayUser(currentPictureUser) {
    const avatarPictureDOM = document.querySelector(".avatar-picture");
    avatarPictureDOM.src = currentPictureUser;
    const userNameContainer = document.querySelector(".user-character-name");
    userNameContainer.textContent = getPlayerData("name");
}

displayUser(currentPictureUser);
