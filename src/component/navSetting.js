import React from 'react';
import '../styles/navSetting.css';

function navSetting(){

    return(
        <div className='setting'>
        <img className='imag' style={{height:'3rem' , width:'3rem'}} src ='/logo192.png' alt=' company logo' />
        <div className='name'> 
        <p style={{margin:'5px',fontSize:14}}>Akash Dhiman</p>
        <p style={{margin:'4px', fontSize:14}}>C.E.O Google</p>
        </div>
       
        <img className='imag imag2' style={{height:"1.5rem" , width:"1.5rem", paddingLeft:'5px'}} src ='/setting.svg' alt=' company logo'/>
        <img className='imag' style={{height:"1.5rem" , width:"1.5rem"}}src ='/menu.svg' alt=' company logo' /> 
       
        </div>
    )

}

export default navSetting;