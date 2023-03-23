import React, { useState } from "react";
import './CopyText.css'

function CopyText() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("Karstenallison@gmail.com");
        setCopied(true);
    };

    return (
            <p onClick={copyToClipboard}>
                {copied ? "Copied!" : "Copy Email"}
            </p>
    );
}

export default CopyText;
