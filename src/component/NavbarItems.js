import React from 'react';
import  '../styles/navBarItems.css';
function navbarItems() {

    const handleMouseEnter =  (e) => {
        if(e.target.className === 'menuitem') {
        e.stopPropagation()
        e.target.style.backgroundColor = 'lightgray';
        }
    };

    const handleMouseLeave =  (e) => {
        if(e.target.className === 'menuitem') {
        e.stopPropagation()
        e.target.style.backgroundColor = 'transparent';
        }
    };

    return (
        <React.Fragment>
            <ul className='navitems' >
                <div className='menuitem' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src='/birthIcon.svg' alt="home logo"/>
                    <a href='/'>Home</a>
                    </div>
                    <div className='menuitem'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src='/birthIcon.svg' alt="home logo"/>
                    <a href='/'>Home</a>
                    </div>
                    <div className='menuitem'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src='/birthIcon.svg' alt="home logo"/>
                    <a href='/'>Home</a>
                    </div>
                    <div className='menuitem'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src='/birthIcon.svg' alt="home logo"/>
                    <a href='/'>Home</a>
                    </div>
                    
            </ul>
        </React.Fragment>

    )
}
export default navbarItems;