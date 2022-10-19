import './styles.css'
function Icons({isDisplayed, setIsDisplayed, isThemeDisplayed, setIsThemeDisplayed, themeIconStyling}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    const handleThemeClick = () => {
        setIsThemeDisplayed(!isThemeDisplayed)
    }

    return (
        <div className="container d-flex p-2 justify-content-center fixed-bottom mb-6">
            {/* <div className="row justify-content-center d-flex p-2" > */}
                    <div onClick={handleAboutClick} className={themeIconStyling}>
                        <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">A</h1>
                        <p className="text-center">About</p>
                    </div>
                    <div onClick={handleThemeClick} className={themeIconStyling}>
                        <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">T</h1>
                        <p className="text-center">Themes</p>
                    </div>
                    <div className={themeIconStyling}>
                        <h1 className="text-center mb-0 px-3 font-weight-bold mt-1">G</h1>
                        <p className="text-center">Giphy</p>
                    </div>
            {/* </div> */}
        </div>
    )
}

export default Icons