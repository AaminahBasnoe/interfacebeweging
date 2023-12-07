// Select all buttons on the page
const start = document.querySelector('body>p');
const videos = document.querySelectorAll('body>video');
const buttons = document.querySelectorAll('button');

// Add event listeners for mouseenter and mouseleave
buttons.forEach((button, index) => {
    const buttonVideo = button.querySelector('video');

    // If no video is found we'll skip this button
    if (!buttonVideo) {
        return;
    }

    button.addEventListener('mouseenter', () => {
        // Play the video if the user hovers over the button
        buttonVideo.play();
    });

    button.addEventListener('mouseleave', () => {
        // Pause the video if the user hovers over the button
        buttonVideo.pause();
        buttonVideo.currentTime = 0;
    });

    button.addEventListener('mousedown', () => {
        if (index === 0) {
            start.innerHTML = 'Oh nee, een vijand! Sento gooit snel zijn ninjaster';
        } else if (index === 1) {
            start.innerHTML = 'Sento is hard aan het trainen in de dojo.';
        } else {
            start.innerHTML = 'Sssst, we bevinden ons in het vijandige gebied. Sento sluipt zachtjes voorbij..';
        }

        stopVideos();

        const animationVideo = videos[index];

        animationVideo.play();
        animationVideo.style.display = 'block';
    });
});

function stopVideos() {
    videos.forEach((video) => {
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });
};