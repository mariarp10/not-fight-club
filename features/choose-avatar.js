import { updatePlayerData } from "../utils/storage";

const confirmSelection = document.querySelector(".confirm-avatar-selection");

confirmSelection.addEventListener("click", () => {
    const selectedPicture = document.querySelector(".avatar-selector:checked + .image-wrapper .avatar-picture");
    const pictureAddress = selectedPicture.getAttribute("src");
    updatePlayerData("avatar", pictureAddress);
    window.location.href = "homePage.html";
})


