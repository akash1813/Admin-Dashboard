import '../styles/patientsName.css';
import profileContext from '../context/profile.js';
import { useContext } from 'react';
function PatientsName(props) {
        const {handleProfile} = useContext(profileContext);
        console.log(props.Key, props);
    return(


            <div onClick={()=>handleProfile(props.Key)} className='details'>
                <img src={props.image} className='imagee' alt="Profile"></img>

                  <div className='data1'>
                  
                   <p className='paraa1'> {props.name}</p>
                   <p className='paraa2'>{props.gender}, {props.age}</p>

                  
                </div> 

                <div className='sidemenu'>
                <img src="sideMenu.svg" alt="sidemenu"></img>

                </div>
                
            </div>


    )


}

export default PatientsName;