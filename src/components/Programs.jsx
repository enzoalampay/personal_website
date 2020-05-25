import React from "react";

function Programs(){
    return(
        <div class="container-fluid" id="programs">
      <h2>What I know how to use</h2>
          <div class="container applications">
            <div class="application-category">
              <h3>Programming Languages</h3>
            </div>
            <div class="programming-icons">
              <i class="fab fa-css3-alt fa-4x"></i>
              <i class="fab fa-html5 fa-4x"></i>
              <i class="fab fa-js fa-4x"></i>
              <i class="fab fa-react fa-4x"></i>
              <i class="fab fa-bootstrap fa-4x"></i>
              <i class="fab fa-node-js fa-4x"></i>
              <h3 class="app-identifier"> Program Name </h3>
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