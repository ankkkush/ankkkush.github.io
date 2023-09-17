// JavaScript to toggle dropdown
const dropdownButton = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.menu-content');

dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});
document.getElementById('dropbtn').addEventListener('click', function() {
    alert('Button Clicked!');
});