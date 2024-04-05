// Function to get user's location using Geolocation API
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const userLocation = `Latitude: ${latitude}, Longitude: ${longitude}`;
                document.getElementById('deliveryLocation').value = userLocation;
            },
            function (error) {
                console.error('Error getting user location:', error.message);
                alert('Error getting user location. Please enter manually.');
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
        alert('Geolocation is not supported by this browser. Please enter manually.');
    }
}

// Event listener for Locate Me button
document.getElementById('locateMe').addEventListener('click', function () {
    getUserLocation();
});

// Event listener for manual location input
document.getElementById('manualInputBtn').addEventListener('click', function () {
    const userLocation = prompt("Enter your delivery location:");
    
    if (userLocation) {
        document.getElementById('deliveryLocation').value = userLocation;
    } else {
        alert("Location input canceled or empty. Please enter manually.");
    }
});

function showSignUpForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// ... (unchanged) ...

// Functions to open/close modals
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
    document.getElementById("blur").style.display = "block";
  }
  
  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("blur").style.display = "none";
  }
  
  function openSignUpModal() {
    document.getElementById("signUpModal").style.display = "block";
    document.getElementById("blur").style.display = "block";
  }
  
  function closeSignUpModal() {
    document.getElementById("signUpModal").style.display = "none";
    document.getElementById("blur").style.display = "none";
  }
  
  // ... (unchanged) ...
  