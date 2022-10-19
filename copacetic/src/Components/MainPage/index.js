import { useState, useEffect, useContext } from "react"
import NavBar from "../NavBar"
import './styles.css';
import About from "../About";
import Icons from "../Icons";
import Themes from "../Themes";
import ThemeContext from "../../Contexts/ThemeContext";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)
    const [isThemeDisplayed, setIsThemeDisplayed] = useState(false)
    const [showIcons, setShowIcons] = useState(false)

    const {theme, setTheme} = useContext(ThemeContext)

    const themeClass = theme + ' background'
    const themeIconStyling = theme + ' overlay'
    const themeNavStyling = theme + ' row fixed-bottom px-4 pt-4 navBackground'

    useEffect(() => {
        document.body.className = ''
        document.body.classList.add(theme)
    }, [theme])

    return (
        <>
            <div className={themeClass}>
                {isDisplayed &&
                    <About 
                    isDisplayed = {isDisplayed}
                    setIsDisplayed = {setIsDisplayed}/>
                }
                {isThemeDisplayed &&
                    <Themes 
                    isThemeDisplayed = {isThemeDisplayed}
                    setIsThemeDisplayed = {setIsThemeDisplayed}
                    setTheme = {setTheme}/>
                }
            </div>
            {showIcons && 
            <Icons 
            isDisplayed = {isDisplayed}
            setIsDisplayed = {setIsDisplayed}
            isThemeDisplayed = {isThemeDisplayed}
            setIsThemeDisplayed = {setIsThemeDisplayed}
            themeIconStyling = {themeIconStyling}/>
            }
            <NavBar 
            setShowIcons={setShowIcons} 
            showIcons={showIcons}
            themeNavStyling={themeNavStyling}
            />
        </>
    )
}

export default MainPage