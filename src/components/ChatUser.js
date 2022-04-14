import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {DataContext} from './../GolbalState';
const ChatUser = ({socket,your}) => {

  const {search} = useLocation();
  const userName = new URLSearchParams(search).get("name");
  const user = new URLSearchParams(search).get("user");
  const [test,setTest] = useState([]);

  const [chat,setChat] = useContext(DataContext).chat;

  const content = useRef("");


  const handleChat = () => {
    if(!userName){
      return alert("Chọn người nhắn tin.");
    }
    if(!content.current.value){
      return alert("Nhập đoạn chat.");
    }
    socket.emit("sendChat",{
      content:content.current.value,
      username:userName,
      user:your
    });
    content.current.value = "";
  }


  useEffect(() => {
    if(socket){
      socket.on("getChat",infor => {
        setChat([{...infor}]);
      })
    };

    return () => {
      if(socket){
        socket.off("getChat");
      }
    }
  },[socket]);
  return (
    <div className='chat_user'>
        <img src="https://res.cloudinary.com/dqbrxkux1/image/upload/v1647656350/Avatar/l4tfoct4j4ixe9bhn9cu.jpg"/>
        <input type="text" defaultValue={content.current.value} ref={content}/>
        <button onClick={handleChat}>Nhắn</button>
    </div>
  )
}

export default ChatUser