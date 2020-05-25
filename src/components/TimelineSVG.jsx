import React, {useState} from "react";

function TimelineSVG(){


// function handleMouseOver(event){
//     return(stroke:)
// }

// function handleMouseOut(event){
//     console.log(event.target.this)
// }
    


return (
<svg width="400" height="100">
        <line class="timeline-line" x1="10" x2="117" y1="50" y2="50" ></line>
        <line class="timeline-line" x1="74" x2="117" y1="50" y2="50" ></line>
        <line class="timeline-line" x1="268" x2="117" y1="50" y2="50" ></line>
        <line class="timeline-line" x1="62" x2="117" y1="50" y2="50" ></line>
        <line class="timeline-line" x1="168" x2="117" y1="50" y2="50" ></line>
        <line class="timeline-line" x1="380" x2="117" y1="50" y2="50" ></line>
        <line class="timeline-line" x1="117" x2="117" y1="50" y2="50" ></line>
        <circle class="timeline-event timeline-end" r="10" cy="50" cx="19"></circle>
        <circle onMouseOver={{stroke: "black";}} onMouseOut={handleMouseOut} class="timeline-event" r="10" cy="50" cx="62"></circle>
        <circle onMouseOver={{stroke: "black";}} onMouseOut={handleMouseOut} class="timeline-event" r="10" cy="50" cx="90"></circle>
        <circle onMouseOver={{stroke: "black";}} onMouseOut={handleMouseOut} class="timeline-event" r="10" cy="50" cx="268"></circle>
        <circle onMouseOver={{stroke: "black";}} onMouseOut={handleMouseOut} class="timeline-event" r="10" cy="50" cx="300"></circle>
        <circle class="timeline-event timeline-end" r="10" cy="50" cx="388"></circle>
  
        <text x="6.3984375" y="133" class="timeline-text">2017</text>
        <text x="375" y="133"  class="timeline-text">2021</text>
      </svg>

)
};

export default TimelineSVG;


