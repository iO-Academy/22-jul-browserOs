import { useState, useEffect } from 'react'
import './style.css'
import ThemeContext from '../../Contexts/ThemeContext'
import { useContext } from 'react'

function Clock() {

    const {theme} = useContext(ThemeContext)
    const themeClockStyling = theme + ' clock blockquote'

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    return (
        <>  
            <p className={themeClockStyling}> {date.toLocaleTimeString()} </p>
        </>
    )
}

export default Clock