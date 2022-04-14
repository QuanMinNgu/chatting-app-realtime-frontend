import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../GolbalState';
import ChatForm from './ChatForm';
import './ChattingComponent.css';
const ChattingComponent = () => {

  const [chat] = useContext(DataContext).chat;
  const [chatting,setChatting] = useState([]);

  useEffect(() =>{
    if(chat.length > 0){
      setChatting([...chatting,chat]);
    }
  },[chat]);

  return (
    <div className='chat_container'>
        {chatting?.map((item,index) => (
          item && <ChatForm item={item} key={index}/>
        ))}
    </div>
)}

export default ChattingComponent