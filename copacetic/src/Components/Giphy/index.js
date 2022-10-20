import GetAGif from '../GetAGif';
import './style.css'

function Giphy() {

    return (
        <img className="gif" src={GetAGif()}></img> 
    )
}

export default Giphy

