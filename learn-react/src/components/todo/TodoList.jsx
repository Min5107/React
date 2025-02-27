import TodoItem from './TodoItem';
import {useTodos} from '../../context/TodoContext';
import { useMemo, useState } from 'react';

function TodoList() {
    const todos = useTodos()
    const [isDone, setIsDone] = useState(false)
    const getFilteredTodos =() => {
        if(!isDone){
            return todos;
        }
        return todos.filter((todo) => todo.done)
    }
    const filteredTodos = getFilteredTodos();
    const getStatsCount = ()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.done).length
        return{
            totalCount,
            doneCount
        }
    }
    const {totalCount, doneCount} = useMemo(()=> getStatsCount(), [todos]);
    return (
        <>
        <div>
            <input id="isDone" type='checkbox' checked={isDone} onChange={(e)=>setIsDone(e.target.checked)}/>
            <label htmlFor='isDOne'>완료된 항목 보기({doneCount}/{totalCount})</label>
        </div>
        <ul>
            {filteredTodos.map(items => (
                <li key={items.id}> 
                <TodoItem 
                items = {items} />
                </li>
            ))}
        </ul>
        </>
    );
}

export default TodoList;