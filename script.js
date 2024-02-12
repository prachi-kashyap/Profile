document.addEventListener("DOMContentLoaded", function () {
  const degrees = [
    {
      degreeName: "Bachelor of Science in Information Technology",
      university: "Kalinga Institute of Industrial Technology",
      universityWebsite: "https://kiit.ac.in/",
      dateStart: "July 2014",
      dateEnd: "April 2018",
      gpa: "3.70",
      logo: "./images/kiitlogo.png",
    },
    {
      degreeName: "Master of Science in Computer Science",
      university: "Portland State University",
      universityWebsite: "https://www.pdx.edu/",
      dateStart: "September 2022",
      dateEnd: "March 2024",
      gpa: "3.92",
      logo: "./images/psu.png",
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
          title: "Senior Salesforce Developer",
          project: "Salesforce Development",
          startDate: "12/2021",
          endDate: "07/2022",
          responsibilities:
            "I utilized Lightning Web Components (LWC) to create a dynamic customer community intake form for a clients new joiner training and orientation program. The form incorporated personalized field rendering based on specific criteria, input validation using LWC's built-in form validation features, and interactive elements such as dropdown menus, date pickers, and auto-suggest fields. Leveraging the reusability and modularity of LWC components, the development time was significantly reduced, saving approximately 60%. The implementation of the dynamic intake form improved data accuracy, reduced administrative effort, and enhanced the overall efficiency of the onboarding process.",
        },
        {
          title: "Salesforce Developer",
          project: "Salesforce CRM",
          startDate: "02/2020",
          endDate: "11/2021",
          responsibilities:
            "I worked in a project for an insurance company that wanted a complete overhaul of their CRM system to improve operational efficiency. The main requirement was to build a custom CRM solution using Salesforce that mirrored their unique business process. Our first task was to create custom objects in Salesforce to handle data unique to their business. This required a deep understanding of their business model and data requirements. These custom objects allowed us to capture and represent business data that couldn't be handled by Salesforce's standard objects. We used Apex, Salesforce's proprietary language, to implement custom business logic. This included creating classes, triggers, and test cases.",
        },
        {
          title: "Salesforce Developer",
          project: "Administrator/Developer",
          startDate: "04/2018",
          endDate: "01/2020",
          responsibilities:
            "I revamped Salesforce CRM by setting up its data structures, optimizing user interfaces, and crafting detailed reports and dashboards to enhance user decision-making. I boosted data security through meticulous configuration of profiles and sharing settings. My work with automation, using validation rules, process builders, and Apex triggers, streamlined operations, while my expertise in SOQL and SOSL cut data retrieval times by 20%. By working closely with various teams to pinpoint their needs, I managed to achieve a 95% success rate in delivering projects on schedule, demonstrating a blend of technical skill and collaborative prowess in improving CRM efficiency and user experience.",
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
    {
      title: "Weather and Information App",
      duration: "09/2023 - 12/2023",
      url: "https://final-v62o4ubsxa-uw.a.run.app",
      description:
        "I took charge of creating a state-of-the-art web app that blends Python, HTML, and advanced API use to give live weather updates and map visuals. Using Google Maps Geolocation, OpenAI, and OpenWeatherMap APIs, this tool offers accurate weather forecasts along with AI-crafted stories, making weather info not just useful but also engaging. The app's design is smart, working smoothly on any device, which bumped up user happiness by 20%. It's more than a weather app; it's about understanding and catering to what users really want with innovation and flair.",
      technologies: ["Python", "HTML", "API"],
    },
    {
      title: "Value Prediction App",
      duration: "12/2023 - Present",
      url: "https://github.com/prachi-kashyap/Value_Prediction",
      description:
        "This web application stands as a testament to innovation, integrating Python, HTML, and advanced API integration to revolutionize real-time weather forecasting and geographic visualization. By leveraging the power of Google Maps Geolocation, OpenAI, and OpenWeatherMap APIs, it not only delivers precise weather details but also enriches user experience with AI-generated content, making information not just accessible but also captivating. Designed to adapt seamlessly across devices, the application significantly enhanced user engagement, evidenced by a 20% increase in user satisfaction. This project represents a forward leap in meeting user needs, blending technical excellence with a keen understanding of digital interaction trends, thereby setting a new benchmark in user-centric application development.",
      technologies: ["Python", "HTML", "API"],
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

document.addEventListener("DOMContentLoaded", function () {
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
});
