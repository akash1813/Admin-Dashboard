import NavigationBar  from './component/navigationBar';
import PatientDetail from './component/PatientsDetail';
import Diagnosis from './component/diagnosis';
import Profile from './component/profile';

import React from 'react';


function App() {
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <div style={{backgroundColor: '#F5F5F5', display: 'flex', flexWrap: 'wrap'}}>
        <div style={{flex: '0 0 100%'}}>
            <NavigationBar /> 
        </div>

        <div style={{flex: '0 0 24%'}}>
            <PatientDetail />
        </div>

        <div style={{flex: '0 0 53%'}}>
            <Diagnosis />
        </div>

        <div style={{flex: '0 0 15%'}}>
           <Profile />
        </div>



        {/* Add more boxes as needed */}
    </div>   

    </div>

    )
}

export default App;

