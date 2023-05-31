const degrees = [
  {
    degreeName: "Bachelor of Science in Information Technology",
    university: "Kalinga Institute of Industrial Technology",
    universityWebsite: "https://kiit.ac.in/",
    dateStart: "July 2014",
    dateEnd: "April 2018",
    gpa: "3.70",
    logo: "../images/kiitlogo.png",
  },
  {
    degreeName: "Master of Science in Computer Science",
    university: "Portland State University",
    universityWebsite: "https://www.pdx.edu/",
    dateStart: "September 2022",
    dateEnd: "March 2024",
    gpa: "3.83",
    logo: "../images/psulogo.svg",
  },
];

const educationContainer = document.getElementById("education-container");

degrees.forEach((degreeName) => {
  const card = document.createElement("div");
  card.classList.add("card", "mb-3");
  card.innerHTML = `
          <div class="row g-0">
              <div class="col-md-4 p-2 d-flex align-items-center justify-content-center">
                  <img src="${degreeName.logo}" class="img-fluid rounded-start" style="height: 8rem" alt="${degreeName.university} Logo" />
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <p class="card-title">${degreeName.university}</p>
                      <p class="card-text m-0 p-0">${degreeName.degreeName}</p>
                      <p class="card-text m-0 p-0">${degreeName.dateStart} - ${degreeName.dateEnd}</p>
                      <p class="card-text m-0 p-0">${degreeName.gpa}</p>
                  </div>
              </div>
          </div>
      `;
  educationContainer.appendChild(card);
});
