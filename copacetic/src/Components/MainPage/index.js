import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import cuttlefish from '../../images/cuttlefish-image.png'
import About from "../About";
import Icons from "../Icons";
import getAGif from "../Giphy";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)
    const [showIcons, setShowIcons] = useState(false)
    return (
        <>
            <div id="background">
                {isDisplayed &&
                    <About 
                    isDisplayed = {isDisplayed}
                    setIsDisplayed = {setIsDisplayed}/>
                }
            </div>
            <div>
                <img src={getAGif()}></img>
            </div>
            <div>
                {showIcons && 
                <Icons 
                isDisplayed = {isDisplayed}
                setIsDisplayed = {setIsDisplayed}/>
                }
                <NavBar setShowIcons={setShowIcons} showIcons={showIcons}/>
            </div>
        </>
    )
}

export default MainPage