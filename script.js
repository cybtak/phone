// Update clock every second
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes;
    document.querySelector('.time').textContent = timeString;
}

// Update clock initially and then every second
updateClock();
setInterval(updateClock, 1000);

// Get app icons
const browserIcon = document.getElementById('browser');
const facebookIcon = document.getElementById('facebook');
const twitterIcon = document.getElementById('twitter');
const instagramIcon = document.getElementById('instagram');
const cameraIcon = document.getElementById('camera');
// Home screen and app content elements
const homeScreen = document.querySelector('.home-screen');
const appContent = document.querySelector('.app-content');

// Function to load app content
function loadAppContent(appName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${appName}.html`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Hide home screen and display app content
            homeScreen.style.display = 'none';
            appContent.innerHTML = xhr.responseText;
            appContent.style.display = 'block';
        }
    };
    xhr.send();
}

// Add click event listeners to app icons
browserIcon.addEventListener('click', () => {
    loadAppContent('browser');
});

facebookIcon.addEventListener('click', () => {
    loadAppContent('facebook');
});

twitterIcon.addEventListener('click', () => {
    loadAppContent('twitter');
});

instagramIcon.addEventListener('click', () => {
    loadAppContent('instagram');
});

cameraIcon.addEventListener('click', () => {
    loadAppContent('camera');
});

// Get navigation button
const navigationButton = document.querySelector('.navigation-button');

// Add click event listener to navigation button
navigationButton.addEventListener('click', () => {
    // Show home screen and hide app content
    homeScreen.style.display = 'grid';
    appContent.style.display = 'none';
});
