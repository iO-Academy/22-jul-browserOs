import Draggable from 'react-draggable';
import './style.css'

function Themes({isThemeDisplayed, setIsThemeDisplayed}) {

    const handleThemeClick = () => {
        setIsThemeDisplayed(!isThemeDisplayed)
    }

    //Click event 
    //when theme 2 is clicked: background needs to change. 

    const handleTheme2Click = () => {
        // setIsThemeDisplayed(!isThemeDisplayed)
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
                            <div className="col-12 pb-3 pointer border-bottom">Cuttlefish</div>
                            <div onClick={handleTheme2Click} className="col-12 py-3 pointer border-bottom">Theme 2</div>
                    </div>
                </div> 
            </Draggable> 
        </>
    )
}

export default Themes