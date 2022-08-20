import React from 'react';
import './Register.css';
import SignButton from './SignButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Register() {
  const styleTextField={maxWidth: '45vh', maxHeight:'8vh', minWidth:'45vh', minHeight:'8vh', margin:'0 0 1vh 4vh'};
  return (
    <div className='main-container'>
        <div className='left-panel'></div>
        <div className='right-panel'>
          <div className = 'mainCall'>
              Want to analyse your expenses?
          </div>
          <div className='subcall1'>
              Register
          </div>
          <TextField id="outlined-basic" label="Name" style={styleTextField} variant="outlined" />
          <TextField id="outlined-basic" label="Email" style={styleTextField} variant="outlined" />
          <TextField id="outlined-basic" label="Mobile" style={styleTextField} variant="outlined" />
          <TextField id="outlined-basic" label="Password" style={styleTextField} variant="outlined" />
          <Button style={{maxWidth: '15vh', maxHeight:'6vh', minWidth:'15vh', minHeight:'6vh', marginLeft:'4vh', fontWeight:'bold'}}variant="contained" >Register</Button>
          <div className='account-sign-in'>
              Already have an account?
          </div>
          <SignButton message ='Sign in' withIcon = {0} signin = {1}/> 
        </div>
    </div>
  )
}

export default Register
