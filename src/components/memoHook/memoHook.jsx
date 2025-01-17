import React, { useMemo, useState } from 'react'

const MemoHook = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);
    const Factorial = useMemo(()=>fact(number),[number]);
    return (
        <div>
            <h2>useMemo Hook</h2>
            <p>It is help us to improve the performance of application, when we are performing most expensive fuction</p>
            <p>Factorial Value: {Factorial}</p>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setNumber(number+1)}>Factorial Value</button>
            <p>Counter: {counter}</p>
        </div>
    )
}

const fact = (n) => {
    let answer = 1;
    for(var i=n; i>=1; i--){
        answer = answer*i;
    }
    console.log("Factorial Calling");
    return answer;
}
export default MemoHook;

