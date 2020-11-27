import React from 'react';

interface TodoListprops  {
    items: {id: string, text: string}[];
    ondeleteTodo : (id: string) => void;
};

const TodoList: React.FC<TodoListprops> = (props) => {


    return (
        <ul>
            {props.items.map(todo => <li key ={todo.id}>
                <span>{todo.text}</span>
                <button onClick = {props.ondeleteTodo.bind(null,todo.id)}>Delete</button></li>)}
        </ul>
    )
}

export default TodoList
