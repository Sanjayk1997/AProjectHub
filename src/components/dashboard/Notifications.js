import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props;
  return(
    <div className = 'section'>
      <div className = 'card z-depth-0'>
        <div className = 'card-content'>
          <span className = 'card-title brown-text text-darken-3'>Notifications</span>
          <ul className = 'Notifications'>
            { notifications && notifications.map(item => {
              return(
                <li key = {item.id}>
                  <span>{item.user} </span>
                  <span className = 'brown-text'>{item.content}</span>
                  <div className = 'grey-text note-date'>
                      {moment(item.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
