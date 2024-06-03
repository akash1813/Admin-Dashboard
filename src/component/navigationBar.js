import NavbarItems from "./NavbarItems";
import NavSettings from './navSetting';
import '../styles/navigationBar.css';
function navigationBar(){
    return (
        <div className="navbar">
            <img className='image'src ='/TestLogo.svg' alt=' company logo' /> 
           <NavbarItems />
            <div>
            <NavSettings />
            </div>
        </div>
    )   
}

export default navigationBar;
