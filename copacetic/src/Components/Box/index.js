import Draggable from 'react-draggable';
import './style.css'

const Box = ({children, currentlyActive, setCurrentlyActiveWindow, isDisplayed, setIsDisplayed, isWindowTitle, setTheme}) => {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    let aboutClassName = 'window ' + (currentlyActive ? 'selected' : '')

    return (
        <>
            <Draggable handle=".handle" onMouseDown={() => setCurrentlyActiveWindow(isWindowTitle)}>
                <div className={aboutClassName} >
                        <div className="buttons">
                            <div className="close">
                                <a onClick={handleAboutClick} className="closebutton"><span><strong>x</strong></span></a>
                            </div>
                        </div>
                    <div className="titlebar handle">
                        {isWindowTitle}
                    </div>
                    <div className="no-cursor content">
                        {children}
                    </div>
                </div> 
            </Draggable>
        </>
    )
}

export default Box