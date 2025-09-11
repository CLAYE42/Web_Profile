// src/App.jsx
import React from "react";
import CardGrid from "./CardGrid";
import Footer from "./Footer";

function App() {
  const items = [
    {
      type: "experience",
      company: "Carey Hughes Solicitors",
      role: "Adiministration  Assistant",
      description:
        "Managing client onboarding and deed registration using ScotLIS and Amiqus. Gained insight into legal operations and maintained attention to regulatory standards.",
      time: "2024 – Present",
    },
    {
      type: "profile",
      centerContent: true,
    },
    {
      type: "skills",
      skills: {
        experienced: ["Python","Java",  "JavaScript", "HTML", "CSS", "SQL","C++/C","React", ],
        intermediate: ["OpenAI API","Sentence Transformers","LlamaIndex", "Git","Node.js","Django",],
        learning: ["Next.js", "TypeScript", "Flask", "tailwindcss", "Docker"],
      }
    },
    {
      type: "experience",
      company: "Sanandaff",
      role: "CLeaning Operative",
      description:
       "Performed cleaning duties in a variety of settings, including residential and commercial properties. Developed strong attention to detail and time management skills while ensuring high standards of cleanliness and customer satisfaction.",
      time: "2025 – Present",
    },
    {
      type: "experience",
      company: "Biggar High School",
      role: "SQA Qualifications",
      description:
        "Achieved strong academic results with a focus on Mathematics, Physics, and Computing Science.",
      time: "2015 – 2021",
    },
    {
      type: "qualification",
      title: "University of Glasgow – BSc (Hons) Computing Science (2021–2025)",
      details: `
**Classification**: Second Class Honours (Division I)

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

***Awards**\\
• University of Glasgow School of Computing Science – Level 4 Project with the Best Evaluation 
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
• Business Management (A)

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
    
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <CardGrid items={items} />
      <Footer />
    </div>
  );
}

export default App;