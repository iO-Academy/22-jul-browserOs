import Emily from '../../images/emily.png'
import Joe from '../../images/joe.jpeg'
import Josh from '../../images/josh.jpeg'
import './style.css'

function AboutContent() {

    return (

        <div className="contentBox"> 
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h3 className='bold'>Cuttle OS</h3>
                </div>
                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3 bold">Emily</p>
                        <a href="https://github.com/erc-clarkson" className="m-3">Github</a>
                    </div>
                    <div>
                        <img src={Emily} className="profilePic"></img>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3 bold">Joe</p>
                        <a href="https://github.com/Jdixon04" className="m-3">Github</a>
                    </div>
                    <div>
                        <img src={Joe} className="profilePic"></img>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3 bold">Josh</p>
                        <a href="https://github.com/josh-lew" className="m-3">Github</a>
                    </div>
                    <div>
                        <img src={Josh} className="profilePic"></img>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <h5 className='bold'>Credits:</h5>
                    <p className="wrap">We are a group of Fullstack devs who wanted to show our front end skills. We hope you enjoy our browser OS!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutContent