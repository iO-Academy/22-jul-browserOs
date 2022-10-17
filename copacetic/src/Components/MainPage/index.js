import NavBar from "../NavBar"
import './styles.css';
import cuttlefish from '../../images/cuttlefish-image.png'

function MainPage() {

    return (
        <>
        <div id="background">
        <img id="cuttlefishImg" src={cuttlefish} alt="cuttlefish logo" className="mx-auto img-fluid d-block"></img>
        <NavBar />
        </div>
        </>
    )
}

export default MainPage