import NavBar from "../NavBar"
import './styles.css';
import Icons from "../Icons";
import { useState } from "react";


function MainPage() {

    const [showIcons, setShowIcons] = useState(false)
    return (
        <>
        <div id="background">
        </div>
        <div>
            {showIcons && 
            <Icons />
            
            
            }
            <NavBar setShowIcons={setShowIcons} showIcons={showIcons}/>
        </div>
        </>
    )
}

export default MainPage