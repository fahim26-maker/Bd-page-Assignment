// Select the heart count button in the navbar
const heartCountButton = document.getElementById('heart-count');

// Extract the number from the button text
let totalHearts = 0;

// Select all heart icons in the cards
const heartIcons = document.querySelectorAll('.i-1');

// Add click event to each heart icon
heartIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    totalHearts++;
    heartCountButton.innerHTML = `${totalHearts} <img src="assets/heart.png" class="img-2">`;
  });
});
// for call allert-------------------------
  let coins = 100;
const coinDisplay = document.getElementById("coin-count");
const callButtons = document.querySelectorAll("btn-4");
const historyList = document.getElementById("call-history");

callButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    const serviceName = card.getAttribute("data-service");
    const serviceNumber = card.getAttribute("data-number");

    if (coins < 20) {
      alert("Not enough coins to make a call.");
      return;
    }

    alert(`Calling ${serviceName} at ${serviceNumber}...`);
    coins -= 20;
    coinDisplay.textContent = coins;

    const listItem = document.createElement("li");
    listItem.textContent = `${serviceName} - ${serviceNumber}`;
    historyList.appendChild(listItem);
  });
});
