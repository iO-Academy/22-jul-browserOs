import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import About from "../About";
import Icons from "../Icons";
import Giphy from "../Giphy";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)
    const [isGifDisplayed, setIsGifDisplayed] = useState(false)
    const [showIcons, setShowIcons] = useState(false)
    return (
        <>
            <div className="background">
                {isDisplayed &&
                    <About 
                    isDisplayed = {isDisplayed}
                    setIsDisplayed = {setIsDisplayed}/>
                }

                {isGifDisplayed &&
                    <Giphy 
                    isGifDisplayed = {isGifDisplayed}
                    setIsGifDisplayed = {setIsGifDisplayed}/>
                }

            </div>

            <div>
                {showIcons && 
                <Icons 
                isDisplayed = {isDisplayed}
                setIsDisplayed = {setIsDisplayed}
                isGifDisplayed = {isGifDisplayed}
                setIsGifDisplayed = {setIsGifDisplayed}/>
                }
            </div>
            {showIcons && 
            <Icons 
            isDisplayed = {isDisplayed}
            setIsDisplayed = {setIsDisplayed}
            isGifDisplayed = {isGifDisplayed}
            setIsGifDisplayed = {setIsGifDisplayed}/>
            }
            <NavBar 
            setShowIcons={setShowIcons} 
            showIcons={showIcons}/>
        </>
    )
}

export default MainPage