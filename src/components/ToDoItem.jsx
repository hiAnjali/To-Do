import './CSS/ToDoItem.css'
import unchecked from './Assests/unchecked.png';
import cross from './Assests/cross.png';
import checked from './Assests/checkbox.png';


const ToDoItem = ({no, display, text,setToDo}) => {

  const ToDodelete = (no) => {
    let data = JSON.parse(localStorage.getItem("todo"));
    data = data.filter((todo) => todo.no!==no);
    setToDo(data);
  }

  const toggle = (no) => {
  let data = JSON.parse(localStorage.getItem("todo"));
  for (let i = 0; i < data.length; i++) {
    if (data[i].no === no) {
      data[i].display = data[i].display === "" ? "none" : "";
      break;
    }
  }
  setToDo(data);
};


  return (
    <div className="todo-items">
        <div className={`todo-item-container ${display}`} onClick={() => {toggle(no)}}>
          {display === "" ? <img src={unchecked} alt="" /> : <img src={checked} alt="" />} 
          <div className="to-do-items-text">{text}</div>
        </div>
        <img className='todo-item-cross' onClick={() => {ToDodelete(no)}} src={cross} alt="" />
    </div>
  )
}

export default ToDoItem


