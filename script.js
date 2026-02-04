function moveButton() {
    const noButton = document.getElementById('noButton');

    // 1. Switch to 'fixed' to position relative to the browser window
    // This prevents it from getting lost inside the pink container
    if (noButton.style.position !== 'fixed') {
        noButton.style.position = 'fixed';
    }

    // 2. Calculate the boundaries of the screen
    // We subtract the button's size so it doesn't go off the right/bottom edge
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const maxX = screenWidth - noButton.offsetWidth - 20;
    const maxY = screenHeight - noButton.offsetHeight - 20;

    // 3. Generate random coordinates within the visible screen
    const x = Math.max(20, Math.floor(Math.random() * maxX));
    const y = Math.max(20, Math.floor(Math.random() * maxY));

    // 4. Apply the new position
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Just use the specific heart you want
    heart.innerText = '💗';
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create a heart every 300ms
setInterval(createHeart, 300);
function handleYes() {
    // Remove the runaway "No" button
    const noButton = document.getElementById('noButton');
    if (noButton) noButton.remove();

    const container = document.querySelector('.container');
    container.innerHTML = `
        <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" 
             alt="Cat Hug" 
             style="border-radius: 20px; border: none; max-width: 100%; height: auto;" 
             width="400">
        <h1 style="color: #ae1662; margin-top: 20px;">Yippee! I knew you'd say yes!</h1>
        <p style="color: #ae1662; font-family: 'Quicksand', sans-serif; font-size: 1.5rem; font-weight: 500;">
            I'll see you on the 14th muhahaha!!!
        </p>
    `;
}