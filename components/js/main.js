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

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
          <li>
              <h3 ${project.github ? 'class = "github"' : ""}>${
        project.name
      }</h3>
              <a href="${project.url}" target="_blank">${project.link}</a>
          </li>
      `;
    })
    .join("");
}

function updateFormations(profileData) {
  const formacoes = document.getElementById("profileFormacoes");
  formacoes.innerHTML = profileData.formacoes
    .map((formacao) => {
      return `
        <li>
            <h3 class="title">${formacao.name}</h3>
            <p class="period">${formacao.period}</p>
            <p>${formacao.description}</p>
        </li>
      `;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateFormations(profileData);
})();
