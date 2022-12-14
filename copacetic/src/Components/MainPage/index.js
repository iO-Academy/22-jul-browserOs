import { useState, useEffect, useContext } from "react"
import NavBar from "../NavBar"
import './styles.css';
import Icons from "../Icons";
import Themes from "../Themes";
import ThemeContext from "../../Contexts/ThemeContext";
import Giphy from "../Giphy";
import Box from "../Box";
import Music from "../Music";
import Quotlefish from "../Quotlefish";
import Bisquids from "../Bisquids";
import AboutContent from "../AboutContent";

function MainPage() {

    const [showIcons, setShowIcons] = useState(false)
    const [isDisplayed, setIsDisplayed] = useState(false)
    const [isThemeDisplayed, setIsThemeDisplayed] = useState(false)
    const [isGifDisplayed, setIsGifDisplayed] = useState(false)
    const [currentlyActiveWindow, setCurrentlyActiveWindow] = useState(null)
    const [isMusicDisplayed, setIsMusicDisplayed] = useState(false)
    const [isQuotleDisplayed, setIsQuotleDisplayed] = useState(false)
    const [isBisquidsDisplayed, setIsBisquidsDisplayed] = useState(false)
    const aboutTitle = 'about'
    const giphyTitle = 'giphy'
    const musicTitle = 'music'
    const quotleTitle = 'quotlefish'
    const themesTitle = 'theme'
    const bisquidsTitle = 'bisquids'
    const {theme, setTheme} = useContext(ThemeContext)
    const themeClass = theme + ' background'
   

    useEffect(() => {
        document.getElementById('root').className = ''
        document.getElementById('root').classList.add(theme)
    }, [theme])

    return (
        <>
            <div className={themeClass}>
                {isDisplayed &&
                    <Box
                        isWindowTitle = {aboutTitle}
                        currentlyActive = {currentlyActiveWindow === 'about' ? true : false}
                        setCurrentlyActiveWindow = {setCurrentlyActiveWindow}
                        isDisplayed = {isDisplayed}
                        setIsDisplayed = {setIsDisplayed}>
                        <AboutContent />
                    </Box>
                }

                {isThemeDisplayed &&
                    <Box
                        isWindowTitle = {themesTitle}
                        currentlyActive = {currentlyActiveWindow === 'theme' ? true : false}
                        setCurrentlyActiveWindow = {setCurrentlyActiveWindow} isDisplayed = {isThemeDisplayed}
                        setIsDisplayed = {setIsThemeDisplayed}
                        setTheme = {setTheme}>
                        <Themes 
                        setTheme = {setTheme}/>
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
                {isQuotleDisplayed &&
                    <Box
                        isWindowTitle = {quotleTitle}
                        currentlyActive = {currentlyActiveWindow === 'quotlefish' ? true : false}
                        setCurrentlyActiveWindow = {setCurrentlyActiveWindow}
                        isDisplayed = {isQuotleDisplayed}
                        setIsDisplayed = {setIsQuotleDisplayed}>
                        <Quotlefish />
                    </Box>
                }
                {isBisquidsDisplayed &&
                    <Box
                        isWindowTitle = {bisquidsTitle}
                        currentlyActive = {currentlyActiveWindow === 'bisquids' ? true : false}
                        setCurrentlyActiveWindow = {setCurrentlyActiveWindow}
                        isDisplayed = {isBisquidsDisplayed}
                        setIsDisplayed = {setIsBisquidsDisplayed}>
                        <Bisquids />
                    </Box>
                }      
            {showIcons && 
            <Icons 
                isDisplayed = {isDisplayed}
                setIsDisplayed = {setIsDisplayed}
                isThemeDisplayed = {isThemeDisplayed}
                setIsThemeDisplayed = {setIsThemeDisplayed}
                isGifDisplayed = {isGifDisplayed}
                setIsGifDisplayed = {setIsGifDisplayed}
                isMusicDisplayed = {isMusicDisplayed}
                setIsMusicDisplayed = {setIsMusicDisplayed}
                isQuotleDisplayed = {isQuotleDisplayed}
                setIsQuotleDisplayed = {setIsQuotleDisplayed}
                isBisquidsDisplayed = {isBisquidsDisplayed}
                setIsBisquidsDisplayed = {setIsBisquidsDisplayed}/>
            }
            </div>

            <NavBar 
                setShowIcons={setShowIcons} 
                showIcons={showIcons}/>
        </>
    )
}

export default MainPage