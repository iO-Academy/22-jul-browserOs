import NavBar from "../NavBar"
import './styles.css';
import cuttlefish from '../../images/cuttlefish-image.png'
import Icons from "../Icons";

function MainPage() {

    return (
        <>
        <img id="cuttlefishImg" src={cuttlefish} alt="cuttlefish logo" className="mx-auto bg-image img-fluid d-block"></img>
        <Icons />

        <NavBar />
        </>
    )
}

export default MainPage