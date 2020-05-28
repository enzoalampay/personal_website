import React from "react";
import events from "../events.js";

function TimelineCard(props) {
  return (
    <div>
      <h2 class="card-title">{props.title}</h2>
      <p>{props.time}</p>
      <ul>
        {props.description.map((descriptionItem) => (
          <li>{descriptionItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineCard;
