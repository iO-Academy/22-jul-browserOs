import AboutContent from "../AboutContent"
import Draggable from 'react-draggable';
import './style.css'
import { useState } from "react";

function About({currentlyActive, setCurrentlyActiveWindow, isDisplayed, setIsDisplayed}) {


    return (
        <>
            <AboutContent />
        </>
    )
}

export default About