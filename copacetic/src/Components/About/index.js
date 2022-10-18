import AboutContent from "../AboutContent"
import Draggable from 'react-draggable';
import './style.css'

function About({isDisplayed, setIsDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    return (
        <>
            <Draggable handle=".handle">
                <div className="window">
                        <div className="buttons">
                            <div className="close">
                                <a onClick={handleAboutClick} className="closebutton"><span><strong>x</strong></span></a>
                            </div>
                        </div>
                    <div className="titlebar handle">
                        About
                    </div>
                    <div className="no-cursor content">
                        <AboutContent />
                    </div>
                </div> 
            </Draggable> 
        </>
    )
}

export default About