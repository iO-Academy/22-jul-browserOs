import {useState } from "react"
import React, { useEffect } from "react"
import './styles.css'
import ThemeContext from '../../Contexts/ThemeContext'
import { useContext } from 'react'

import fullScreenBlack from '../../images/fullScreenBlack.png'
import fullScreenWhite from '../../images/fullScreenWhite.png'
import reduceBlack from '../../images/reduceBlack.png'
import reduceWhite from '../../images/reduceWhite.png'

function FullScreen() {

    const {theme} = useContext(ThemeContext)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const fullScreenClick = (e) => {
        if(isFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false)

        } else {
            document.body.requestFullscreen()
            setIsFullscreen(true)
        }
    }

    const exitHandler = () => {
        if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            setIsFullscreen(false)
        }
    }
    
      useEffect(() => {
        if (document.addEventListener) {
            document.addEventListener('webkitfullscreenchange', exitHandler, false);
            document.addEventListener('mozfullscreenchange', exitHandler, false);
            document.addEventListener('fullscreenchange', exitHandler, false);
            document.addEventListener('MSFullscreenChange', exitHandler, false);
        }
      }, []);


    const expand = () => {
        if(theme === 'cuttle') {
            return <img className="fullScreenImg" onClick={fullScreenClick} id="expand" src={fullScreenBlack} alt="expand"></img>
        } else if (theme === 'cuthbert') { 
            return <img className="fullScreenImg" onClick={fullScreenClick} id="expand" src={fullScreenWhite} alt="expand"></img>
        } else {
            return <img className="fullScreenImg" onClick={fullScreenClick} id="expand" src={fullScreenBlack} alt="expand"></img>
        }
    }

    const reduce = () => {
        if(theme === 'cuttle') {
            return <img className="fullScreenImg" onClick={fullScreenClick} id="reduce" src={reduceBlack} alt="minimise"></img>
        } else if (theme === 'cuthbert') { 
            return <img className="fullScreenImg" onClick={fullScreenClick} id="reduce" src={reduceWhite} alt="minimise"></img>
        } else {
            return <img className="fullScreenImg" onClick={fullScreenClick} id="reduce" src={reduceBlack} alt="minimise"></img>
        }
    }

    return (
        <div className="pointer">
            { isFullscreen ? reduce() : expand() }
        </div>
    )
}

export default FullScreen