import { useState, useEffect } from 'react'
import './style.css'

function Clock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    return (
        <>  
            <p className="clock blockquote"> {date.toLocaleTimeString()} </p>
        </>
    )
}

export default Clock