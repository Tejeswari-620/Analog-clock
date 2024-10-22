setInterval(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Calculate the rotation for each hand
    const hourRotation = 30 * hours + minutes / 2;
    const minuteRotation = 6 * minutes;
    const secondRotation = 6 * seconds;

    // Get the elements for hour, minute, and second hands
    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("minute");
    const secondHand = document.getElementById("second");

    // Rotate the hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform =`rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);