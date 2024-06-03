import NavigationBar  from './component/navigationBar';
import PatientDetail from './component/PatientsDetail';
import Diagnosis from './component/diagnosis';
import Profile from './component/profile';

import React from 'react';


function App() {
    return (
    
        <div style={{backgroundColor: '#F5F5F5', display: 'flex', flexWrap: 'wrap'}}>
        <div style={{flex: '0 0 33.33%', padding: '10px'}}>
            <NavigationBar /> 
        </div>

        <div style={{flex: '0 0 20%', padding: '10px'}}>
            <PatientDetail />
        </div>

        <div style={{flex: '0 0 50%', padding: '10px'}}>
            <Diagnosis />
        </div>

        <div style={{flex: '0 0 20%', padding: '10px'}}>
           <Profile />
        </div>



        {/* Add more boxes as needed */}
    </div>    

    )
}

export default App;