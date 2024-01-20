 import { useState } from "react";

export function Form() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", surname: "", email: "" });
  const [error, setError] = useState("");
  function handleChange(event) {
    console.log(event.target);
    setUser({ ...user, [event.target.id]: event.target.value });
  }
  console.log(user);
  function handleClick() {
    if (user.name && user.surname && user.email) {
      setUsers((prevUsers) => [...prevUsers, { ...user }]);
      setUser({ name: "", surname: "", email: "" });
    } else {
      setError("Por favor, completa todos los campos");
    }
  }
  return (
    <div>
      <input
        value={user.email}
        onChange={handleChange}
        id={"email"}
        type="email"
        placeholder="email"
      />
      <input
        value={user.name}
        onChange={handleChange}
        id={"name"}
        type="text"
        placeholder="name"
      />
      <input
        value={user.surname}
        onChange={handleChange}
        id={"surname"}
        type="text"
        placeholder="surname"
      />
      <button onClick={handleClick}>Submit</button>
      {error && <h1>{error}</h1>}
      {users.length > 0 &&
        users.map((user) => (
          <div>
            <h3>{user.name}</h3>
            <h3>{user.surname}</h3>
            <h3>{user.email}</h3>
          </div>
        ))}
    </div>
  );
}
