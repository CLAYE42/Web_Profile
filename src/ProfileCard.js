// ProfileCard.js
import React from 'react';
import baseCardStyle from './styles/cardStyle';

function ProfileCard({ centerContent }) {
  const profile = {
    name: "Erlend Clay",
    title: "Graduate Computing Scientist",
    location: "Glasgow, Scotland",
    bio: "Gradute Computing Scientist with a passion for LLMs, AI, and web development. I love building things that make life easier and more fun.",
    avatar: process.env.PUBLIC_URL + "/profile_picture.jpeg",
  };

  const cardStyle = {
    ...baseCardStyle,
    display: "flex",
    flexDirection: "column",
    alignItems: centerContent ? "center" : "flex-start", // center if true
    textAlign: centerContent ? "center" : "left",
  };

  return (
    <div style={cardStyle}>
      <img
        src={profile.avatar}
        alt="Profile"
        style={{
          width: 250,
          height: 250,
          borderRadius: "50%",
          marginBottom: 10,
        }}
      />
      <h2>{profile.name}</h2>
      <h4>{profile.title}</h4>
      <p>{profile.location}</p>
      <p>{profile.bio}</p>
    </div>
  );
}

export default ProfileCard;