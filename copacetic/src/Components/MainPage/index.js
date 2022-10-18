import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import About from "../About";
import Icons from "../Icons";

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
            {showIcons && 
            <Icons 
            isDisplayed = {isDisplayed}
            setIsDisplayed = {setIsDisplayed}/>
            }
            <NavBar setShowIcons={setShowIcons} showIcons={showIcons}/>
        </>
    )
}

export default MainPage