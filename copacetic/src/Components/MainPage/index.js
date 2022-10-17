import NavBar from "../NavBar"
import './styles.css';
// import '../../../images'
import cuttlefish from '../../images/cuttlefish-image.png'
function MainPage() {

    return (
        <>
        <img src={cuttlefish} alt="cuttlefish logo" className="mx-auto img-fluid d-block"></img>
        <NavBar />
        </>
    )
}

export default MainPage