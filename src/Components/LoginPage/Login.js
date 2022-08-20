import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SignButton from './SignButton';
import Google from '../../Resources/Images/google_logo.png';

function Login() {
  const styleTextField={maxWidth: '45vh', maxHeight:'10vh', minWidth:'45vh', minHeight:'10vh', marginLeft:'4vh'};
  return (
    <div className='main-container'>
        <div className='left-panel'></div>
        <div className='right-panel'>
            <div className = 'mainCall'>
                Want to analyse your expenses?
            </div>
            <div className='subcall1'>
                Login
            </div>
            <TextField id="outlined-basic" label="Email" style={styleTextField} variant="outlined" />
            <TextField id="outlined-basic" label="Password" style={styleTextField} variant="outlined" />
            <div className='action-buttons'>
                <Button style={{maxWidth: '15vh', maxHeight:'6vh', minWidth:'15vh', minHeight:'6vh', marginLeft:'4vh', fontWeight:'bold'}}variant="contained" >Login</Button>
                <div className='forgot-password'>
                    Forgot Password?
                <Button style={{maxWidth: '8vh', maxHeight:'4vh', minWidth:'8vh', minHeight:'4vh', margin:'1vh 0 0 5vh', fontWeight:'bold'}}variant="contained" >Click</Button>
                </div>
                
            </div>
            <div className='account-register'>
                New User?
            </div>
            <SignButton message ='Register' withIcon = {0} signin = {0}/> 
            <SignButton message = 'Sign up with Google' withIcon = {1} signin={0} icon={Google}/>
        </div>
    </div>
  )
}

export default Login