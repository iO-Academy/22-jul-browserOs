import AboutContent from "../AboutContent"
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";
import './style.css'

function About({isDisplayed, setIsDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }



    return (
        <>
            <Draggable handle=".handle">
                <div className="box">
                    <div className="handle topBar">
                        <p>About</p>
                        <button onClick={handleAboutClick}>x</button>
                    </div>
                    <div className="no-cursor">
                        <AboutContent />
                    </div>
                </div>
            </Draggable>
            
    </>
    )
}

export default About