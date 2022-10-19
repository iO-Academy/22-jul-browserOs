import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import About from "../About";
import Icons from "../Icons";
import Giphy from "../Giphy";
import ReactPlayer from "react-player"
import Box from "../Box";
import Music from "../Music";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)
    const [isGifDisplayed, setIsGifDisplayed] = useState(false)
    const [currentlyActiveWindow, setCurrentlyActiveWindow] = useState(null)
    const [showIcons, setShowIcons] = useState(false)
    const [isWindowTitle, setWindowTitle] = useState(null)
    const [isMusicDisplayed, setIsMusicDisplayed] = useState(false)
    const aboutTitle = 'about'
    const giphyTitle = 'giphy'
    const musicTitle = 'music'
    

    return (
        <>
            <div className="background">
                {isDisplayed &&
                    <Box
                        isWindowTitle = {aboutTitle}
                        currentlyActive = {currentlyActiveWindow === 'about' ? true : false}
                        setCurrentlyActiveWindow = {setCurrentlyActiveWindow}
                        isDisplayed = {isDisplayed}
                        setIsDisplayed = {setIsDisplayed}>
                        <About />
                    </Box>
                }

                {isGifDisplayed &&
                    <Box
                        isWindowTitle = {giphyTitle}
                        currentlyActive = {currentlyActiveWindow === 'giphy' ? true : false}
                        setCurrentlyActiveWindow = {setCurrentlyActiveWindow}
                        isDisplayed = {isGifDisplayed}
                        setIsDisplayed = {setIsGifDisplayed}>
                        <Giphy />
                    </Box>
                }

                {isMusicDisplayed &&
                    <Box
                        isWindowTitle = {musicTitle}
                        currentlyActive = {currentlyActiveWindow === 'music' ? true : false}
                        setCurrentlyActiveWindow = {setCurrentlyActiveWindow}
                        isDisplayed = {isMusicDisplayed}
                        setIsDisplayed = {setIsMusicDisplayed}>
                        <Music />
                    </Box>
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
            setIsGifDisplayed = {setIsGifDisplayed}
            isMusicDisplayed = {isMusicDisplayed}
            setIsMusicDisplayed = {setIsMusicDisplayed}/>
            }
            <NavBar 
            setShowIcons={setShowIcons} 
            showIcons={showIcons}/>
        </>
    )
}

export default MainPage