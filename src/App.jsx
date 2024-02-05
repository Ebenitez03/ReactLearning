import AlertClock from "./componentes/AlertClock";
import Hello from "./componentes/Hello";
import Message from "./componentes/Message";
import Counter from "./componentes/Counter";
import Clock from "./componentes/Clock";
import MouseClicker from "./componentes/MouseClicker";
import InteractiveWelcome from "./componentes/InteractiveWelcome";
import Login from "./componentes/Login";
import UncontrolledLogin from "./componentes/UncontrolledLogin";
import { StrictMode } from "react";
export function App() {
  return (
    <StrictMode>
    <div>
      <Hello />
      <UncontrolledLogin/>
      <Login/>
      <hr/>
      <Message/>
      <AlertClock/>
      <Clock/>
      <Counter/>
      <MouseClicker/>
      <InteractiveWelcome/>
    </div>
    </StrictMode>
  );
}
export default App;

// It doesn't deliver errors 
// every time you keep the group 
// inside of a parent

// If I import the Message component
// it renders properly

// If there's no name passed as a prop
// it renders the message without the
// prop 