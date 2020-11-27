import React,{useRef} from 'react';

type NewTodoProps = {
    onAddtodo : (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  
    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredtext = textInputRef.current!.value;
        props.onAddtodo(enteredtext);

    }

    return (
      <form onSubmit={submitHandler}>
          <div>
              <label htmlFor='todo-text'>Todo Text</label>
              <input type='text' id='todo-text' ref={textInputRef}/>
              
          </div>
          <button type = 'submit'>Add Todo</button>
      </form>
    )
}

export default NewTodo;

