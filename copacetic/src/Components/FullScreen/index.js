import { useState } from "react"
import './styles.css'
import reduceImg from '../../images/focus.png'
import expandImg from '../../images/full-screen.png'

function FullScreen() {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [displayIcon, setDisplayIcon] = useState(true)

    const fullScreenClick = () => {
        if(isFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false)
            setDisplayIcon(true)
        } else {
            document.body.requestFullscreen()
            setIsFullscreen(true)
            setDisplayIcon(false)
        }
    }

    const expand = () => {
        return <img onClick={fullScreenClick} id="expand" src={expandImg}></img>
    }

    const reduce = () => {
        return <img onClick={fullScreenClick} id="reduce" src={reduceImg}></img>
    }

    return (
        <>
            { displayIcon ? expand() : reduce() }
        </>
    )
}

export default FullScreen