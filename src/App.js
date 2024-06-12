import NavigationBar  from './component/navigationBar';
import PatientDetail from './component/PatientsDetail';
import Diagnosis from './component/diagnosis';
import Profile from './component/profile';

import React from 'react';


function App() {
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <div style={{backgroundColor: '#F5F5F5', display: 'flex', flexWrap: 'wrap',justifyContent:"spaceBetween"}}>
        <div style={{flex: '0 0 99vw'}}>
            <NavigationBar /> 
        </div>

        <div style={{flex: '0 0 24vw'}}>
            <PatientDetail />
        </div>

        <div style={{flex: '0 0 53vw'}}>
            <Diagnosis />
        </div>

        <div >
           <Profile />
        </div>



        {/* Add more boxes as needed */}
    </div>   

    </div>

    )
}

export default App;

