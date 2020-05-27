import React, { useState } from "react";

function Programs() {
  const [programName, setProgramName] = useState("");

  function displayName(event) {
    const programName = event.target.id;
    setProgramName(programName);
  }

  return (
    <div class="container-fluid" id="programs">
      <h2>What I know how to use</h2>
      <div class="container applications">
        <div class="application-category">
          <h3>Languages & Frameworks</h3>
        </div>
        <div class="programming-icons">
          <i
            onMouseEnter={displayName}
            id="CSS"
            class="fab fa-css3-alt fa-4x"
          ></i>
          <i
            onMouseEnter={displayName}
            id="HTML5"
            class="fab fa-html5 fa-4x"
          ></i>
          <i
            onMouseEnter={displayName}
            id="Javascript"
            class="fab fa-js fa-4x"
          ></i>
          <i
            onMouseEnter={displayName}
            id="React"
            class="fab fa-react fa-4x"
          ></i>
          <i
            onMouseEnter={displayName}
            id="Bootstrap"
            class="fab fa-bootstrap fa-4x"
          ></i>
          <i
            onMouseEnter={displayName}
            id="Node.js"
            class="fab fa-node-js fa-4x"
          ></i>
          <h3 class="app-identifier"> {programName} </h3>
        </div>
      </div>
      <div class="container applications">
        <div class="application-category">
          <h3>Applications</h3>
        </div>
        <div class="programming-icons">
          <img src="images/Googledocs.png" alt="Google Docs"></img>
          <img src="images/airtable.png" alt="AirTable logo"></img>
          <img src="images/ClickUp.png" alt="ClickUp logo"></img>
          <img src="images/trello.png" alt="trello logo"></img>

          <h3 class="app-identifier"> Program Name </h3>
        </div>
      </div>
    </div>
  );
}

export default Programs;
