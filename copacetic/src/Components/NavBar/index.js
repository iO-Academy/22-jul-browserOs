import Clock from "../Clock"
import FullScreen from "../FullScreen"
import MenuBtn from "../MenuBtn"
import './style.css'
import ThemeContext from '../../Contexts/ThemeContext'
import { useContext } from 'react'

function NavBar({showIcons, setShowIcons}) {
    
    const {theme} = useContext(ThemeContext)
    const themeNavStyling = theme + ' row fixed-bottom px-4 pt-4 navBackground'

    return (
        <>
            <div className= {themeNavStyling}  >
                <div className="col-4 d-flex justify-content-start">
                <FullScreen />
                </div>
                <div className="col-4 d-flex justify-content-center"onClick={()=> setShowIcons(!showIcons)}>
                    <MenuBtn 
                    showIcons={showIcons}/>
                </div>
                <div className="col-4 d-flex justify-content-end notAllowed"><Clock /></div>
            </div>
        </>
    )
}

export default NavBar