import Age from "./Age";

export function Welcome({ name = "Jimmy", age }) {
  return (
    <div>
        <p>Welcome, <strong>{name}</strong></p>
        {!!age && <Age age={age}/>}
        {age && <Age age={age}/>}
        {age>=18 && <Age age={age}/>}
        {age<=65 && age>=18 && <Age age={age}/>}
        {age<=65 && age>=18 && name=='John' && <Age age={age}/>}
    </div>
  );
}
export default Welcome;
