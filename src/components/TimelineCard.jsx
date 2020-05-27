import React from "react";
import events from "../events.js";

function TimelineCard(props) {
  return (
    <div>
      <h2 class="card-title">{props.title}</h2>
      <ul>
        {props.description.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineCard;
