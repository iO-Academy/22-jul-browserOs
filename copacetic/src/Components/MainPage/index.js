import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import About from "../About";
import Icons from "../Icons";
import Giphy from "../Giphy";
import Box from "../Box";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)
    const [isGifDisplayed, setIsGifDisplayed] = useState(false)
    const [currentlyActiveWindow, setCurrentlyActiveWindow] = useState(null)
    const [showIcons, setShowIcons] = useState(false)
    const [isWindowTitle, setWindowTitle] = useState(null)
    const aboutTitle = 'about'
    const giphyTitle = 'giphy'
    

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