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
            <div id="logo"></div>
            <div class="heading"></div>
            <div>
                {nearbyEvents}
            </div>

            <div>
                {weeklyEvents}
            </div>
         
        </div>
      )


}

export default UserEvents