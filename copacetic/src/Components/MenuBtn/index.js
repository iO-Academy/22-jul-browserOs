import './style.css';
import menuClosed from '../../images/triangle1.png';
import menuOpen from '../../images/triangle2.png';

function MenuBtn({showIcons}) {

    const closed = () => {
        return <img src={menuClosed}></img>
    }

    const open = () => {
        return <img src={menuOpen}></img>
    }

    return (
        <>
            { showIcons ? open() : closed() }
        </>
    )
}

export default MenuBtn