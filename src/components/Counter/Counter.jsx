import react, { useState } from 'react'

const Counter = () => {
    const [data,setData] = useState(0);
    const [toggle,setToggle] = useState(false);
    return(
        <div>
            <h1>Counter Project</h1>
            <p>Counter:{data}</p>
            <button onClick={()=> setData(data+1)}>Increment</button>
            <button onClick={()=> setData(data-1)}>Decrement</button>
            <h1>Toggle Switch</h1>
            <button onClick={()=>setToggle(!toggle)}>
                {toggle?'on':'off'}
            </button>
        </div>
    )
}

export default Counter;