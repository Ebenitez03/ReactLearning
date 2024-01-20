import Hello from "./componentes/Hello";
import Message from "./componentes/Message";
export function App() {
  return (
    <div>
      <Hello />
      <hr/>
      <Hello/>
      <Hello/>
      <hr/>
      <Message/>
    </div>
  );
}
export default App;

// It doesn't deliver errors 
// every time you keep the group 
// inside of a parent

// If I import the Message component
// it renders properly