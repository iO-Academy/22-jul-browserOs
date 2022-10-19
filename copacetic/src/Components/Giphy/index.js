import Draggable from 'react-draggable';
import GetAGif from '../GetAGif';
import './style.css'

function Giphy({currentlyActive, setCurrentlyActiveWindow, isGifDisplayed, setIsGifDisplayed}) {

    const handleGifClick = () => {
        setIsGifDisplayed(!isGifDisplayed)
    }

    let aboutClassName = 'window ' + (currentlyActive ? 'selected' : '')

    return (
        <>
            <img src={GetAGif()}></img> 
        </>
    )
}

export default Giphy

