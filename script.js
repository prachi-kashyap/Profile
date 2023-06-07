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

  educationContainer.classList.add(
    "d-flex",
    "flex-column",
    "align-items-center"
  );

  degrees.forEach((degree) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3", "w-75");
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
          responsibilities:
            "I utilized Lightning Web Components (LWC) to create a dynamic customer community intake form for a clients new joiner training and orientation program. The form incorporated personalized field rendering based on specific criteria, input validation using LWC's built-in form validation features, and interactive elements such as dropdown menus, date pickers, and auto-suggest fields. Leveraging the reusability and modularity of LWC components, the development time was significantly reduced, saving approximately 60%. The implementation of the dynamic intake form improved data accuracy, reduced administrative effort, and enhanced the overall efficiency of the onboarding process.",
        },
        {
          title: "Application Development Analyst",
          project: "Salesforce CRM",
          startDate: "02/2020",
          endDate: "11/2021",
          responsibilities:
            "I worked in a project for an insurance company that wanted a complete overhaul of their CRM system to improve operational efficiency. The main requirement was to build a custom CRM solution using Salesforce that mirrored their unique business process. Our first task was to create custom objects in Salesforce to handle data unique to their business. This required a deep understanding of their business model and data requirements. These custom objects allowed us to capture and represent business data that couldn't be handled by Salesforce's standard objects. We used Apex, Salesforce's proprietary language, to implement custom business logic. This included creating classes, triggers, and test cases.",
        },
        {
          title: "Application Development Associate",
          project: "Testing",
          startDate: "04/2018",
          endDate: "01/2020",
          responsibilities:
            "I spearheaded the implementation of a component-based approach and automation scripts, reducing maintenance costs by 50%. Additionally, I applied Test Design Automation, ensuring high-quality, timely delivery of applications. I also crafted strategic test plans aligned with client and user requirements, elevating client satisfaction. These experiences strengthened my expertise in test automation, project management, and client relations.",
        },
      ],
    },
  ];

  const experienceContainer = document.getElementById("experience-container");

  experiences.forEach((experience) => {
    const experienceRow = document.createElement("div");
    experienceRow.classList.add("row", "justify-content-md-center");

    experience.roles.forEach((role) => {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3", "col-md-5", "mx-2");
      card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-12">
                    <div class="card-body">
                        <h3 class="card-title">${role.title} at ${experience.company}</h3>
                        <p class="card-text m-0 p-0">${role.startDate} - ${role.endDate}</p>
                        <p class="card-text"><small>${experience.location}</small></p>
                        <p class="card-text"><small>${role.project}</small></p>
                        <p class="card-text m-0 p-0">${role.responsibilities}</p>
                    </div>
                </div>
            </div>
        `;
      // Append the card to the row
      experienceRow.appendChild(card);
    });
    experienceContainer.appendChild(experienceRow);
  });

  const projects = [
    {
      title: "PPE Detector",
      duration: "09/2022 - 12/2022",
      url: "https://main.dx26wen16nrwi.amplifyapp.com/",
      description:
        "Created a Personal Protective Equipment (PPE) web app by utilizing frontend and backend languages. For the frontend, we employed JavaScript, React, CSS, and Bootstrap to develop a visually appealing and responsive user interface. To convey the UI design to our team member, we used diagrams and write-ups, allowing us to effectively communicate the app's structure and functionality. On the backend, we utilized Python to handle server-side logic and data processing. The project was initiated by suggesting the UI design through comprehensive diagrams and descriptive write-ups, ensuring a clear understanding of the app's intended appearance and features.",
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
      url: "https://github.com/prachi-kashyap/SE_554_SentimentAnalysis",
      description:
        "Proposed and developed a website that analyzes customer reviews and tweets to determine the overall sentiment as positive or negative. To implement this, I learned and utilized Streamlit, an open-source app framework. Streamlit enabled me to create an interactive and user-friendly interface for the website, making it easy to input text data and receive sentiment analysis results. The website serves as a valuable tool for businesses to understand customer opinions and sentiments. By leveraging Streamlit, I ensured a seamless and efficient user experience while providing accurate sentiment analysis for customer reviews and tweets.",
      technologies: ["Python", "Streamlit"],
    },
  ];

  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.classList.add(
    "d-flex",
    "flex-wrap",
    "justify-content-center"
  );
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3", "col-md-5", "mx-2");
    card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-12">
                    <div class="card-body">
                    <h3 class="card-title">
                    <a class="title-URL" href="${project.url}" target="_blank">
                    ${project.title}</a>
                    </h3>
                    <p class="card-text m-0 p-0">${project.duration}</p>
                    <p class="card-text">${project.description}</p>
                    <p class="card-text"><bold>Technologies used: ${project.technologies.join(
                      ", "
                    )}</small></p>
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

    let formData = new FormData(event.target);
    let name = formData.get("name");
    let email = formData.get("email");
    let message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return false;
    }

    alert("Thank you for your message!");
  });
