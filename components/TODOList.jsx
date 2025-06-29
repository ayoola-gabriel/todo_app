import React from 'react'
import {Circle, CircleCheckBig, Pencil, Trash} from 'lucide-react'

const TODOList = ({todos, setTodos}) => {
  return (
    <ol className='todo_list'>
        {todos && todos.length > 0 ? (
          todos?.map((item,index) => 
          <Item key={index} item={item} setTodos={setTodos}/>
        )) : (
            <p>Hi, what are you up to?</p>
        )}
    </ol>
  )
}

const Item = ({item, todos, setTodos}) => {
 const [editing, setEditing] = React.useState(false);
 const inputRef = React.useRef(null);

  const completeTodo = () => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === item.id 
          ? {...todo, is_completed: !todo.is_completed} 
          : todo
    )
   )
  };

  const handleEdit = () => {
    setEditing(true);
  }

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length, 
        inputRef.current.value.length
      )
    }
  }, [editing]);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  }

  const handleBlur = (event) => {
    setEditing(false);
  }

  const handleInputChange = (event) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id 
          ? {...todo, title: event.target.value} 
          : todo
      )
    );
  }
  
  const handleDelete = () => {
    setTodos((prevTodos) => 
      prevTodos.filter((todo) => todo.id !== item.id)
    );
  }


  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor='edit-todo'>
          <input 
            type="text" 
            name="edit-todo"
            defaultValue={item?.title} 
            ref={inputRef}
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
          </label>
        </form>
      ) : (
        <>
      <button className="todo_items_left" onClick={completeTodo}>
        {item?.is_completed ? (
          <CircleCheckBig size={30} />
        ) : (
          <Circle size={30} />
        )}
        <p 
        style={{textDecoration: item?.is_completed ? 'line-through' : 'none'}}
        >{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button onClick={handleEdit}>
          <span className="visually-hidden">Edit</span>
          <Pencil size={20} />
        </button>
        <button onClick={handleDelete}>
          <span className="visually-hidden">Delete</span>
          <Trash size={20} />
        </button>
      </div>
      </>
      )}
    </li>
  )
}

export default TODOList

