import "../styles/diagnosis.css";
import React from'react';

function Diagnosis(){

    return(
            <React.Fragment>
                <div className="diagnosis">

           <div className="diagnosishistory">
                Diagnosis History
                
                <div className="BloodPressure">
                    <p>Blood Pressure</p>
                </div>

                <div className="box1">Box1</div>
                <div className="box2">Box2</div>
                <div className="box3">Box3</div>
            
            </div>

            <div className="diagnosislist">

                Diagnosis List
            </div>

            </div>

            </React.Fragment>
    )
    

}

export default Diagnosis;