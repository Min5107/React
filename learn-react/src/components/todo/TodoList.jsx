import React from 'react';

function TodoList({onToggleTodo, onDeleteTodo, todos = []}) {
    return (
        <ul>
            {todos.map(items => (
                <li key={items.id}> 
                <input type='checkbox' checked={items.done} onChange={(e) => onToggleTodo(items.id, e.target.checked)}/>
                <span>{items.done ? (<del>{items.text}</del>) : items.text}</span> 
                <button onClick={() => onDeleteTodo(items.id)}>X</button></li>
            ))}
        </ul>
    );
}

export default TodoList;