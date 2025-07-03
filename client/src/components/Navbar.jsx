import React, { useContext, useState } from 'react';
import bell from "../assets/bell.png"
import people from "../assets/Vector (1).png"
import logIn from "../assets/Vector (2).png"
import logOut from "../assets/LogOut.svg"

import helpdesk from "../assets/Helpdesk.png"
import './Navbar.css';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
  const [activeMode, setActiveMode] = useState('BM');
  const navigate=useNavigate()
  const clickLogIn=()=>{
    navigate("/SignIn")
  }
  const clickLogOut=()=>{
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate("/")
  }
  const clickPeople=()=>{
    navigate("/Profile")
  }
  const handleHelpdeskClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className='navbar'>
      <div className="left">
        <img onClick={handleHelpdeskClick} src={helpdesk} alt="" />
      </div>
      <div className="right">
        <div className="toggle-container">
          <div
            className={`toggle-option ${activeMode === 'BM' ? 'active' : 'inactive'}`}
            onClick={() => setActiveMode('BM')}
          >
            BM
          </div>
          <div
            className={`toggle-option ${activeMode === 'BI' ? 'active' : 'inactive'}`}
            onClick={() => setActiveMode('BI')}
          >
            BI
          </div>
        </div>

        <div className="icon"><img src={bell} alt="" /></div>
        <div onClick={clickPeople} className="icon"><img src={people} alt="" /></div>
        {isLoggedIn?
        <div onClick={clickLogOut} className="icon"><img src={logOut} alt="" /></div>
        :<div onClick={clickLogIn} className="icon"><img src={logIn} alt="" /></div>
          }
      </div>
    </div>
  );
};

export default Navbar;
