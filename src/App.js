// src/App.jsx
import React from "react";
import CardGrid from "./CardGrid";
import Footer from "./Footer";

function App() {
  const items = [
    {
      type: "experience",
      company: "Carey Hughes Solicitors",
      role: "Administration Assistant",
      time: "Aug 2021 – Present",
      description:
        "Manage the registration and ID verification process for around 100 clients per week...",
      responsibilities: [
        "First point of contact for clients, delivering professional service",
        "Maintained compliance with strict onboarding deadlines",
        "Assisted solicitors and staff with documentation processes",
      ],
    },
    {
      type: "profile",
      centerContent: true,
    },
    {
      type: "skills",
      skills: {
        experienced: ["Python","Java",  "JavaScript", "HTML", "CSS", "SQL","C++/C","React","Git" ],
        intermediate: ["OpenAI API","Sentence Transformers","LlamaIndex","Langchain","Node.js","Django",],
        learning: ["Next.js", "TypeScript", "Flask", "tailwindcss", "Docker"],
      }
    },
    {
      type: "experience",
      company: "Sanandaf UK",
      role: "Supervisor",
      time: "July 2025 – Present",
      description:
       "Promoted to Supervisor within two weeks of joining as a Cleaning Operative during the busy summer turnover of student halls. Oversaw teams of 5–6 staff per shift, managing daily tasks, schedules, and resources to ensure high standards of cleanliness, hygiene, and safety. Liaised with clients to resolve issues, provided training and guidance to staff, and supported compliance with company policies and health & safety regulations, while assisting with equipment and resource transport between sites.",
      responsibilities: [
        "First point of contact for clients, delivering professional service",
        "Maintained compliance with strict onboarding deadlines",
        "Assisted solicitors and staff with documentation processes",
      ],
      
    },
    {
      type: "qualification",
      title: "University of Glasgow – BSc (Hons) Computing Science (2021–2025)",
      details: `
**Classification**: Second Class Honours (Division I)

---

**Awards**\\
• University of Glasgow School of Computing Science – Level 4 Project with the Best Evaluation (2025)

---

**4th Year** \\
• Operating Systems (B2)  
• Individual Project (A2)  
• Professional Skills & Issues (B2)  
• Machine Learning (B3)  
• Recommender Systems (B1)  
• Start-Up Growth Engineering (C1)  
• Data Product Engineering (B3)  
• Research Methods & Techniques (B3)  
• Human Centered Security (A4)

---

**3rd Year** \\
• Algorithmics I (A4)  
• Networked Systems (C2)  
• Database Systems (B2)  
• Human-Centered Systems DE (B2)  
• Professional Software Development (C3)  
• Team Project (A4)  
• Cyber Security Fundamentals (C2)  
• Mobile HCI (B2)  
• Data Fundamentals (D1)  
• Systems Programming (D1)

---

**2nd Year** \\
• Intro to OOP (B2)  
• Algorithms and Data Structures (B1)  
• OOP Software Engineering (B2)  
• Algorithm Foundations (C1)  
• Web App Development (B1)  
• Networks and OS Essentials (C3)

---

**1st Year** \\
• Computing Science 1P (C2)  
• Computing Fundamentals (C3)  
• Computing Science 1S (C3)
    `,
    },
    {
      type: "qualification",
      title: "Biggar High School – SQA Qualifications (2015–2021)",
      details: `**YASS**  
• Open University – Certificate of Higher Education in Computing and IT

---
**Scottish Advanced Highers**  
• Mathematics (B)

---

**Scottish Highers**  
• Mathematics (A)  
• Physics (A)  
• Computing Science (A)  
• English (B)  
• Art and Design (B)  
• Business Management (A) \\
• Politics (A)

---

**Scottish National 5s**  
• Mathematics (A)  
• English (B)  
• Computing Science (A)  
• Physics (A)  
• Business Management (A)  
• Art and Design (B)

    `,
    },
    {
      type: "project",
      title: "RES Web App (3rd Year Group Project)",
      tech: "React, Node.js, MongoDB, Flask",
      description: 'Collaborated with <a href="https://www.res-group.com" target="_blank" rel="noopener noreferrer">RES</a> as part of a 7-person team to develop a full-stack Web App for managing report templates, featuring a built-in graphing editor. Gaining hands-on experience with agile development, version control, and effective cross-functional teamwork.',
      time: "2023",
    },
    {
      type: "project",
      title: "Profile Website",
      tech: "HTML, CSS, JavaScript, React, Node.js",
      github: "https://github.com/CLAYE42/Web_Profile",
      description:
        "A personal profile website built with React and Node.js, showcasing my skills and projects.",
    },
    {
      type: "project",
      title: "Studdit",
      tech: "HTML, CSS, JavaScript, Django, Python, SQL",
      github: "https://github.com/2023-WAD-group-project/studdit",
      description:
        "Designed and built a Django-based web application providing a Reddit-like service for students, featuring SQL database management and a JavaScript search algorithm.",
    },
    {
      type: "project",
      title: "Interaction Technique Investigation",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/CLAYE42/HCS-AE",
      description:
        "A human computer interaction project to investigate a new input technique using swiping and tilting.(Previously on Glitch)",
    },
    {
      type: "project",
      title: "TCP File Transfer Tool",
      tech: "Python",
      hideGithub: true,
      description: "Secure file transfer system using TCP sockets.",
    },
    {
      type: "project",
      title: "Website Timeline Monitor",
      tech: "C",
      hideGithub: true,
      description:
        "Program to filter websites based on input file and access dates.",
    },
    {
      type: "project",
      title: "Java Games",
      tech: "Java",
      hideGithub: true,
      description:
        "Basic games using OOP principles for learning and experimentation.",
    },
    {
      type: "project",
      title: "Django Web App",
      tech: "Django, HTML, CSS, JavaScript",
      github: "https://github.com/CLAYE42/tango_with_django_project",
      description:
        "A web application built with Django, showcasing my backend development skills.",
    },
    
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <CardGrid items={items} />
      <Footer />
    </div>
  );
}

export default App;