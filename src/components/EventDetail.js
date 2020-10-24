import React from 'react';

function EventDetails({event}) {

      return(
        event ?
        <div>
          <div id="logo"></div>
          <p>{event.description}</p>
          <p>{event.total_weight}</p>
          <p>{event.current_weight}  </p>
          <p>{event.start_date} : {event.end_date} </p>
          <p>{event.organizer} </p>
          <p>{event.organizer.email}</p>
        </div> :
        <div></div>
      )

 
}

export default (EventDetails)