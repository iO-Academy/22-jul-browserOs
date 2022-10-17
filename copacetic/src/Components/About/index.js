import AboutContent from "../AboutContent"
import Draggable from 'react-draggable';
import './style.css'



function About({isDisplayed, setIsDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }



    return (
        <>
            <Draggable>
                <div className="card position-absolute about no-cursor" id="about">
                    <div className="cursor row d-flex justify-content-center topBar">
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