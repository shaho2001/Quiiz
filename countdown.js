function getTargetTime() {
    const now = new Date();
    let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 2, 17, 0, 0); // 10:00 PM

    // If current time is past 10:00 PM, set target time to 10:00 PM the next day
    if (now.getTime() > targetTime.getTime()) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    return targetTime.getTime();
}

function startCountdown() {
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const target = getTargetTime();
        const distance = target - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            timerElement.style.display = 'none'; // Hide the countdown
            buttonElement.style.display = 'none'; // Hide the button after countdown ends
            // Optionally restart the countdown after some delay if needed
            setTimeout(startCountdown, 1000); // Restart countdown after 1 second delay
        } else {
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timerElement.textContent =
                (hours < 10 ? "0" + hours : hours) + ":" +
                (minutes < 10 ? "0" + minutes : minutes) + ":" +
                (seconds < 10 ? "0" + seconds : seconds);

            // Show button 5 seconds before the countdown ends
            if (distance <= 10000) {
                buttonElement.style.display = 'inline-block'; // Show the button
            } else {
                buttonElement.style.display = 'none'; // Hide the button if not within the last 5 seconds
            }
        }
    }, 1000);
}

function buttonClicked() {
    console.log('Button clicked!');
    buttonElement.style.display = 'none'; // Hide the button
    timerElement.style.display = 'block'; // Show the countdown again
    startCountdown(); // Restart the countdown

    // Redirect to app.html after a short delay to ensure the UI update occurs first
    setTimeout(() => {
        window.location.href = 'topics.html';
    }, 500); // Adjust delay as needed
}


const timerElement = document.getElementById('timer');
const buttonElement = document.getElementById('myButton');

startCountdown(); // Start the countdown on page load
