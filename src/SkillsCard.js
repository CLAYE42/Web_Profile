// src/SkillsCard.jsx
import React from 'react';
import baseCardStyle from './styles/cardStyle';

function SkillsCard({ title, skills }) {
  return (
    <div
      style={{
        ...baseCardStyle,
        borderLeft: "4px solid #28a745", // single green accent for all skills cards
        padding: "20px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <h3 style={{ marginBottom: "12px" }}>{title}</h3>
      <div style={styles.grid}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={styles.row}>
            <strong style={{ marginRight: "6px" }}>{formatCategoryName(category)}:</strong>
            {items.map((skill, idx) => (
              <React.Fragment key={idx}>
                <span>{skill}</span>
                {idx < items.length - 1 && <span style={{ margin: "0 6px" }}>•</span>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Format camelCase category names to separate words
function formatCategoryName(name) {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2'); // ProblemSolving → Problem Solving
}

const styles = {
  grid: {
    display: 'flex',
    flexDirection: 'column', // stack categories vertically
    gap: '8px',
    marginTop: '10px'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: '14px',
    color: '#333',
  },
};

export default SkillsCard;