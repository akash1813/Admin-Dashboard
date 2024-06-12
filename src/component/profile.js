import "../styles/profile.css";
import React from'react';
import LabResult from "./Labresults";
import { useContext } from "react";
import profileContext from "../context/profile";
function Profile() {
  const {profile} = useContext(profileContext)
  
    return(

         <div className="profile">

           <div className="personalDetails">
                
                <img src={profile.image} className="image"></img>
    

                <div className="name">
                    <h3>{profile.name}</h3>
                </div>

                <div className="Box">
                 <img src="Birth.png" className="immage"></img>
                 <div> 
                   <p>Date Of Birth</p>
                   <p><b>{profile.dob}</b></p>
                   </div>
                </div>
                
                <div className="Box">
                  <img src="Gender.png" className="immage"></img>
                   <div>
                   <p>Gender</p>
                   <p><b>{profile.gender}</b></p>
                   </div>
                </div>
                
                <div className="Box">
                <img src="Phone.png" className="immage"></img>
                   <div>
                   <p>Contact Info.</p>
                   <p><b>{profile.contact}</b></p>
                   </div>
                </div>
                <div className="Box">
                <img src="Phone.png" className="immage"></img>
                   <div>
                   <p>Emergency Contacts</p>
                   <p><b>{profile.emergencyContact}</b></p>
                   </div>
                </div>
                <div className="Box">
                <img src="Phone.png" className="immage"></img>
                   <div>
                   <p>Insurance Provider</p>
                   <p><b>{profile.insuranceProvider}</b></p>
                   </div>
                </div>
                
                    <button className="buton">Show All Information</button>
            
            </div>

            <div className="labresults">
                
                    <LabResult />
            </div>

            </div>


    )

}

export default Profile;