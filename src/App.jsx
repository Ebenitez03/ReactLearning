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
import Colors from "./componentes/Colors";
import ToDoList from "./componentes/ToDoList";
import Welcome from "./componentes/Welcome";
export function App() {
  const colors=[{name:"red", id:1},{name:"blue", id:2},{name:"green",id:3}]
  return (
    <StrictMode>
    <div>
      <Welcome/>
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
      <Colors colors={colors}/>
      <ToDoList/>
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