import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import cardStyle from "./styles/cardStyle";
import ReactDOM from "react-dom";

function QualificationCard({ institution, qualification, time, details }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        style={{
          ...cardStyle,
          borderLeft: "4px solid #6f42c1", // purple
          cursor: "pointer",
          transition: "0.2s ease",
        }}
      >
        <strong>{institution}</strong>
        <p style={{ fontSize: "14px", margin: "4px 0" }}>{qualification}</p>
        <p style={{ fontSize: "12px", color: "#666" }}>{time}</p>
        <p style={{ fontSize: "12px", color: "#666" }}>Click to view details</p>
      </div>

      {isOpen &&
        ReactDOM.createPortal(
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              backdropFilter: "blur(2px)",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "12px",
                maxWidth: "700px",
                width: "90%",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
                zIndex: 1001,
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "15px",
                  fontSize: "24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>
              <h2 style={{ marginBottom: "8px" }}>{institution}</h2>
              <h4 style={{ margin: "4px 0" }}>{qualification}</h4>
              <p style={{ margin: "4px 0", fontWeight: "bold" }}>{time}</p>
              <div style={{ marginTop: "12px" }}>
                <ReactMarkdown>{details}</ReactMarkdown>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default QualificationCard;