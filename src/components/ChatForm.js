import React, { useEffect } from 'react'

const ChatForm = ({item}) => {
  useEffect(() => {
    console.log(item)
  },[item]);
  return (
    <div className='chat_form'>
        <h1>{item[0]?.name} :</h1>
        <span>{item[0]?.content}</span>
     </div>
  )
}

export default ChatForm