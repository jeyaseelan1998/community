import React, { useState } from 'react'
import moment from 'moment';

import {chats} from '../../data/mock_data';
import {addUserName} from '../../api/local_storage';

import "./ChatRoom.css";

let user = addUserName();

const ChatRoom = (event) => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
      setMessage(event.target.value);
    }

    const sender = () => {
      console.log(message, "message")
      setMessage('')
    }

    return (
    <div className='chat-container pl-3 pr-3  d-flex flex-column justify-content-end'>
            {
                chats.map(chat=><div key={chat.id} className={chat.user !== user ? "incoming" : "outgoing"}>
                  <div className='d-flex flex-row'>
                    <h1 className='user-name'>{chat.user}</h1>
                    <span className='ml-auto time'>{moment(chat.timestamp).fromNow()}</span>
                  </div>
                  <p className='message'>{chat.text}</p>
                  </div>)
            }
            
      <div className='fixed-bottom m-1 d-flex flex-row justify-content-end align-items-center'>
            <input value={message} onChange={handleChange} className=" bg-white form-control text-input border border-0 mr-2 w-100 pt-2 pb-2 pl-4 pr-4 text-right" required />
            <button className='btn btn-dark' onClick={sender}>send 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send ml-1" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
            </button>
      </div>
    </div>
  )
};

export default ChatRoom;