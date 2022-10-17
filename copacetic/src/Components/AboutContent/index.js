

function AboutContent() {

    return (
    
        <div className="content"> 
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1>About</h1>
                </div>
                <div className="row d-flex justify-content-center">
                    <h3>Copacetic</h3>
                </div>
                
                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3">Emily</p>
                    </div>
                    <div>
                        <img src="../../images/emily.png" className="profilePic"></img>
                    </div>
                </div>
                
                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3">Joe</p>
                    </div>
                    <div>
                        <img src="../../images/joe.jpeg" className="profilePic"></img>
                    </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center py-3">
                    <div>
                        <p className="px-3">Josh</p>
                    </div>
                    <div>
                        <img src="../../images/josh.jpeg" className="profilePic"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent