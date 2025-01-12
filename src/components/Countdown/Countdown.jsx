import react, { useEffect, useState } from 'react'

const Countdown = ({initialSeconds}) => {
    const [seconds,setSeconds] = useState(initialSeconds)
    useEffect(() => {
        const timer = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds-1);
        },1000)
        return () => clearInterval(timer);
    },[])
    

    return(
        <div>
            <h1>Count Down</h1>
            <p>{seconds} seconds remaining</p>
        </div>
    )
}

const CountDownTimer = () => {
    return(
        <div>
            <Countdown initialSeconds={60}/>
        </div>
    )
}

export default CountDownTimer;