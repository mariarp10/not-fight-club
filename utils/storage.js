const storageKey = "player";
const currentPlayerData = JSON.parse(localStorage.getItem(storageKey));

export function updatePlayerData(attr, value) {
  currentPlayerData[attr] = value;
  localStorage.setItem(storageKey, JSON.stringify(currentPlayerData));
  location.reload();
}

export function getPlayerData(attr, innerKey) {
  if (innerKey === undefined) {
    return currentPlayerData[attr];
  } else {
    return currentPlayerData[attr][innerKey];
  }
}
