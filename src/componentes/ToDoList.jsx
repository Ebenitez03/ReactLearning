import { useState } from "react";

export function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  function handleChange(event) {
    setToDo(event.currentTarget.value);
  }

  function handleSubmit() {
    setToDos((prevToDos) => [...prevToDos, toDo]);
    setToDo("");
  }

  function handleReset() {
    setToDos([]);
  }

  function handleRemove(index) {
    setToDos((prevToDos) => prevToDos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input id="toDo" value={toDo} onChange={handleChange} type="text" />
      <button onClick={handleSubmit} type="submit">
        Añade un ToDo
      </button>
      <button onClick={handleReset}>Borra la lista</button>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            {toDo}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
