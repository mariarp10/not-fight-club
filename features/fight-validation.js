const actionsForm = document.querySelector(".fight-actions");
const submitButton = document.querySelector(".action-button");

function getSelection() {
  const defense =
    document.querySelector('input[name="defense-zone"]:checked')?.value || null;
  const attacks = Array.from(
    document.querySelectorAll('input[name="attack-zone"]:checked')
  ).map((input) => input.value);
  return { defense, attacks };
}

function validateSelection() {
  const { defense, attacks } = getSelection();
  let isValid = false;
  if (defense && attacks.length === 2) {
    isValid = true;
  }
  if (isValid) {
    submitButton.disabled = false;
    let userMoveData = {
      defense: defense,
      attacks: attacks,
    };
    localStorage.setItem("userMove", JSON.stringify(userMoveData));
  } else {
    submitButton.disabled = true;
  }
}

actionsForm.addEventListener("change", validateSelection);
