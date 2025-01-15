import react, { use, useState } from 'react';
const ToDo = () => {
    const [text,setText] = useState('');
    const [toDo, setToDo] = useState([]);
    const addToDo = () => {
        if(text){
            setToDo([...toDo, {text}]);
            setText('');
        }

    }
    const completedToDo = (index) => {
        const newToDo = [...toDo];
        newToDo[index].completed = !newToDo[index].completed;
        setToDo(newToDo);

    }
    const removeToDo = (index) => {
        const newToDo = [...toDo];
        newToDo.splice(index,1);
        setToDo(newToDo);
    }
    return (
        <div>
            <h1>ToDo List</h1>
            <input type='text' placeholder='Enter your Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addToDo}>Add Task</button>
            {toDo.map((toDo,index)=>(
                <div key={index} style={{textDecoration:toDo.completed?'line-through':'none'}}>
                    {toDo.text}
                    <button onClick={()=>completedToDo(index)}>completed</button>
                    <button onClick={()=>removeToDo(index)}>remove</button>
                </div>
            ))}
        </div>
    )
}
export default ToDo;