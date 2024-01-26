import { useState } from "react";
import OnLogin from "./hooks/OnLogin";

export function Login() {
  const [user, setUser] = useState({ name: "", password: "", session: false });
  function handleChange(event) {
    setUser({
      ...user,
      [event.currentTarget.id]:
        event.currentTarget.type == "checkbox"
          ? event.currentTarget.checked
          : event.target.value,
    });
  }
  console.log(user);

  return (
    <div>
      <input onChange={handleChange} type="text" id="name" value={user.name} />
      <input
        onChange={handleChange}
        type="password"
        id="password"
        value={user.password}
      />
      <input
        onChange={handleChange}
        type="checkbox"
        id="session"
        value={user.session}
      />
      <OnLogin name={user.name} password={user.password}/>
      </div>
  );
}
export default Login;
