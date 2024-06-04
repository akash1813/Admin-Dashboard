import "../styles/diagnosis.css";
import React from'react';

function Diagnosis(){

    return(
            <React.Fragment>
                <div className="diagnosis">

           <div className="diagnosishistory">
                <h2 className="heading">Diagnosis History</h2>
                
                <div className="BloodPressure">
                    <p>Blood Pressure</p>
                </div>

                
                <div className="box1">
                    <img src="respiratory rate.png" className="Imag"></img>
                    <p className="para">Respiratory Rate</p>
                    <h2 className="heading">20 bpm</h2>
                    <p className="para2">Normal</p>
                </div>
                
                <div className="box2">
                <img src="temperature.png" className="Imag"></img>
                    <p className="para">Temperature</p>
                    <h2 className="heading">98.6°F</h2>
                    <p className="para2">Normal</p>

                </div>
                
                <div className="box3">

                <img src="HeartBPM.png" className="Imag"></img>
                    <p className="para">Heart Rate</p>
                    <h2 className="heading">78 bpm</h2>
                    <p className="para2"> 🔻Lower than Average</p>
                </div>
            
            </div>

            <div className="diagnosislist">

                Diagnosis List
            </div>

            </div>

            </React.Fragment>
    )
    

}

export default Diagnosis;