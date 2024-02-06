import { useState } from "react";

export function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  function handleChange(event) {
    setToDo(event.currentTarget.value);
  }
  console.log(toDo);

  function handleSubmit() {
    setToDos((prevToDos) => [...prevToDos, toDo]);
    setToDo("");
    console.log(toDos);
  }
  console.log(toDos);

  return (
    <div>
      <input id="toDo" value={toDo} onChange={handleChange} type="text" />
      <button onClick={handleSubmit} type="submit">
        Añade un ToDo
      </button>
      {toDos.map((toDo, index) => (
        <li key={index}>{toDo}</li>
      ))}
    </div>
  );
}
export default ToDoList;
