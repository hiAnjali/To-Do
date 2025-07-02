import { useEffect, useRef, useState } from 'react';
import './CSS/ToDo.css';
import ToDoItem from './ToDoItem';


let count = 0;
const ToDo = () => {

    const [todo, setToDo] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setToDo([...todo,{no : count++,text : inputRef.current.value,display : ""}]);
        inputRef.current.value = "";
        localStorage.setItem("todo_count",count)
    }

    useEffect(() => {
        setToDo(JSON.parse(localStorage.getItem("todo")));
        count = localStorage.getItem("todo_count");
    },[]);

    useEffect(() => {
        setTimeout(() => {
            console.log(todo);
            localStorage.setItem("todo",JSON.stringify(todo));
        },100);
        
    },[todo]);

  return (
    <div className='todo-container'>
      <h2 className='todo-title'>TO DO</h2>

      <div className='todo-card'>
        <div className='todo-add'>
          <input ref={inputRef} type='text' className='todo-input' placeholder='Add Your Task' />
          <div onClick={() => {add()}} className='todo-add-btn'>+</div>
        </div>
      </div>
      {todo.length > 0 && (
        <div className='todo-list'>
            {todo.map((item, index) => (
                <ToDoItem key={index} setToDo={setToDo} no={item.no} display={item.display} text={item.text} />
            ))}
        </div>
    )}

    </div>
  );
};

export default ToDo;



