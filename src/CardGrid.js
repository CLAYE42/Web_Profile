import React, { useState, useEffect } from "react";
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
  const [sortedItems, setSortedItems] = useState(items);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const profile = items.find((i) => i.type === "profile");
      const rest = items.filter((i) => i.type !== "profile");

      if (width > 1024) {
        // Desktop: profile second
        if (rest.length > 0) {
          const reordered = [...rest];
          reordered.splice(1, 0, profile); // insert profile after first item
          setSortedItems(reordered);
        } else {
          setSortedItems([profile]);
        }
      } else {
        // Mobile: profile first
        setSortedItems([profile, ...rest]);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  return (
    <Masonry
      items={sortedItems}
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