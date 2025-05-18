function changeMessage() {
    const surpriseMessage = document.getElementById("surpriseMessage");
    surpriseMessage.innerHTML = "You're going to absolutely smash it! I’m so proud of you!";

    // Create an image element for the Shrek GIF
    const shrekGif = document.createElement("img");
    shrekGif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtvODd1djRqbmFoYzUzYm8wam9rOXR1eTR6eXFqcHo5dTU3Z3ozYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3zSaOGAwLHhxC/giphy.gif";
    shrekGif.alt = "Shrek Dancing";
    shrekGif.classList.add("shrek-gif");  // Add the styling class

    // Append the GIF to the surprise message
    surpriseMessage.appendChild(shrekGif);
}
