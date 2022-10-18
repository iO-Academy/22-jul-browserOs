import AboutContent from "../AboutContent"
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";
import './style.css'

function About({isDisplayed, setIsDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "#f0f0f0"
      };

    return (
        <>
            {/* <Draggable> */}
            <Resizable
            style={style}
            defaultSize={{ width:320, height:200 }} >
                <div className="test">
                        <p>About</p>
                        <button onClick={handleAboutClick}>x</button>
                    </div>
                    <div className="no-cursor">
                        <AboutContent />
                    </div>
                </Resizable>
            {/* </Draggable>
             */}
    </>
    )
}

export default About