
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  const name = useRef("");
  const [login,setLogin] = useState(false);
  const handleLogin = () =>{
    if(!name.current.value){
        return alert("Vui lòng nhập tên của bạn.");
    }
    setLogin(true);
  }
  return (
    <Router>
    <div className="home_container">
     {!login ? <div className='enter_room'>
            <div className='name_input'>
                <label>Nhập tên: </label>
                <input ref={name} type="text"/>
            </div>
            <div className='button_input'>
                <button onClick={handleLogin}>Tham gia</button>
            </div>
        </div>:
        <Home name={name.current.value}/>}
    </div>
    </Router>
  );
}

export default App;
