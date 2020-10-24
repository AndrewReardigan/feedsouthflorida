import React from 'react';

function UserEvents(props) {

    const nearbyEvents = props.events.map(e => 
        <div key={e.id}>
            <Link to={`/user-events/${e.id}`}>
                
              <div class="event-goal">{e.pounds_goal}</div> {/* or current pounds */}
              <div class="event-image">{e.image}</div>
              <div class="event-title">{e.event_name}</div>
              
            </Link>
        </div>
    
        )

    const weeklyEvents = props.events.map(e => 
        props.events.map(e => 
            <div key={e.id}>
                <Link to={`/user-events/${e.id}`}>
                    
                  <div class="event-goal">{e.pounds_goal}</div> {/* or current pounds */}
                  <div class="event-image">{e.image}</div>
                  <div class="event-title">{e.event_name}</div>
                  
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