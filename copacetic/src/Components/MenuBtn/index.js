import './styles.css'
import ThemeContext from '../../Contexts/ThemeContext'
import { useContext } from 'react'
import menuClosedBlack from '../../images/triangleClosedBlack.png';
import menuClosedWhite from '../../images/triangleClosedWhite.png'; 
import menuOpenBlack from '../../images/triangleOpenBlack.png'; 
import menuOpenWhite from '../../images/triangleOpenWhite.png'

function MenuBtn({showIcons}) {
    const {theme} = useContext(ThemeContext)

    const closed = () => {
        if(theme === 'cuttle') {
            return <img className="menuImg" src={menuClosedBlack} alt="Menu"></img>
        } else if (theme === 'cuthbert') { 
            return <img className="menuImg" src={menuClosedWhite} alt="Menu"></img>
        } else {
            return <img className="menuImg" src={menuClosedBlack} alt="Menu"></img>
        }
    }

    const open = () => {
        if(theme === 'cuttle') {
            return <img className="menuImg" src={menuOpenBlack} alt="Menu"></img>
        } else if (theme === 'cuthbert') { 
            return <img className="menuImg" src={menuOpenWhite} alt="Menu"></img>
        } else {
            return <img className="menuImg" src={menuOpenBlack} alt="Menu"></img>
        }
    }

    return (
        <div className="pointer">
            { showIcons ? open() : closed() }
        </div>
    )
}

export default MenuBtn