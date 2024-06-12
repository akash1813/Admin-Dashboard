import "../styles/diagnosis.css";
import React from'react';
import DiagnosisList from './diagnosisList';
import profileContext from '../context/profile';
import {useContext} from 'react';



function Diagnosis(){

    const {profile} = useContext(profileContext);


    return(
            <React.Fragment>
                <div className="diagnosis">

              <div className="diagnosishistory">
                <p className="headPara">Diagnosis History</p>
                
                <div className="BloodPressure">
                    <p>Blood Pressure</p>
                </div>

                
                <div className="box1">
                    <img src="respiratory rate.png" className="Imag"></img>
                    <p className="para">Respiratory Rate</p>
                    <h2 className="heading">{profile.respiratoryRate} bpm</h2>
                    <p className="para2">Normal</p>
                </div>
                
                <div className="box2">
                <img src="temperature.png" className="Imag"></img>
                    <p className="para">Temperature</p>
                    <h2 className="heading">{profile.Temperature}°F</h2>
                    <p className="para2">Normal</p>

                </div>
                
                <div className="box3">

                <img src="HeartBPM.png" className="Imag"></img>
                    <p className="para">Heart Rate</p>
                    <h2 className="heading">{profile.heartRate} bpm</h2>
                    <p className="para2"> 🔻Lower than Average</p>
                </div>

            
            </div>

            

            <div className="diagnosislist">

                <h2 className="h">Diagnostic List</h2>

                     <div>
                    <DiagnosisList />

                    </div>  
            </div> 

            </div>

            </React.Fragment>
    )
    

}

export default Diagnosis;