import Clock from "../Clock"
import FullScreen from "../FullScreen"
import MenuBtn from "../MenuBtn"
import './style.css'

function NavBar() {

    return (
        <>
            <section className="container">
                <div className="row navbar justify-content-between fixed-bottom px-5">
                    <div><FullScreen /></div>
                    <div><MenuBtn /></div>
                    <div><Clock /></div>
                </div>
            </section>
        </>
    )
}

export default NavBar