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
                    <div className="d-flex no-cursor content">
                        <div class="d-flex flex-column">
                            <div class="pb-3 pointer">Cuttlefish</div>
                            <div class="pb-3 pointer">Title</div>
                        </div>   
                    </div>
                </div> 
            </Draggable> 
        </>
    )
}

export default Themes