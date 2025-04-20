document.addEventListener("DOMContentLoaded", function () {
  // Handle "Volunteer Now" button click
  const volunteerBtn = document.getElementById("volunteer-btn");
  const formSection = document.getElementById("volunteer-form-section");

  if (volunteerBtn && formSection) {
    volunteerBtn.addEventListener("click", () => {
      formSection.style.display = "block";
      volunteerBtn.style.display = "none";
    });
  }

  // Extra interactivity: Show extra info on hover
  const profileBox = document.getElementById("charity-profile-box");
  const extraInfo = document.getElementById("extra-charity-info");

  if (profileBox && extraInfo) {
    profileBox.addEventListener("mouseover", () => {
      extraInfo.style.display = "block";
    });

    profileBox.addEventListener("mouseout", () => {
      extraInfo.style.display = "none";
    });
  }
});
