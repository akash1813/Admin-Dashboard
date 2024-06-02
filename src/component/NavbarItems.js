import React from 'react';
function navbarItems() {
    return (
        <React.Fragment>
            <li>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
                <a href='/services'>Services</a>
                <a href='/login'>Login</a>
            </li>
        </React.Fragment>

    )
}
export default navbarItems;