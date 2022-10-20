import Draggable from 'react-draggable';
import './style.css'
import ThemeContext from "../../Contexts/ThemeContext";

function Themes({isThemeDisplayed, setIsThemeDisplayed, setTheme}) {

    const handleThemeClick = () => {
        setIsThemeDisplayed(!isThemeDisplayed)
    }

    return (
        <>
            <button onClick={()=>setTheme('cuttle')} className="btn cuttleBtn col-12 text-white pointer my-3">Cuttlefish</button>
            <button onClick={()=>setTheme('cuthbert')} className="btn cuthBtn fw-bold col-12 text-white pointer my-3">Cuthbert</button>
        </>
    )
}

export default Themes