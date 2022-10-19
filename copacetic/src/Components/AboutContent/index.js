import Emily from '../../images/emily.png'
import Joe from '../../images/joe.jpeg'
import Josh from '../../images/josh.jpeg'
import './style.css'

function AboutContent() {


    return (
    
        <div className="contentBox"> 
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h3>Copacetic</h3>
                </div>
                
                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3">Emily</p>
                    </div>
                    <div>
                        <img src={Emily} className="profilePic"></img>
                    </div>
                </div>
                
                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3">Joe</p>
                    </div>
                    <div>
                        <img src={Joe} className="profilePic"></img>
                    </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3">Josh</p>
                    </div>
                    <div>
                        <img src={Josh} className="profilePic"></img>
                    </div>
                </div>
                <h5>Credits:</h5>
                <p>Filler Text as we are a wee undecisive little group lolz</p>
            </div>
        </div>
    )
}

export default AboutContent