import './styles.css'
import menuClosed from '../../images/triangle1.png';
import menuOpen from '../../images/triangle2.png';

function MenuBtn({showIcons}) {

    const closed = () => {
        return <img className="menuImg" src={menuClosed}></img>
    }

    const open = () => {
        return <img className="menuImg" src={menuOpen}></img>
    }

    return (
        <div className="pointer">
            { showIcons ? open() : closed() }
        </div>
    )
}

export default MenuBtn