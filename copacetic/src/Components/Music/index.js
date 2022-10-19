import ReactPlayer from "react-player"

function Music({currentlyActive, setCurrentlyActiveWindow, isDisplayed, setIsDisplayed}) {

    return (
        <>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
                volume={0.2}
            />
        </>
    )
}

export default Music

