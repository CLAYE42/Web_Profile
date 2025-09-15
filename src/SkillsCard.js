import React from 'react';
import baseCardStyle from './styles/cardStyle';

function SkillsCard({ skills }) {
  return (
    <div style={baseCardStyle} >
      <h3>Coding Skills</h3>
      <div style={styles.grid}>
        <SkillColumn title="Experienced" items={skills.experienced} />
        <SkillColumn title="Intermediate" items={skills.intermediate} />
        <SkillColumn title="Learning" items={skills.learning} />
      </div>
    </div>
  );
}

function SkillColumn({ title, items }) {
  return (
    <div style={styles.column}>
      <h4>{title}</h4>
      <ul style={styles.list}>
        {items.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '10px'
  },
  column: {
    flex: 1
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  }
};

export default SkillsCard;