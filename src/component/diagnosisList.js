import React from 'react';
import '../styles/diagnosisList.css';

function DiagnosisList(){

return(

    <React.Fragment>

            <div className='diagnosisList'>

                   <p className='pa'>Problem/Diagnosis</p> 
                   <p className='pa'>Description</p>
                   <p className='pa'>Status</p>
            </div>

            <div className='diagnosisList2'>

                <p className='pa'>Hypertension</p> 
                <p className='pa'>Chronic high blood pressure </p>
                <p className='pa'>Under Observation</p>
</div>



    </React.Fragment>

)



}

export default DiagnosisList;