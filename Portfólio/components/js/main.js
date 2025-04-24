function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile-photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile-name");
  name.innerText = profileData.name;

  const perfil = document.getElementById("profile-job");
  perfil.innerText = profileData.job;

  const location = document.getElementById("profile-local");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile-phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile-email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}
function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skills) => `<li>${skills}</li>`)
    .join("");
}
(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
})();
