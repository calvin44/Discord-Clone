import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'


const Message = ({src, timestamp, username}) => {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>ssangha
                    <span className="message__timestamp">this is timestamp</span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
