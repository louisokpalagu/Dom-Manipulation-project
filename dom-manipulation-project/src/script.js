// This file contains the JavaScript code that implements the DOM manipulation functionalities as specified in the assignment.

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-container');
    
    // Function to change the content of the <h1> tag
    function changeHeading(newHeading) {
        const heading = document.querySelector('h1');
        heading.textContent = newHeading;
    }

    // Function to add a new list item
    function addListItem(itemText) {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = itemText;
        ul.appendChild(li);
    }

    // Function to change the paragraph text
    function changeParagraphText(newText) {
        const paragraph = document.querySelector('p');
        paragraph.textContent = newText;
    }

    // Function to handle button clicks
    function setupButtonHandlers() {
        const changeHeadingButton = document.getElementById('change-heading');
        const addItemButton = document.getElementById('add-item');
        const changeTextButton = document.getElementById('change-text');

        changeHeadingButton.addEventListener('click', () => {
            changeHeading('New Heading Text');
        });

        addItemButton.addEventListener('click', () => {
            addListItem('New List Item');
        });

        changeTextButton.addEventListener('click', () => {
            changeParagraphText('This is the new paragraph text.');
        });
    }

    setupButtonHandlers();
});