import AlertClock from "./componentes/AlertClock";
import Hello from "./componentes/Hello";
import Message from "./componentes/Message";
import { Welcome } from "./componentes/Welcome";
import Counter from "./componentes/Counter";
export function App() {
  return (
    <div>
      <Hello />
      <hr/>
      <Hello/>
      <Hello/>
      <hr/>
      <Message/>
      <Welcome name={"Luisa"} age={16}/>
      <Welcome/>
      <Welcome age={67}/>
      <Welcome age={16}/>
      <Welcome name={"John"} age={19}/>
      <Welcome name={"John"} age={64}/>
      <AlertClock></AlertClock>
      <Counter/>
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