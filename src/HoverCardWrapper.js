import React, { useState } from "react";

export default function HoverCardWrapper({ children, onHoverStyle = {} }) {
  const [isHovered, setHovered] = useState(false);

  const wrapperStyle = {
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "transform 0.25s ease-in-out",
    cursor: "pointer",
    width: "100%",
  };

  // Clone the child and inject style if needed
  const childWithHover = React.cloneElement(children, {
    style: {
      ...children.props.style,
      ...(isHovered ? onHoverStyle : {}),
    },
  });

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {childWithHover}
    </div>
  );
}