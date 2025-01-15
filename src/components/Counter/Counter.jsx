import react, { useState } from 'react'

const Counter = () => {
    const [data,setData] = useState(0);
    return (
        <div>
            <h1>Counter Project</h1>
            <p>Counter:{data}</p>
            {/* increment and decrement logic */}
            <button onClick={()=>setData(data+1)}>Increment</button>
            <button onClick={()=>setData(data-1)}>Decrement</button>
        </div>
    )
}

export default Counter;