function Icons({isDisplayed, setIsDisplayed}) {

    const handleAboutClick = () => {
        setIsDisplayed(!isDisplayed)
    }

    return (
        <>
        <div className="container d-flex p-2 justify-content-center pb-5">
            <div className="row justify-content-center d-flex p-2" >
                    <div onClick={handleAboutClick} className="col border rounded m-3">
                        <h1 className="text-center mb-0 px-3 font-weight-bold">A</h1>
                        <p className="text-center">About</p>
                    </div>
                    <div className="col border rounded m-3">
                        <h1 className="text-center mb-0 px-3 font-weight-bold">T</h1>
                        <p className="text-center">Themes</p>
                    </div>
                    <div className="col border rounded m-3">
                        <h1 className="text-center mb-0 px-3 font-weight-bold">G</h1>
                        <p className="text-center">Giphy</p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Icons