import Draggable from 'react-draggable';
import './style.css'

function box({isDisplayed, setIsDisplayed}) {

    // const handle[insert box name ]Click = () => {
    //     setIsDisplayed(!isDisplayed)
    // }

    return (
        <>
            <Draggable handle=".handle">
                <div className="window">
                    <div className="titlebar handle">
                        <div className="buttons">
                            <div className="close">
                                {/* update about click below for actual box */}
                                <a onClick={handleAboutClick} className="closebutton"><span><strong>x</strong></span></a>
                                {/* update above */}
                            </div>
                        </div>
                        About
                    </div>
                    <div className="no-cursor content">
                        {/* insert content */}
                    </div>
                </div> 
            </Draggable>  
        </>
    )
}

export default box