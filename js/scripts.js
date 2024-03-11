document.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');

    // Check if there's a saved like count in localStorage and use it
    let count = localStorage.getItem('likeCount');
    likeCount.textContent = count ? count : 0;

    likeButton.addEventListener('click', () => {
        let currentCount = parseInt(likeCount.textContent, 10) + 1;
        likeCount.textContent = currentCount;

        // Save the new count to localStorage
        localStorage.setItem('likeCount', currentCount);

        // Change button text to "Thanks!" and make it unclickable
        likeButton.textContent = "Thanks!";
        likeButton.disabled = true; // This disables the button
    });
});
