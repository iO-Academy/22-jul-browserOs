import Draggable from 'react-draggable';
import './style.css'

function Themes({isThemeDisplayed, setIsThemeDisplayed}) {

    const handleThemeClick = () => {
        setIsThemeDisplayed(!isThemeDisplayed)
    }

    return (
        <>
            <Draggable handle=".handle">
                <div className="window">
                        <div className="buttons">
                            <div className="close">
                                <a onClick={handleThemeClick} className="closebutton"><span><strong>x</strong></span></a>
                            </div>
                        </div>
                    <div className="titlebar handle">
                        Themes
                    </div>
                    <div className="no-cursor content">
                        <ul>
                            <li>Theme 1</li>
                            <li>Theme 2</li>
                        </ul>
                    </div>
                </div> 
            </Draggable> 
        </>
    )
}

export default Themes