import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import cuttlefish from '../../images/cuttlefish-image.png'
import About from "../About";
import Icons from "../Icons";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    const [showIcons, setShowIcons] = useState(false)
   

    return (
        <>
        <div id="background">
            {isDisplayed &&
                <About 
                isDisplayed = {isDisplayed}
                setIsDisplayed = {setIsDisplayed}/>
            }
            <button onClick={handleAboutClick}>About</button>
                <NavBar />
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