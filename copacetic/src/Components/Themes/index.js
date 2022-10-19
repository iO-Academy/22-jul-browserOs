import Draggable from 'react-draggable';
import './style.css'
import ThemeContext from "../../Contexts/ThemeContext";

function Themes({isThemeDisplayed, setIsThemeDisplayed, setTheme}) {

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
                            <div onClick={()=>setTheme('cuttle')} className="col-12 pointer border-bottom">
                                <p className="fw-bolder">Cuttlefish</p>
                            </div>
                            <div onClick={()=>setTheme('cuthbert')} className="fw-bold col-12 pt-3 pointer border-bottom">
                                <p className="fw-bolder">Theme 2</p>
                            </div>
                    </div>
                </div> 
            </Draggable> 
        </>
    )
}

export default Themes