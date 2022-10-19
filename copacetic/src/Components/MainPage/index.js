import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import About from "../About";
import Icons from "../Icons";
import Giphy from "../Giphy";
import ReactPlayer from "react-player"


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

                    <div>
                    </div>
                {isGifDisplayed &&
                    <Giphy 
                    isGifDisplayed = {isGifDisplayed}
                    setIsGifDisplayed = {setIsGifDisplayed}/>
                }

                {isGifDisplayed &&
                    <ReactPlayer
                    url="https://soundcloud.com/user-894394120-615016070/miss-you"
                    volume={0.2}
                    isMusicDisplayed = {isMusicDisplayed}
                    setIsMusicDisplayed = {setIsMusicDisplayed}/>
                }   
            </div>
            <div>
                {showIcons && 
                <Icons 
                isDisplayed = {isDisplayed}
                setIsDisplayed = {setIsDisplayed}
                isGifDisplayed = {isGifDisplayed}
                setIsGifDisplayed = {setIsGifDisplayed}
                isMusicDisplayed = {isMusicDisplayed}
                setIsMusicDisplayed = {setIsMusicDisplayed}/>
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