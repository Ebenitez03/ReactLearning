import { useState } from "react";
import OnLogin from "./OnLogin";
import FocusableInput from "./FocusableInput";

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
  function handleReset(event) {
    setUser({ name: "", password: "", session: false });
    //It changes de checkbox status but not the checked
  }
  return (
    <div>
      <FocusableInput/>
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
      <OnLogin name={user.name} password={user.password} />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Login;
