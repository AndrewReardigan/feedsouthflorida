import React from 'react';
import { Link } from 'react-router-dom'


function UserEvents(props) {

  
    //assuming props passed in data by zipcode
    const nearbyEvents = props.events.map(e => 
        <div key={e.id} class='eventsList'>
            <Link to={`/user-events/${e.id}`}>
                
              <div class="eventPounds">{e.total_weight}</div>
              <div class="image1">{e.image}</div>
              <div class="eventTitle">{e.organizer}</div>
              
            </Link>
        </div>
        )

      return(
        <div>
            <div id="logo"></div>
            <div class="heading">EVENTS LISTING</div>
            <div>
                {nearbyEvents}
            </div>        
        </div>
      )


}

export default UserEvents