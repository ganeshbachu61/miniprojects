import react, { useEffect, useState } from 'react';
import './FetchApi.css'

const DataFetch = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setUsers(users)});
    })
    return(
        <div>
            <h1>Data Fetching</h1>
            <div>
                {users.map(item => (
                    <div key={item.id}>
                        <div className='grid'>
                            <div className='item'>{item.name}</div>
                            <div className='item'>{item.username}</div>
                            <div className='item'>{item.email}</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default DataFetch;