import React, { useState, useEffect } from "react";

function Dropdown({ label, children }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const buttonStyles = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
        background: isOpen ? "#fff" : "#fff",
        color: "#333",
        border: "none",
        borderRadius: "0.25rem",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        transform: isOpen ? "rotate(-90deg)" : "",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
    };

    const labelStyles = {
        fontWeight: "bold",
        fontSize: "1.1rem",
        marginRight: "0.5rem",
        display: "inline-block",
    };

    const containerStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: isOpen ? "center" : "flex-start",
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ display: "inline-block" }}>
            <div style={containerStyles}>
                <div onClick={toggleDropdown} style={labelStyles}>
                    {label}
                </div>
                <button onClick={toggleDropdown} style={buttonStyles}>
                    ▼
                </button>
            </div>
            {isOpen && <div style={{ marginTop: "0.5rem", textAlign: "center" }}>{children}</div>}
        </div>
    );
}



export default Dropdown