import { useState } from "react"

function FullScreen() {
    const [isFullscreen, setIsFullscreen] = useState(false)

    const fullScreenClick = () => {
        if(isFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false)
        } else {
            document.body.requestFullscreen()
            setIsFullscreen(true)
        }
    }

    return (
        <>
            <svg onClick={fullScreenClick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M21.414 18.586l2.586-2.586v8h-8l2.586-2.586-5.172-5.172 2.828-2.828 5.172 5.172zm-13.656-8l2.828-2.828-5.172-5.172 2.586-2.586h-8v8l2.586-2.586 5.172 5.172zm10.828-8l-2.586-2.586h8v8l-2.586-2.586-5.172 5.172-2.828-2.828 5.172-5.172zm-8 13.656l-2.828-2.828-5.172 5.172-2.586-2.586v8h8l-2.586-2.586 5.172-5.172z"/></svg>
        </>
    )
}

export default FullScreen