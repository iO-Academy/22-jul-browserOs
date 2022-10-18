import Clock from "../Clock"
import FullScreen from "../FullScreen"
import MenuBtn from "../MenuBtn"
import './style.css'

function NavBar({showIcons, setShowIcons}) {

    return (
        <>
            <div className="row fixed-bottom px-4">
                <div className="col-4 d-flex justify-content-start">
                <FullScreen />
                </div>
                <div className="col-4 d-flex justify-content-center"onClick={()=> setShowIcons(!showIcons)}>
                    <MenuBtn 
                    showIcons={showIcons}/>
                </div>
                <div className="col-4 d-flex justify-content-end"><Clock /></div>
            </div>
        </>
    )
}

export default NavBar