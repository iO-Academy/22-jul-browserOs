import './styles.css'
import ThemeContext from '../../Contexts/ThemeContext'
import { useContext } from 'react'
  
    
function Icons({
    isDisplayed, setIsDisplayed, 
    isGifDisplayed, setIsGifDisplayed, 
    isMusicDisplayed, setIsMusicDisplayed, 
    isQuotleDisplayed, setIsQuotleDisplayed, 
    isThemeDisplayed, setIsThemeDisplayed, 
    isBisquidsDisplayed, setIsBisquidsDisplayed}) {
        
    const {theme} = useContext(ThemeContext)
    const themeIconStyling = theme + ' overlay col border rounded m-3 pointer'

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    const handleThemeClick = () => {
        setIsThemeDisplayed(!isThemeDisplayed)
    }

    const handleGifClick = () => {
        setIsGifDisplayed(!isGifDisplayed)
    }

    const handleMusicClick = () => {
        setIsMusicDisplayed(!isMusicDisplayed)
    }

    const handleQuotleClick = () => {
        setIsQuotleDisplayed(!isQuotleDisplayed)
    }

    const handleBisquidsClick = () => {
        setIsBisquidsDisplayed(!isBisquidsDisplayed)
    }

    return (
        <div className="container d-flex p-2 justify-content-center fixed-bottom mb-6">
            <div className="row-3 justify-content-center flex-wrap d-flex p-2" >
                <div onClick={handleAboutClick} className={themeIconStyling}>
                    <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">A</h1>
                    <p className="text-center">About</p>
                </div>
                <div onClick={handleThemeClick} className={themeIconStyling}>
                    <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">T</h1>
                    <p className="text-center">Themes</p>
                </div>
                <div onClick={handleGifClick} className={themeIconStyling}>
                    <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">G</h1>
                    <p className="text-center">Giphy</p>
                </div>
                <div onClick={handleMusicClick} className={themeIconStyling}>
                    <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">L</h1>
                    <p className="text-center">LoFi</p>
                </div>
                <div onClick={handleQuotleClick} className={themeIconStyling}>
                    <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">Q</h1>
                    <p className="text-center">Quotlefish</p>
                </div>
                <div onClick={handleBisquidsClick} className={themeIconStyling}>
                    <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">B</h1>
                    <p className="text-center">Bisquids</p>
                </div>
            </div>
        </div>
    )
}

export default Icons