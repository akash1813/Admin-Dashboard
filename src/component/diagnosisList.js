import React from 'react';
import '../styles/diagnosisList.css';
import {useContext} from 'react';
import profileContext from '../context/profile';
import data from '../utils/data';


function DiagnosisList(){
    const {profile} = useContext(profileContext);

return(

    <React.Fragment>

            <div className='diagnosisList'>

                   <p className='pa'>Problem/Diagnosis</p> 
                   <p className='pa'>Description</p>
                   <p className='pa'>Status</p>
            </div>

            <div className='diagnosisList2'>

                <p className='pa'></p> 
                <p className='pa'> </p>
                <p className='pa'></p>
</div>



    </React.Fragment>

)



}

export default DiagnosisList;