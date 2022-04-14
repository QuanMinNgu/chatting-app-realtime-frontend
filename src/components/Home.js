import React, { useEffect, useState } from 'react'
import './Home.css';
import io from 'socket.io-client';
import User from './User';
import ChattingComponent from './ChattingComponent';
import ChatUser from './ChatUser';
const Home = ({name}) => {


    const [socket,setSocket] = useState();
    const [users,setUsers] = useState([]);
    useEffect(() => {
    const socket = io();
    setSocket(socket);
    if(socket){
        socket.emit("joinRoom",{name});
    }
    return () => {
        socket.close();
    }
    },[]);

    useEffect(() => {
        if(socket){
            socket.on("getUser",user => {
                user.users = user.users.filter(item => item.socketId !== socket.id);
                setUsers(user.users);
            })
        }
        return () => {
            if(socket){
                socket.off("getUser");
            }
        }
    },[socket]);

  return (
    <div className='home'>
        <div className='user_online'>
            <div className='your'>
                <img src="https://res.cloudinary.com/dqbrxkux1/image/upload/v1647656350/Avatar/l4tfoct4j4ixe9bhn9cu.jpg"/>
                <h1 className='name'>{name}</h1>
            </div>
            <div className='friends'>
                {users.map(item => (
                    <User key={item.socketId} item={item}/>
                ))}
            </div>
        </div>
        <div className='message_user'>
            <ChattingComponent socket={socket}/>
            <ChatUser your={name} socket={socket} />
        </div>
    </div>
  )
}

export default Home