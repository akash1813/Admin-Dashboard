import "../styles/PatientDetails.css";
import PatientsName from "./patientsName.js";

function Patient(){

 return(

    <div className="Patient">
      <div className="firstheading">
      <h2 className="heading">Patients</h2>
      <img src="search.svg"></img>
      </div>

          <div>
          <PatientsName />
          </div>
   
    </div>



)

}

export default Patient;