import Draggable from 'react-draggable';
import GetAGif from '../GetAGif';
import './style.css'

function box({currentlyActive, setCurrentlyActiveWindow, isGifDisplayed, setIsGifDisplayed}) {

    const handleGifClick = () => {
        setIsGifDisplayed(!isGifDisplayed)
    }

    let aboutClassName = 'window ' + (currentlyActive ? 'selected' : '')

    return (
        <>
        <Draggable handle=".handle" onMouseDown={() => setCurrentlyActiveWindow('giphy')}>
            <div className={aboutClassName} >
                    <div className="buttons">
                        <div className="close">
                            <a onClick={handleGifClick} className="closebutton"><span><strong>x</strong></span></a>
                        </div>
                    </div>
                <div className="titlebar handle">
                    Giphy
                </div>
                <div className="no-cursor content">
                    <img src={GetAGif()}></img>
                </div>
            </div> 
        </Draggable> 
    </>
    )
}

export default box

