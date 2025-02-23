import { useTodosDispatch } from '../../context/TodoContext';

function TodoItem({items}) {
    const dispatch = useTodosDispatch();

    // 3] deleted
    const handleDeleteTodo = (deleteId) => {
        dispatch({
            type:'deleted',
            deleteId

        })
    }
      // 4] 'done'
    const handleToggleTodo = (id, done) => {
        // 기존 배열 안의 객체 속성을 변경
        dispatch({
            type:'done',
            id,
            done
        })
    }

    return (
        <label>
        <input type='checkbox' checked={items.done} onChange={(e) => handleToggleTodo(items.id, e.target.checked)}/>
                <span>{items.done ? (<del>{items.text}</del>) : items.text}</span> 
                <button onClick={() => handleDeleteTodo(items.id)}>X</button>
        </label>
    );
}

export default TodoItem;