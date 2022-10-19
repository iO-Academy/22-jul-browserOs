import AboutContent from "../AboutContent"
import Draggable from 'react-draggable';
import './style.css'
import { useState } from "react";

function About({currentlyActive, setCurrentlyActiveWindow, isDisplayed, setIsDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }


    let aboutClassName = 'window ' + (currentlyActive ? 'selected' : '')

    return (
        <>
            <Draggable handle=".handle" onMouseDown={() => setCurrentlyActiveWindow('about')}>
                <div className={aboutClassName} >
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