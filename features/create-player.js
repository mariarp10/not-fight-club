const name = document.querySelector(".name-input");
const confirmName = document.querySelector(".confirm-name");

function initializePlayer() {
  const playerName = name.value.trim();

  if (playerName) {
    const playerData = {
      name: playerName,
      avatar: "",
      stats: {
        wins: 0,
        losses: 0,
      },
    };

    localStorage.setItem("player", JSON.stringify(playerData));
    window.location.href = "avatar.html";
  } else {
    alert("Please enter a valid name");
  }
}

confirmName.addEventListener("click", initializePlayer);
