import { getPlayerData, updatePlayerData } from "../utils/storage.js";

const editWindow = document.querySelector(".edit-window");

function displayName() {
    const nameDataField = document.querySelector(".current-data");
    const nameData = getPlayerData("name");
    nameDataField.textContent = nameData;
}

function closeEditWindow() {
    editWindow.classList.remove("opened");
}

function openEditWindow() {
    editWindow.classList.add("opened")
}

function saveNewName() {
    const newNameValue = document.querySelector(".new-name-field").value.trim();
    if (newNameValue) {
        updatePlayerData("name", newNameValue);
        closeEditWindow();
    } else {
        closeEditWindow();
    }
}


const editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", openEditWindow)

const closeButton = document.querySelector(".close-button--settings");
closeButton.addEventListener("click", closeEditWindow);

const saveButton = document.querySelector(".confirmation-button--settings");
saveButton.addEventListener("click", saveNewName);

displayName()