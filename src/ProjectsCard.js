import React from 'react';
import baseCardStyle from './styles/cardStyle';

function ProjectCard({ title, tech, github, description,hideGithub }) {
  return (
      <div
        style={{
          ...baseCardStyle,
          borderLeft: "4px solid #fd7e14", // 🟧 orange accent for projects
        }}
      >
      <h3>{title}</h3>
      <p><strong>Language:</strong> {tech}</p>
      {github && !hideGithub && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none", marginTop: "10px" }}
        >
          🔗 View on GitHub
        </a>
      )}
     <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default ProjectCard;