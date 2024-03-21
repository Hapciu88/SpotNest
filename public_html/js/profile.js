// each profile can be selected and unselected
const profiles = document.querySelectorAll('.profile');
profiles.forEach(profile => {
  profile.addEventListener('click', () => {
    profiles.forEach(p => p.classList.remove('selected'));
    profile.classList.add('selected');
  });
});

// Adds functionality and logic to button
const selectButton = document.getElementById('selectButton');
selectButton.addEventListener('click', () => {
  const selectedProfile = document.querySelector('.selected');
  if (!selectedProfile) {
    alert("Please select a profile first.");
    return; // Stop execution if no profile is selected
  }
  // reads choice based off h2 content to make things easier
  const selectedProfileName = selectedProfile.querySelector('h2').textContent;
  if (selectedProfileName === 'Tenant') {
    window.location.href = 'tenant.html';
  } else if (selectedProfileName === 'Landlord') {
    window.location.href = 'landlord.html';
  }
});
