import React from 'react';
import '../styles/diagnosisList.css';
import {useContext} from 'react';
import profileContext from '../context/profile';

function DiagnosisList(){
    const {profile} = useContext(profileContext);
    console.log(typeof profile.diagnosticList)
    
    const renderItem = profile.diagnosticList.map((e) =>{
        return ( <div className='diagnosisList2'>

        <p className='pa'>{e.problem}</p> 
        <p className='pa'> {e.description}</p>
        <p className='pa'>{e.status}</p>
</div>)
    })
return(

    <React.Fragment>

            <div className='diagnosisList'>
                   <p>Problem/Diagnosis</p> 
                   <p>Description</p>
                   <p>Status</p>
            </div>

            <div className='.Lab-results-container'>
             {renderItem}
           </div>
        

    </React.Fragment>

)



}

export default DiagnosisList;