import React from "react";
import { Masonry } from "masonic";
import ProfileCard from "./ProfileCard";
import ExperienceCard from "./ExperienceCard";
import SkillsCard from "./SkillsCard";
import ProjectCard from "./ProjectsCard";
import QualificationCard from "./QualificationCard";
import AnimatedOnVisible from "./AnimatedOnVisible";
import HoverCardWrapper from "./HoverCardWrapper";

function renderCard(item) {
  const { type, ...props } = item;
  switch (type) {
    case "profile":
      return <ProfileCard {...props} />;
    case "experience":
      return <ExperienceCard {...props} />;
    case "skills":
      return <SkillsCard {...props} />;
    case "project":
      return <ProjectCard {...props} />;
    case "qualification":
      return <QualificationCard {...props} />;
    default:
      return null;
  }
}

function getAnimationType(type) {
  return "zoom"; // same animation for all cards
}

function CardGrid({ items }) {
  return (
    <Masonry
      items={items}
      columnWidth={320}
      columnGutter={16}
      overscanBy={2}
      render={({ data }) => (
        <HoverCardWrapper onHoverStyle={{ boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}>
          <AnimatedOnVisible animation={getAnimationType(data.type)}>
            {renderCard(data)}
          </AnimatedOnVisible>
        </HoverCardWrapper>
      )}
    />
  );
}

export default CardGrid;