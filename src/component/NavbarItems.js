import React from 'react';
import  '../styles/navBarItems.css';
function navbarItems() {


    return (
        <React.Fragment>
            <ul className='navitems' >
                <div className='menuitem'>
                    <img src='/Home.svg' alt="home logo" style={{height:17, width:17}}/>
                    <button className='btn'>Overview</button>
                    </div>
                    <div className='menuitem'>
                    <img src='/Patients.svg' alt="home logo"/>
                    <button className='btn'>Patients</button>
                    </div>
                    <div className='menuitem'>
                    <img src='/Schedule.svg' alt="home logo"/>
                    <button className='btn'>Schedule</button>
                    </div>
                    <div className='menuitem'>
                    <img src='/message.svg' alt="home logo"/>
                    <button className='btn'>Message</button>
                    </div>
                    <div className='menuitem'>
                    <img src='/transactions.svg' alt="home logo"/>
                    <button className='btn'>Transactions</button>
                    </div>

                    
            </ul>
        </React.Fragment>

    )
}
export default navbarItems;