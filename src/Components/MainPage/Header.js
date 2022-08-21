import React, {useState} from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
function Header() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const getProfileMenu = () => {
    if(openProfile){
      return (
        <div className='profile-menu-window'>
            <div className='profile-menuBox'>Profile</div>
            <div className='profile-menuBox' onClick={()=>{
              localStorage.removeItem("userInfo");
              navigate('/');
            }}>Logout</div>
        </div>
      )
    }
  }

  return (
    <div className='header-container'>
        <div className='nav-bar-buttons'>
          <div className='user-name'>Welcome, {userInfo.name}!</div>
          <AccountCircleIcon onClick={()=>setOpenProfile(!openProfile)} size='large' style={{color:'white', height:'5vh', width:'5vh', cursor:'pointer'}}/>
          {getProfileMenu()}
        </div>
    </div>
  )
}

export default Header;
    