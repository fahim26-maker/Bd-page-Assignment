// Select the heart count button in the navbar
const heartCountDisplay = document.getElementById('heart-count');

// Extract the number from the button text
let totalHearts = 0;

// Select all heart icons in the cards
const heartIcons = document.querySelectorAll('.i-1');

// Add click event to each heart icon
heartIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    totalHearts++;
    heartCountDisplay.innerHTML = `${totalHearts} <img src="assets/heart.png" class="img-2">`;
  });
});
// call button part--------------------------------------------------------------------
// Initial coin count
let coinCount = 100;

// Select coin button (second .btn-1)
const coinButton = document.querySelectorAll('.btn-1')[1];

// Select all call buttons
const callButtons = document.querySelectorAll('.btn-4');

// Select Call History container
const callHistoryContainer = document.querySelector('.container-2');

// Select Clear button
const clearButton = document.querySelector('.history .btn-2');

// Remove all existing history cards (initial cleanup)
const initialHistoryCards = document.querySelectorAll('.card-3');
initialHistoryCards.forEach(card => card.remove());

// Handle Call Button Click
callButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const serviceName = card.querySelector('h3').textContent;
        const serviceNumber = card.querySelector('.p-2').textContent;

        if (coinCount < 20) {
            alert("Not enough coins to make a call. You need at least 20 coins.");
            return;
        }

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Deduct coins and update UI
        coinCount -= 20;
        coinButton.innerHTML = `${coinCount} <img src="assets/coin.png" class="img-2">`;

        // Create and append new history card
        const historyCard = document.createElement('div');
        historyCard.classList.add('card-3');
        historyCard.innerHTML = `<h4>${serviceName}</h4><p>${serviceNumber}</p>`;
        callHistoryContainer.appendChild(historyCard);
    });
});
// Handle Clear Button Click
clearButton.addEventListener('click', () => {
    const historyCards = document.querySelectorAll('.card-3');
    historyCards.forEach(card => card.remove());
});


// copy js
// document.querySelectorAll('.btn-3').forEach(button => {
//   button.addEventListener('click', function () {
//     const card = this.closest('.card');
//     const number = card.querySelector('.p-2').textContent;

//     // Copy to clipboard
//     navigator.clipboard.writeText(number).then(() => {
//       alert(`Copied: ${number}`);

//       // Update copy count
//       const countSpan = card.querySelector('.copy-count');
//       let currentCount = parseInt(countSpan.textContent.replace(/\D/g, '')) || 0;
//       countSpan.textContent = `Copied: ${currentCount + 1}`;
//     });
//   });
// });
