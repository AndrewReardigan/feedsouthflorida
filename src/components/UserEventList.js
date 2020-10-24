import React from 'react';

function UserEvents(props) {

    const nearbyEvents = props.events.map(e => 
        <li key={e.id}>
          <Link to={`/user-events/${e.id}`}>{e.event_name}</Link>
        </li>
    
        )

    const weeklyEvents = props.events.map(e => 
        <li key={e.id}>
          <Link to={`/user-events/${e.id}`}>{e.event_name}</Link>
        </li>
        
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