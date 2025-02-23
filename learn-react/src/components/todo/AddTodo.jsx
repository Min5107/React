import { useState } from 'react';
import { useTodos, useTodosDispatch } from '../../context/TodoContext';


function AddTodo() {
        const [todoText, setTodoText] = useState('');
        const todos = useTodos();
        const dispatch = useTodosDispatch();
        // 1] added
    const handleAddTodo = (text) =>{
        dispatch({
            type: 'added',
            nextId: todos.length,
            todoText:text
        });
    }
    return (
        <div>
            <input type='text' value={todoText} onChange={(e) => setTodoText(e.target.value)} onKeyDown={()=>{
                //if(e.key === 'Enter' && e.nativeEvent.isComposing === false)
                    if(e.key === 'Enter' && e.nativeEvent.isComposing === false){
                        handleAddTodo(e.target.value);
                    setTodoText('');
                }
            }}/>
            <button onClick={() => {
                // 저장
                setTodoText('');
                handleAddTodo(todoText);
            }}>추가</button>
            </div>
    );
}

export default AddTodo;