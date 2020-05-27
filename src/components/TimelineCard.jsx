import React from "react";
import events from "../events.js";




function TimelineCard(props){
    return(
        <div>
        <h2 class="card-title">{props.title}</h2>
        <ul>
          <li>{props.description}</li>
          
        </ul>
      </div>
    )

}

export default TimelineCard;