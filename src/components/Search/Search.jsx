import react, { useState } from 'react'

const Search = ({items}) => {
    const [query,setQuery] = useState('');
    const filterItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <div>
            <h1>Search Filter</h1>
            <input type='text' placeholder='search' value={query} onChange={(e) => setQuery(e.target.value)}/>
            {filterItems.map((item,index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

const AppItems = () => {
    const arrayItems = ['Apple','Pineapple','Watermelon','Sapota'];
    return <Search items={arrayItems}/>
}
export default AppItems;