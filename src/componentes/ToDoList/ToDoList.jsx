import { useState } from "react";
import styles from "./ToDoList.module.scss";

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
    <div className={styles.ToDoList}>
      <input className={styles.toDo} id="toDo" value={toDo} onChange={handleChange} type="text" />
      <button className={styles.button} onClick={handleSubmit} type="submit">
      Añade un ToDo
    </button><button className={styles.reset} onClick={handleReset}>Borra la lista</button><ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            {toDo}
            <button className={styles.remove} onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
