import "../styles/PatientDetails.css";
import PatientsName from "./patientsName.js";
import data from  '../utils/data.js'



function Patient(){ 
const renderedItem = data.map((e, index)=>{
  return (
    <PatientsName Key={index} name={e.name} gender={e.gender} age={e.age} image={e.image}/>
  )
})
 return(

    <div className="Patient">
      <div className="firstheading">
      <h2 className="heading">Patients</h2>
      <img src="search.svg"></img>
      </div>

         <div className="LAb-results-container"> 
          {renderedItem}
          </div>
   
    </div>



)

}

export default Patient;