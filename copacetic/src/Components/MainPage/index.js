import { useState, useEffect } from "react"
import NavBar from "../NavBar"
import './styles.css';
import cuttlefish from '../../images/cuttlefish-image.png'
import About from "../About";

function MainPage() {

    const [isDisplayed, setIsDisplayed] = useState(false)

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }


    return (
        <>
        <div id="background">
            {isDisplayed &&
                <About 
                isDisplayed = {isDisplayed}
                setIsDisplayed = {setIsDisplayed}/>
            }
            <button onClick={handleAboutClick}>About</button>
                <img id="cuttlefishImg" src={cuttlefish} alt="cuttlefish logo" className="mx-auto img-fluid d-block"></img>
                <NavBar />
            </div>
        </>
    )
}

export default MainPage