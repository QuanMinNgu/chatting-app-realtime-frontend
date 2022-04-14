import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = React.memo(({item}) => {
  const navigate = useNavigate();
  const handleOnlick =() => {
    navigate(`?user=${item.name}&name=${item.socketId}`);
  }
  

  return (
    <div onClick={handleOnlick} className='user_box'>
        <img src="https://res.cloudinary.com/dqbrxkux1/image/upload/v1647656350/Avatar/l4tfoct4j4ixe9bhn9cu.jpg"/>
        <h1 className='name'>{item?.name}</h1>
    </div>
)})

export default User