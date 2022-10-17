import Clock from "../Clock"
import FullScreen from "../FullScreen"
import MenuBtn from "../MenuBtn"
import './style.css'

function NavBar() {

    return (
        <>
            <section className="container">
                <div className="row navbar justify-content-between fixed-bottom px-4">
                    <div className="">
                    <FullScreen />
                    </div>
                    <div className="">
                    <MenuBtn />
                    </div>
                    <div className="">
                    <Clock />
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavBar