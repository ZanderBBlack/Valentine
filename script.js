// JS: The Brains
let fontSize = 18;
function moveButton() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    
    // Calculate new random coordinates
    // window.innerWidth is the width of the browser screen
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    // Set the button's new position
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
    noButton.style.transform = 'none';

    fontSize += 10; 
    yesButton.style.fontSize = fontSize + 'px';
    yesButton.style.padding = (fontSize/1.2) + 'px ' + (fontSize*1.5) + 'px';

}

function handleYes() {
    alert("Yay! Can't wait! ❤️");
    // You can also redirect to a new page or change the text here
    document.querySelector('.container').innerHTML = "<h1>See you on the 14th! 🥰</h1>";
}
