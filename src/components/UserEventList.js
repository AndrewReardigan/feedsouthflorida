import React from 'react';
import { Link } from 'react-router-dom'


function UserEvents(props) {

    // something to distinguish nearby vs. weekly events?
    const nearbyEvents = props.events.map(e => 
        <div key={e.id} class='eventsList'>
            <Link to={`/user-events/${e.id}`}>
                
              <div class="eventPounds">{e.pounds_goal}</div> {/* or current pounds */}
              <div class="image1">{e.image}</div>
              <div class="eventTitle">{e.event_name}</div>
              
            </Link>
        </div>
    
        )

    // something to distinguish nearby vs. weekly events?
    const weeklyEvents = props.events.map(e => 
        <div key={e.id} class='eventsList'>
            <Link to={`/user-events/${e.id}`}>
                
              <div class="eventGoal">{e.pounds_goal}</div> {/* or current pounds */}
              <div class="image2">{e.image}</div>
              <div class="eventTitle">{e.event_name}</div>
              
            </Link>
        </div>
        
        )

      return(
        <div>
            <div id="logo">ONE TIME EVENTS IN YOUR AREA</div>
            <div class="heading"></div>
            <div>
                {nearbyEvents}
            </div>
            <div class="heading">WEEKLY EVENTS</div>
            <div>
                {weeklyEvents}
            </div>
         
        </div>
      )


}

export default UserEvents