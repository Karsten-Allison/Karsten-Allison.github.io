import React, { useState } from "react";
import "./CopyText.css";

function CopyText() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("KarstenAllison@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000); // reset text after 3 seconds
    };

    return (
        <p onClick={copyToClipboard} className="copy-text">
            {copied ? "Copied!" : "Copy Email"}
        </p>
    );
}

export default CopyText;

