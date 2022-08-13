import React from 'react';
import './SignButton.css';
import { useNavigate } from "react-router-dom";



function SignButton(props) {
    const navigate = useNavigate();
    return (
        props.withIcon ?
            <div className='SignButton' onClick={()=>navigate('/Home')}>
                <img src = {props.icon} alt="icon"/>
                {props.message}
            </div>
            :
        props.signin!==1?
            <div className='SignButton-Email' onClick={()=>navigate('/Home')}>
                {props.message}
            </div>
            :
            <div className='Signin-already' onClick={()=>navigate('/Home')}>
                {props.message}
            </div>

            

    )
}

export default SignButton