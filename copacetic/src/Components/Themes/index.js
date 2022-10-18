import Draggable from 'react-draggable';
import './style.css'

function Themes({isThemeDisplayed, setIsThemeDisplayed}) {

    const handleThemeClick = () => {
        setIsThemeDisplayed(!isThemeDisplayed)
    }

    //Click event 
    //when theme 2 is clicked: background needs to change. 

    const handleCuttleClick = () => {
        document.body.setAttribute("data-theme", "cuttleFish")
    }

    const handleTheme2Click = () => {
        document.body.setAttribute("data-theme", "theme2")
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
                            <div onClick={handleCuttleClick} className="col-12 pointer border-bottom">
                                <p className="fw-bolder">Cuttlefish</p>
                            </div>
                            <div onClick={handleTheme2Click} className="fw-bold col-12 pt-3 pointer border-bottom">
                                <p className="fw-bolder">Theme 2</p>
                            </div>
                    </div>
                </div> 
            </Draggable> 
        </>
    )
}

export default Themes