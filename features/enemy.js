import { getPlayerData } from "../utils/storage.js";

function getRandomNumber(purpose) {
  if (purpose === "name") {
    return Math.floor(Math.random() * 6);
  } else if (purpose === "avatar") {
    const playerAvatar = getPlayerData("avatar");
    const playerAvatarNumber = Number(playerAvatar.match(/[1-9]/)[0]);
    let enemyAvatarNumber;
    do {
      enemyAvatarNumber = Math.floor(Math.random() * 6) + 1;
    } while (enemyAvatarNumber === playerAvatarNumber);
    return enemyAvatarNumber;
  }
}

function initializeEnemy() {
  const names = [
    "Munchko",
    "Bogglez",
    "Snorfle",
    "Craggy",
    "Zibble",
    "Thrumpo",
  ];
  const enemyData = {
    name: names[getRandomNumber("name")],
    avatar: `./assets/avatars/pic${getRandomNumber("avatar")}.png`,
  };
  localStorage.setItem("enemy", JSON.stringify(enemyData));
}

initializeEnemy();

function renderEnemy() {
    const nameContainer = document.querySelector(".enemy-character-name");
    const enemyName = JSON.parse(localStorage.getItem("enemy"))["name"];
    nameContainer.textContent = enemyName;
  const imageContainer = document.querySelector(".avatar-picture--enemy");
  const imageAddress = JSON.parse(localStorage.getItem("enemy"))["avatar"];
  imageContainer.src = imageAddress;
}

renderEnemy();
