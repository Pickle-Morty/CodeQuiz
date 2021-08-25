import { useEffect, useState } from "react"

const Timer = ({ seconds, timerStatus, setTimerStatus, onRfreshTimer, switchQuestion }) => {
    let [time, setTime] = useState(seconds)
 
    useEffect(() => {
        if (timerStatus === "active") {
           if (time > 1){
            setTimeout(() => setTime((prev) => prev - 1), 1000)
            return
           }
           else {
            switchQuestion ()
            setTime(0)
           }
        }
        else {
            setTime(seconds)
            setTimerStatus("active")
        }
    }, [time])
    return (
        <span>{time}</span>
    )
}

export default Timer