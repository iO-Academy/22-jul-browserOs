import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import About from "../About";
import Icons from "../Icons";
import Themes from "../Themes";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)
    const [isThemeDisplayed, setIsThemeDisplayed] = useState(false)
    const [showIcons, setShowIcons] = useState(false)

    return (
        <>
            <div className="background">
                {isDisplayed &&
                    <About 
                    isDisplayed = {isDisplayed}
                    setIsDisplayed = {setIsDisplayed}/>
                }
                {isThemeDisplayed &&
                    <Themes 
                    isThemeDisplayed = {isThemeDisplayed}
                    setIsThemeDisplayed = {setIsThemeDisplayed}/>
                }
            </div>
            {showIcons && 
            <Icons 
            isDisplayed = {isDisplayed}
            setIsDisplayed = {setIsDisplayed}
            isThemeDisplayed = {isThemeDisplayed}
            setIsThemeDisplayed = {setIsThemeDisplayed}/>
            }
            <NavBar 
            setShowIcons={setShowIcons} 
            showIcons={showIcons}/>
        </>
    )
}

export default MainPage