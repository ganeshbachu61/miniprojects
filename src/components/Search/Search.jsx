import react, { useState } from 'react';

const Search = ({items}) => {
    const [query, setQuery] = useState('');
    const filterItems = items.filter(items => items.toLowerCase().includes(query.toLowerCase()));
    return (
        <div>
            <h1>Mini Search Items</h1>
            <input type='text' placeholder='Search your fruit' value={query} onChange={(e) => setQuery(e.target.value)}/>
            {filterItems.map((item,index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

const AppItems = () => {

    const arrayItems = ['Apples','Oranges','Watermelon','Pappay','Pineapple'];
    return <Search items={arrayItems}/>

}
export default AppItems;