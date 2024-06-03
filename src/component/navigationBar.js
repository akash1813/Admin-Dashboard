import NavbarItems from "./NavbarItems";
import NavSettings from './navSetting';
import '../styles/navigationBar.css';
function navigationBar(){
    return (
        <div className="navbar">
            <img className='image'src ='/logo192.png' alt=' company logo' /> 
           <NavbarItems />
            <div>
            <NavSettings />
            </div>
        </div>
    )   
}

export default navigationBar;
