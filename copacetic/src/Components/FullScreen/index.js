import {useState } from "react"
import React, { useEffect } from "react";
import './styles.css'
import reduceImg from '../../images/focus.png'
import expandImg from '../../images/full-screen.png'

function FullScreen() {
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
        return <img onClick={fullScreenClick} id="expand" src={expandImg}></img>
    }

    const reduce = () => {
        return <img onClick={fullScreenClick} id="reduce" src={reduceImg}></img>
    }

    return (
        <div className="pointer">
            { isFullscreen ? reduce() : expand() }
        </div>
    )
}

export default FullScreen