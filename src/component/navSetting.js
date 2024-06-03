import React from 'react';
import '../styles/navSetting.css';

function navSetting(){

    return(
        <div className='setting'>
        <img className='imag' style={{height:'3rem' , width:'3rem'}} src ='/logo192.png' alt=' company logo' />
        <div className='name'> 
        <p style={{margin:'5px'}}>Akash Dhiman</p>
        <p style={{margin:'5px'}}>Berozgar</p>
        </div>
       
        <img className='imag imag2' style={{height:"2rem" , width:"2rem", paddingLeft:'5px'}} src ='/logo192.png' alt=' company logo'/>
        <img className='imag' style={{height:"2rem" , width:"2rem"}}src ='/logo192.png' alt=' company logo' /> 
       
        </div>
    )

}

export default navSetting;