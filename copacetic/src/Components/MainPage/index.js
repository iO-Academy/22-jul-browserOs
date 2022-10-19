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
    const themeClass2 = theme + ' containerbackground'

    useEffect(() => {
        document.body.className = ''
        document.body.classList.add(theme)
    }, [theme])

    return (
        <>
            <div className={themeClass}>
                <div class={themeClass2}>
                    <div className='row'>
                        <div className="col-12">
                            <p className="title display-1 text-wrap">Cuthbert</p>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-12 p1">
                            <p>age: 99, Fave Food: Pizza</p>
                        </div>
                        <div className="col-12 p1">
                            <p>Is testing really needed? Have we checked with the PO? Damn, does the PO need to see the wireframe? What is git? commit message what?</p>
                    </div> */}
                </div>
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
            />
            }
            <NavBar 
            setShowIcons={setShowIcons} 
            showIcons={showIcons}
            />
        </>
    )
}

export default MainPage