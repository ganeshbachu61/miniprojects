import react, { useState } from 'react';

export const ToDo = () => {
   const [text,setText] = useState();
   const [toDo, setToDo] = useState([]);
   const AddTodo = () => {
    if (text) {
        setToDo([ ...toDo, {text}]);
        setText('');
    }
   }
   const toggleToDo = (index) => {
    const newToDos = [...toDo];
    newToDos[index].completed = !newToDos[index].completed;
    setToDo(newToDos);
   }
   const removeToDo = index => {
    const newToDos = [...toDo];
    newToDos.splice(index,1);
    setToDo(newToDos);
   }
    return(
        <div>
            <input type='text' placeholder='Type your Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={AddTodo}>Add</button>
            <div>
                {toDo.map((toDo,index)=>(
                <div key={index} style={{textDecoration:toDo.completed?'line-through':'none'}}>
                    {toDo.text}
                    <button onClick={()=>removeToDo(index)}>Remove</button>
                    <button onClick={()=>toggleToDo(index)}>Completed</button>
                </div>
                ))}
                
            </div>
            
        </div>
    )
}

export default ToDo;