import React from 'react';
import './App.css';
import ImageCarousel from "./ImageCarousel";
import CopyText from "./CopyText"
import Dropdown from "./Dropdown"

import KarstenImage from "./images/Karsten.jpg"
import HeimdallSwagger from "./images/HeimdallSwagger.png"
import HeimdallUnity from "./images/argif2.gif"
import SpreadsheetEdit from "./images/SpreadsheetEdit.gif"
import SpreadsheetUndoRedo from "./images/SpreadsheetUndoRedo.gif"

const images = [
    HeimdallSwagger,
    HeimdallUnity,
];

const captions = [
    "Swagger UI documenting the API I created in Entity Framework",
    "Proof of concept AR instruction demo",
];

const images2 = [
    SpreadsheetEdit,
    SpreadsheetUndoRedo,
];

const captions2 = [
    "Dynamically editing mathmatic expressions inside the cells.",
    "Undoing/Redoing changes made to the spreadsheet.",
];

function App() {
    return (
        <div className="App">
            <div className="sidebar">
                <div className="sidebar-content">
                    <img src={KarstenImage} alt="" />
                    <ul>
                        <CopyText />
                        <li><a href="https://www.linkedin.com/in/karstenallison/">LinkedIn</a></li>
                        <li><a href="https://github.com/Karsten-Allison/">GitHub</a></li>
                    </ul>
                </div>
                <div className="belowsidebar">
                    <Dropdown label="Education">
                        <ul>
                            <li><strong>Bachelor of Software Engineering</strong></li>
                            <li>Washington State University, Expected 2026</li>
                        </ul>
                        <ul>
                            <li><strong>Associate in Science</strong></li>
                            <li>Edmonds Community College, Awarded 2021</li>
                        </ul>
                    </Dropdown>
                </div>
            </div>
            <div className="main">
                <h3>My Projects</h3>
                <hr />
                <ul>
                    <h3><a href="https://github.com/Karsten-Allison/HeimdallSwaggerTest">Augmented Reality Instruction Assistant</a></h3>
                    <li>
                        A proof-of-concept augmented reality application to help visualize and distribute assembly instructions for technicians.
                    </li>
                    <li>
                        This was a team project I was apart of, made for a client to help conceptualize a potential use for AR in their field of work.
                    </li>
                    <ImageCarousel images={images} captions={captions} />
                </ul>
                <ul>
                    <h3><a href="https://github.com/Karsten-Allison/SpreadSheet">Spreadsheet Application</a></h3>
                    <li>
                        A spreadsheet application coded to work with advanced mathematical expression parsing and dynamic cell dependency resolution.
 
                    </li>
                    <li>
                    
                    </li>
                    <ImageCarousel images={images2} captions={captions2} />
                </ul>
            </div>
        </div>
    );
}

export default App;
