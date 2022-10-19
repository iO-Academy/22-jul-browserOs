import './styles.css'

function Icons({isDisplayed, setIsDisplayed, isGifDisplayed, setIsGifDisplayed, isMusicDisplayed, setIsMusicDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    const handleGifClick = () => {
        console.log('clicked')
        setIsGifDisplayed(!isGifDisplayed)
    }

    const handleMusicClick = () => {
        console.log('clicked')
        setIsMusicDisplayed(!isMusicDisplayed)
    }

    return (
        <div className="container d-flex p-2 justify-content-center fixed-bottom mb-6">
            <div className="row justify-content-center d-flex p-2" >
                    <div onClick={handleAboutClick} className="iconBackground col border rounded m-3 pointer">
                        <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">A</h1>
                        <p className="text-center">About</p>
                    </div>
                    <div className="iconBackground col border rounded m-3 pointer">
                        <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">T</h1>
                        <p className="text-center">Themes</p>
                    </div>
                    <div onClick={handleGifClick} className="iconBackground col border rounded m-3 pointer">
                        <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">G</h1>
                        <p className="text-center">Giphy</p>
                    </div>
                    <div onClick={handleMusicClick} className="iconBackground col border rounded m-3 pointer">
                        <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">M</h1>
                        <p className="text-center">Music</p>
                    </div>
            </div>
        </div>
    )
}

export default Icons