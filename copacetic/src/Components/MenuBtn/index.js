import './styles.css'
import menuClosedBlack from '../../images/triangleOpenBlack.png';
import menuClosedWhite from '../../images/triangleOpenWhite.png'
import menuOpen from '../../images/triangle2.png';
import ThemeContext from '../../Contexts/ThemeContext'
import { useContext } from 'react'

function MenuBtn({showIcons}) {
    const {theme} = useContext(ThemeContext)
    // const themeNavStyling = theme + ' row fixed-bottom px-4 pt-4'

    const closed = () => {
        if(theme === 'cuttle') {
            return <img className="menuImg" src={menuClosedBlack}></img>
        } else if (theme === 'cuthbert') { 
            return <img className="menuImg" src={menuClosedWhite}></img>
        } else {
            return <img className="menuImg" src={menuClosedBlack}></img>
        }
    }

    const open = () => {
        if(theme === 'cuttle') {
            return <img className="menuImg" src={menuOpen}></img>
        } else if (theme === 'cuthbert') { 
            return 
        } else {
            return <img className="menuImg" src={menuOpen}></img>
        }
    }

    return (
        <div className="pointer">
            { showIcons ? open() : closed() }
        </div>
    )
}

export default MenuBtn

//if theme === 'cuthbert' display 1 