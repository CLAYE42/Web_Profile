// src/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer style={{
            marginTop: "40px",
            padding: "20px",
            textAlign: "center",
            borderTop: "1px solid #ddd",
            fontSize: "14px",
            color: "#555",
        }}>
            <div style={{ marginBottom: "10px" }}>
                <a
                    href="https://www.linkedin.com/in/erlend-clay-1735a5310/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 10px", color: "#0077B5" }}
                >
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="https://github.com/CLAYE42"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 10px", color: "#000" }}
                >
                    <FaGithub size={30} />
                </a>
                <a
                    href="mailto:erlendclay@gmail.com"
                    style={{ margin: "0 10px", color: "#040F16" }}
                >
                    <FaEnvelope size={30} />
                </a>
            </div>
            <div>© {new Date().getFullYear()} Erlend Clay — All rights reserved.</div>
        </footer>
    );
}

export default Footer;