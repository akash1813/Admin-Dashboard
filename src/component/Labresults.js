import "../styles/labresults.css";
import React from 'react';
import {useContext} from 'react';
import profileContext from "../context/profile"; 

function LabResult(){

    const {profile} = useContext(profileContext);

    const dataItems = profile.labTest.map((e)=>{

        return(
            <div className="first">
            <p>{e.testName}</p>
            <img src="download.svg"></img>
    
        </div>
        )
    });

return(
        <React.Fragment>
    <h2 className="headingg">Lab Results</h2>
    <div className="lab-results-container">
      {dataItems}
    </div>

    </React.Fragment>

)

}


export default LabResult;

