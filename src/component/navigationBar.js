import NavbarItems from "./NavbarItems";
import NavSettings from './navSetting';
function navigationBar(){
    return (
        <div>
            <img src ='/logo192.png' alt=' company logo' /> 
           <NavbarItems />
            <div>
            <NavSettings />
            </div>
        </div>
    )   
}

export default navigationBar;
