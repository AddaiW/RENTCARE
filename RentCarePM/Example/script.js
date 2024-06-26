// JavaScript for toggling the menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// JavaScript for automatic scrolling of sponsor images
const sponsorContainer = document.getElementById("sponsor-container");
const sponsors = sponsorContainer.children;
let currentIndex = 0;

function scrollSponsors() {
    // Hide all images
    for (let i = 0; i < sponsors.length; i++) {
        sponsors[i].style.display = "none";
    }

    // Show current image
    sponsors[currentIndex].style.display = "block";

    // Move to the next image
    currentIndex = (currentIndex + 1) % sponsors.length;
}

// Initially, display the first image
scrollSponsors();

// Automatically scroll sponsors every 3 seconds
setInterval(scrollSponsors, 3000);

// JavaScript for hovering effect on RentCare and BuildCare sections
const rentcareSection = document.querySelector('.rentcare');
const buildcareSection = document.querySelector('.buildcare');

// Add event listeners for hover effect
rentcareSection.addEventListener('mouseenter', () => {
    rentcareSection.style.opacity = '0.8'; // Adjust opacity as desired
});

rentcareSection.addEventListener('mouseleave', () => {
    rentcareSection.style.opacity = '1'; // Restore original opacity on mouse leave
});

buildcareSection.addEventListener('mouseenter', () => {
    buildcareSection.style.opacity = '0.8'; // Adjust opacity as desired
});

buildcareSection.addEventListener('mouseleave', () => {
    buildcareSection.style.opacity = '1'; // Restore original opacity on mouse leave
});

// Function to show staff info popup
function showStaffInfo(staffId) {
    // Get staff info popup element
    var staffPopup = document.getElementById("staff-info-popup");

    // Clear previous content
    staffPopup.innerHTML = "";

    // Add staff info content dynamically
    var staffInfo = getStaffInfoById(staffId); // Function to retrieve staff info by ID
    staffPopup.innerHTML = staffInfo;

    // Show the staff info popup
    staffPopup.style.display = "block";
}

// Function to retrieve staff info by ID (replace with actual implementation)
function getStaffInfoById(staffId) {
    // Example implementation
    var staffInfo = "";
    switch(staffId) {
        case 1:
            staffInfo = "<h2>Staff Member 1</h2><p>Description of Staff Member 1</p>";
            break;
        case 2:
            staffInfo = "<h2>Staff Member 2</h2><p>Description of Staff Member 2</p>";
            break;
        // Add cases for more staff members as needed
    }
    return staffInfo;
}
