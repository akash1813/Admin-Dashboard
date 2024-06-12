import { createContext, useState } from "react";
import data from '../utils/data';
const profileContext = createContext();

function Provider({ children }) {
    const [profile, setProfile] = useState(data[0]);

    const valueToShare = {
        profile,
        handleProfile: (i) => {
            setProfile(data[i]);
        }
    }

    return <profileContext.Provider value={valueToShare} >
        {children}
    </profileContext.Provider>
}
export { Provider };

export default profileContext;