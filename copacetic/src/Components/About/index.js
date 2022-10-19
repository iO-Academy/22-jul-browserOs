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
            <AboutContent />
        </>
    )
}

export default About