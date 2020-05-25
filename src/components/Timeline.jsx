import React from "react";
import TimelineCard from "./TimelineCard";
import TimelineSVG from "./TimelineSVG";
import events from "../events.js";


function createCard(events) {
    return (<TimelineCard 
        key={events.id}
        title={events.title}
        description={events.description}
        />);
}

function Timeline(){
    return(
        <div class="container-fluid" id="professional-timeline">
      <h2>Professional Timeline</h2>
      <h3>What I've been up to since graduation</h3>
  
      <TimelineSVG />
        {events.map(createCard)}

      {/* <div class="container timeline-item">
        <h2 class="card-title">Position</h2>
        <h3>Company and Years</h3>
        <ul>
          <li>Zombie ipsum reversus ab viral inferno</li>
          <li>De carne lumbering animata corpora quaeritis</li>
          <li>De apocalypsi gorger omero undead survivor dictum mauris</li>
        </ul>
      </div> */}
    </div>

    )
};

export default Timeline;