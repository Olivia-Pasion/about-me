// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const showAnswerButton = document.getElementById('show-answer-button');
const catSection = document.getElementById('cat-section');

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');


// set event listeners

tosCheckbox.addEventListener('change', () => {
    showAnswerButton.disabled = !tosCheckbox.checked;
});

showAnswerButton.addEventListener('click', () => {
    catSection.classList.remove('hidden');
});

imageSelect.addEventListener('change', () => {
    const src = 'assets/cats/' + imageSelect.value;
    imageDisplay.src = src;
});

nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});

    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
