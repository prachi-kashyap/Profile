document.addEventListener("DOMContentLoaded", function () {
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
      logo: "../images/psu.png",
    },
  ];

  const educationContainer = document.getElementById("education-container");

  degrees.forEach((degree) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.innerHTML = `
          <div class="row g-0">
              <div class="col-md-4 p-2 d-flex align-items-center justify-content-center">
                  <img src="${degree.logo}" class="img-fluid rounded-start" style="height: 8rem" alt="${degree.university} Logo" />
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <p class="card-title">${degree.university}</p>
                      <p class="card-text m-0 p-0">${degree.degreeName}</p>
                      <p class="card-text m-0 p-0">${degree.dateStart} - ${degree.dateEnd}</p>
                      <p class="card-text m-0 p-0">GPA: ${degree.gpa}</p>
                  </div>
              </div>
          </div>
      `;
    educationContainer.appendChild(card);
  });

  const experiences = [
    {
      company: "Accenture",
      location: "Gurugram, India",
      roles: [
        {
          title: "Quality Engineering Senior Analyst",
          project: "Salesforce Development",
          startDate: "12/2021",
          endDate: "07/2022",
          responsibilities: [
            "I utilized Lightning Web Components (LWC) to create a dynamic customer community intake form for an important client of our company's new joiner training and orientation program. The form incorporated personalized field rendering based on specific criteria, input validation using LWC's built-in form validation features, and interactive elements such as dropdown menus, date pickers, and auto-suggest fields. Leveraging the reusability and modularity of LWC components, the development time was significantly reduced, saving approximately 60%. The implementation of the dynamic intake form improved data accuracy, reduced administrative effort, and enhanced the overall efficiency of the onboarding process.",
          ],
        },
        {
          title: "Application Development Analyst",
          project: "Salesforce CRM",
          startDate: "02/2020",
          endDate: "11/2021",
          responsibilities: [
            "I worked in a project for a insurance company that wanted a complete overhaul of their CRM system to improve operational efficiency. The main requirement was to build a custom CRM solution using Salesforce that mirrored their unique business process. Our first task was to create custom objects in Salesforce to handle data unique to their business. This required a deep understanding of their business model and data requirements. These custom objects allowed us to capture and represent business data that couldn't be handled by Salesforce's standard objects. We used Apex, Salesforce's proprietary language, to implement custom business logic. This included creating classes, triggers, and test cases. Apex triggers were especially important for automating workflows based on certain conditions. This saved significant time as it automated many tasks that were previously manual. Validation rules were created to ensure data integrity by enforcing business rules at the field level. We used Salesforce Object Query Language (SOQL) for querying the Salesforce database, allowing us to generate custom reports based on these queries. Finally, we created custom dashboards using Salesforce's dashboard functionality. These dashboards allowed management to monitor key performance metrics in real-time, providing valuable insights into the business's performance.",
          ],
        },
        {
          title: "Application Development Associate",
          project: "Testing",
          startDate: "04/2018",
          endDate: "01/2020",
          responsibilities: [
            "Worked as a 3*Certified Salesforce Developer in multiple projects using agile methodology , Integrated CRM with the Service System to decrease manual interactions cutting overhead costs by 30%,Analyzed and built a dynamic customer community intake form for new joiner training and orientation program leveraging Lightning Web Components, saving almost 60% of the time for the same process",
          ],
        },
      ],
    },
  ];

  const experienceContainer = document.getElementById("experience-container");

  experiences.forEach((experience) => {
    experience.roles.forEach((role) => {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");
      card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${role.title} at ${
        experience.company
      }</h5>
                        <p class="card-text m-0 p-0">${role.startDate} - ${
        role.endDate
      }</p>
                        <p class="card-text"><small class="text-muted">${
                          experience.location
                        }</small></p>
                        <p class="card-text"><class="text-muted">${
                          role.project
                        }</p>
                        <ul class="list-group list-group-flush">
                            ${role.responsibilities
                              .map(
                                (responsibility) =>
                                  `<li class="list-group-item">${responsibility}</li>`
                              )
                              .join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `;
      experienceContainer.appendChild(card);
    });
  });

  const projects = [
    {
      title: "PPE Detector",
      duration: "09/2022 - 12/2022",
      description:
        "Developed a PPE (Personal Protective Equipment) web app using the frontend and backend languages. Initiated the project by suggesting the User Interface design using diagrams and write-ups to my team member",
      technologies: [
        "JavaScript",
        "React",
        "CSS",
        "Bootstrap",
        "Python",
        "AWS Amplify Framework",
      ],
    },
    {
      title: "Sentiment Analysis Tool",
      duration: "09/2022 - 12/2022",
      description:
        "Proposed and created a website that will take customer reviews/tweets(text) data as input and provide overall sentiment as positive or negative. Learnt streamlit which is an open-source app framework for this project",
      technologies: ["Python", "Streamlit"],
    },
  ];

  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.innerHTML = `
          <div class="row g-0">
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${project.title}</h5>
                      <p class="card-text m-0 p-0">${project.duration}</p>
                      <p class="card-text">${project.description}</p>
                      <ul class="list-group list-group-flush">
                          ${project.technologies
                            .map(
                              (tech) =>
                                `<li class="list-group-item">${tech}</li>`
                            )
                            .join("")}
                      </ul>
                  </div>
              </div>
          </div>
      `;
    projectsContainer.appendChild(card);
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return false;
    }

    alert("Thank you for your message!");
  });

function toggleTheme() {
  var body = document.body;
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
}
