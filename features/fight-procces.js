import { getMoveEnemy } from "./enemy.js";

const submitButton = document.querySelector(".action-button");
const damageMap = {
    head: 20,
    body: 10,
    leftArm: 5,
    rightArm: 5,
    leftLeg: 5,
    rightLeg: 5
}

function analyzeUserMove() {
    const userMoveData = JSON.parse(localStorage.getItem("userMove"));
    const enemyMoveData = JSON.parse(localStorage.getItem("enemyMove"));
    const enemyHealthRange = document.querySelector(".current-health-range--enemy");
    const enemyHealthNumber = parseInt(document.querySelector(".current-health-points--enemy").textContent);

    const { defense, attacks } = userMoveData;
    for (const a of attacks) {
        if (a !== enemyMoveData.defence) {
            const damagePoints = damageMap[a];
            const currentValue = parseInt(getComputedStyle(enemyHealthRange).width);
            enemyHealthRange.style.width = `${currentValue + damagePoints}%`;
            document.querySelector(".current-health-points--enemy").textContent = `${enemyHealthNumber - damagePoints}`
        }
    }
    getMoveEnemy()
}

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    analyzeUserMove();
})