import AboutContent from "../AboutContent"
import './style.css'



function About({isDisplayed, setIsDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    return (
        <>
        
            <div className="card position-absolute about">
                <div className="row d-flex justify-content-center topBar">
                    <p>About</p>
                    <button onClick={handleAboutClick}>x</button>
                </div>
                <div>
                    <AboutContent />
                </div>
            
            </div>
            
    </>
    )
}

export default About