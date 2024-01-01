import Hello from "./componentes/Hello";
import Message from "./componentes/Message";
import { Welcome } from "./componentes/Welcome";
export function App() {
  return (
    <div>
      <Hello />
      <hr/>
      <Hello/>
      <Hello/>
      <hr/>
      <Message/>
      <Welcome name={"Luisa"}/>
      <Welcome/>
    </div>
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