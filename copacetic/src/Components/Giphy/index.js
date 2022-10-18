import Draggable from 'react-draggable';
import GetAGif from '../GetAGif';
import './style.css'

function box({isGifDisplayed, setIsGifDisplayed}) {

    const handleGifClick = () => {
        setIsGifDisplayed(!isGifDisplayed)
    }

    return (
        <>
        <Draggable handle=".handle">
            <div className="window">
                    <div className="buttons">
                        <div className="close">
                            <a onClick={handleGifClick} className="closebutton"><span><strong>x</strong></span></a>
                        </div>
                    </div>
                <div className="titlebar handle">
                    Giphy
                </div>
                <div className="no-cursor content">
                    <GetAGif />
                </div>
            </div> 
        </Draggable> 
    </>
    )
}

export default box

