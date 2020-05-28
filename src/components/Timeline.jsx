import React, { useState } from "react";
import ReactDOM from "react-dom";
import events from "../events";
import TimelineCard from "./TimelineCard";

function Timeline() {
  const [timelineCard, setTimelineCard] = useState([
    "Hover over an event to see what I've done",
  ]);

  function handleHover(event) {
    console.log(event.target.id);
    const selectedEvent = events[event.target.id];

    setTimelineCard(
      <TimelineCard
        title={selectedEvent.title}
        time={selectedEvent.time}
        description={selectedEvent.description}
      />
    );

    // return (<TimelineCard
    //           key={events.id}
    //           title={events.title}
    //           description={events.description}
    //           />);
  }

  function handleMouseOut() {
    setTimelineCard("Hover over an event to see what I've done");
  }

  return (
    <div class="container-fluid" id="professional-timeline">
      <h2>Professional Timeline</h2>
      <h3>What I've been up to since graduation</h3>
      <svg width="400" height="100">
        <line class="timeline-line" x1="10" x2="117" y1="50" y2="50"></line>
        <line class="timeline-line" x1="74" x2="117" y1="50" y2="50"></line>
        <line class="timeline-line" x1="268" x2="117" y1="50" y2="50"></line>
        <line class="timeline-line" x1="62" x2="117" y1="50" y2="50"></line>
        <line class="timeline-line" x1="168" x2="117" y1="50" y2="50"></line>
        <line class="timeline-line" x1="380" x2="117" y1="50" y2="50"></line>
        <line class="timeline-line" x1="117" x2="117" y1="50" y2="50"></line>
        <circle class="timeline-end" r="10" cy="50" cx="19"></circle>
        <circle
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
          id="0"
          class="timeline-event"
          r="10"
          cy="50"
          cx="62"
        ></circle>
        <circle
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
          id="1"
          class="timeline-event"
          r="10"
          cy="50"
          cx="90"
        ></circle>
        <circle
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
          id="2"
          class="timeline-event"
          r="10"
          cy="50"
          cx="268"
        ></circle>
        <circle
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
          id="3"
          class="timeline-event"
          r="10"
          cy="50"
          cx="300"
        ></circle>
        <circle class="timeline-end" r="10" cy="50" cx="388"></circle>

        <text x="6.3984375" y="80" class="timeline-text">
          2017
        </text>
        <text x="375" y="80" class="timeline-text">
          2021
        </text>
      </svg>
      <div class="container timeline-item" id="timeline">
        <h3>{timelineCard}</h3>
      </div>
    </div>
  );
}

export default Timeline;
