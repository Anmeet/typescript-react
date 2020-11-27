import React,{useState} from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import {Todo} from './../todo.model';


const App:React.FC = () => {
  const [todos,setTodos] = useState<Todo[]>([]);

  const addTodo = (text:string) => {
    setTodos(prevTodos =>[...prevTodos,{id: Math.random().toString(), text: text}]);
  }

  const todoDelete = (todoId: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== todoId);
      })
  }


  return <div className="App">
    <NewTodo onAddtodo = {addTodo} />
  <TodoList items = {todos} ondeleteTodo = {todoDelete}/>
  </div>
}

export default App;
