import "../styles/profile.css";
import React from'react';
import LabResult from "./Labresults";

function Profile(){

    return(

         <div className="profile">

           <div className="personalDetails">
                
                <img src="Profile.jpeg" className="image"></img>
    

                <div className="name">
                    <h3>Akash Dhiman</h3>
                </div>

                <div className="Box">
                 <img src="Birth.png" className="immage"></img>
                 <div> 
                   <p>Date Of Birth</p>
                   <p><b>May 13, 2002</b></p>
                   </div>
                </div>
                
                <div className="Box">
                  <img src="Gender.png" className="immage"></img>
                   <div>
                   <p>Gender</p>
                   <p><b>Male</b></p>
                   </div>
                </div>
                
                <div className="Box">
                <img src="Phone.png" className="immage"></img>
                   <div>
                   <p>Contact Info.</p>
                   <p><b>8219749197</b></p>
                   </div>
                </div>
                <div className="Box">
                <img src="Phone.png" className="immage"></img>
                   <div>
                   <p>Emergency Contacts</p>
                   <p><b>7219749197</b></p>
                   </div>
                </div>
                <div className="Box">
                <img src="Phone.png" className="immage"></img>
                   <div>
                   <p>Insurance Provider</p>
                   <p><b>LIC</b></p>
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