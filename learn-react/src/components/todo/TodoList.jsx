import TodoItem from './TodoItem';
import {useTodos} from '../../context/TodoContext';

function TodoList() {
    const todos = useTodos()
    return (
        <ul>
            {todos.map(items => (
                <li key={items.id}> 
                <TodoItem 
                items = {items} />
                </li>
            ))}
        </ul>
    );
}

export default TodoList;