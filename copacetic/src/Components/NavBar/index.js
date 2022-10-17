import Clock from "../Clock"
import FullScreen from "../FullScreen"
import MenuBtn from "../MenuBtn"
import './style.css'

function NavBar() {

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="navbar fixed-bottom d-flex justify-content-between">
                    <FullScreen />
                    <MenuBtn />
                    <Clock />
                    </div>
                </div> 
            </section>
        </>
    )
}

export default NavBar