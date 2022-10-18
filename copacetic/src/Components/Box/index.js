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
                    <div className="buttons">
                        <div className="close">
                            <a onClick=
                            // insert relavent onclick
                            {handleAboutClick} 
                            // insert above
                            className="closebutton"><span><strong>x</strong></span></a>
                        </div>
                    </div>
                <div className="titlebar handle">
                    About
                </div>
                <div className="no-cursor content">
                    {/* [insert content] */}
                </div>
            </div> 
        </Draggable> 
    </>
    )
}

export default box