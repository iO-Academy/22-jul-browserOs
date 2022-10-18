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
        <div className="pointer">
            { showIcons ? open() : closed() }
        </div>
    )
}

export default MenuBtn